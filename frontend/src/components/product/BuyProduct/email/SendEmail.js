
import purchasedProductService from '../../../../services/purchasedProduct'
import emailService from '../../../../services/emails'
import emailTemplateHtml from './emailTemplateHtml'
import emailToAdminTemplateHtml from './emailToAdminTemplateHtml'

export const sendEmailJS = async (formData, cart, totalPrice, shippingPrice) => {
    
    // const cartForDisplay = createCartForDisplay(cart)
    const operationCode = generateOperationCode()
    
    sendPurchaseDataToDB(operationCode, formData, totalPrice, cart)
    const response = await sendEmail(formData, totalPrice, operationCode, cart, shippingPrice)
    return [response, operationCode]
}

export const checkPrice = (item, formData) => {
    if (formData.paymentMethod === 'Efectivo' || formData.paymentMethod === 'Transferencia Bancaria'){
        return item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price;
    }
    else {
        return item.discountListedPrice || item.discountListedPrice > 0 ? item.discountListedPrice : item.listedPrice;
    }
}   

const sendEmail = async (formData, totalPrice, operationCode, cart, shippingPrice) => {
    try {
        const msgToClient = {
            to: formData.email, 
            from: 'compras@pacuco.com.ar',
            subject: 'Gracias por comprar en Pacuco!  IMPORTANTE, LEER TODA LA INFORMACION!!',
            html: emailTemplateHtml(formData, totalPrice, operationCode, cart, shippingPrice),
        }
        const msgToAdmin = {
            to: 'compras@pacuco.com.ar', 
            from: 'compras@pacuco.com.ar',
            subject: 'Compra realizada en Pacuco!',
            html: emailToAdminTemplateHtml(formData, totalPrice, operationCode, cart) ,
        }

        await emailService.sendEmail(msgToClient)
        await emailService.sendEmail(msgToAdmin)
    
        return true

    } catch (error) {
        console.log(error)
        return false
    }    
}

const generateOperationCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    var operationCode = "";

    for (var i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * letters.length);
        operationCode += letters.charAt(index);
    }
    return operationCode
}

const sendPurchaseDataToDB = async (operationCode, formData, totalPrice, cart) => {
    const data = {
        operationCode: operationCode,
        clientData: formData,
        cart: cart,
        totalPricePurchased: totalPrice,
        saleConfirmed: false,
    }

    try {
        await purchasedProductService.create(data)
    } catch (error) {
        console.log(error)
    }
}
