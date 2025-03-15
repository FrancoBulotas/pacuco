
import purchasedProductService from '../../../../services/purchasedProduct'
import emailService from '../../../../services/emails'
import emailTemplateHtml from './emailTemplateHtml'
import emailToAdminTemplateHtml from './emailToAdminTemplateHtml'

export const sendEmailJS = async (formData, cart, totalPrice, shippingPrice) => {
    
    // const cartForDisplay = createCartForDisplay(cart)
    const operationCode = generateOperationCode()
    
    sendPurchaseDataToDB(operationCode, formData, totalPrice, cart)
    const response = await sendEmail(formData, totalPrice, operationCode, cart, shippingPrice)
    return response
}


const sendEmail = async (formData, totalPrice, operationCode, cart, shippingPrice) => {
    try {
        // const html = emailTemplateHtml(formData, totalPrice, operationCode, cart)
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

// const createCartForDisplay = (cart) => {
//     let cartForDisplay = ''
//     cart.forEach((product) => {
//         cartForDisplay = cartForDisplay + "- " + product['name'] + 
//                             " | Cantidad: " + product['amountToBuy'] +
//                             " | Precio: " + product['price'] + 
//                             " | Talle: " + product['size'] +"\n\n"
//     })
//     return cartForDisplay
// }

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
    // const timeNow = new Date();
    // const options = { timeZone: "America/Argentina/Buenos_Aires" };
    // const time = timeNow.toLocaleString("es-AR", options);
    const formatter = new Intl.DateTimeFormat("es-AR", { 
        timeZone: "America/Argentina/Buenos_Aires",
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    const time = formatter.format(new Date());

    const data = {
        operationCode: operationCode,
        clientData: formData,
        cart: cart,
        totalPricePurchased: totalPrice,
        time: time,
        saleConfirmed: false,
    }

    try {
        await purchasedProductService.create(data)
    } catch (error) {
        console.log(error)
    }
}
