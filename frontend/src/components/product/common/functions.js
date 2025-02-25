
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function validatePhoneNumber(num) {    
    // Eliminar todos los caracteres que no sean dígitos
    const justNumbers = num.replace(/\D/g, '');

    // Expresión regular para validar números argentinos sin el prefijo internacional
    const regex = /^(11|[2368]\d{2})\d{8}$/;

    // Validar el número
    if (!regex.test(justNumbers)) {
        return { valid: false, message: 'El número no es válido para Argentina.' };
    }

    return { valid: true, justNumbers };
  }

export const createMessage = (formData, cart, totalPrice, shippingPrice) => {
    const operationCode = generateOperationCode();
    
    sendPurchaseDataToDB(operationCode, formData, totalPrice, cart);
    return `Gracias por comprar en Pacuco Guardapolvos! IMPORTANTE LEER TODA LA INFORMACION!!
    
Muchas gracias por tu compra *${formData.fullName}*.
Tu numero de pedido es: *#${operationCode}*.

Encargaste lo siguiente: 
${ cart.map(item => 
    `
    - *Nombre:* ${item.name}
    - *Cantidad:* ${item.amountToBuy}
    - *Talle:* ${item.size}
    - *Valor unidad:* $ ${item.discountPrice || item.discountPrice > 0 ? formatNumber(item.discountPrice) : formatNumber(item.price)}
    `
).join('\n')}
${shippingPrice !== 0 ? `*Envio:* $ ${formatNumber(shippingPrice)}` : ''}
Total: *$${formatNumber(totalPrice)}*  

Una vez realizado el pago te pedimos que nos adjuntes el comprobante correspondiente en este chat (tenes hasta 48 hs de realizada la compra para efectuarla).

Estamos esperando la confirmación del pago, que puede demorar hasta 48 hs hábiles (esto puede variar dependiendo del medio de pago elegido).

Te recordamos que el tiempo de demora en caso de haber comprado un guardapolvo personalizado es entre 20 a 30 dias. En caso de ser stock, la entrega es inmediata.

Si tu compra es con envío por Correo Argentino, LOS TIEMPOS DE ENVÍO SON APARTE DE LA DEMORA DE CONFECCIÓN.

En caso de haber elegido RETIRO:

Dirección de retiro:
Retiro por SHOWROOM WILDE / Dirección: San isidro 6033 - entre Bahia Blanca y Martin Fierro. NO FUNCIONA EL TIMBRE! GOLPEAR PERSIANA
Días y horarios de atención: coordinar al 1169401968 (Aldi) o al 1163601162 (Adry) aclarando el numero de pedido. 

MUCHAS GRACIAS POR CONFIAR ♡

*PACUCO GUARDAPOLVOS*

* * *
Si no hiciste esta compra o simplemente estabas probando nuestro sitio, por favor desconsiderá este e-mail.
    `
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

import purchasedProductService from '../../../services/purchasedProduct'

const sendPurchaseDataToDB = async (operationCode, formData, totalPrice, cart) => {
    const timeNow = new Date();
    const options = { timeZone: "America/Argentina/Buenos_Aires" };
    const time = timeNow.toLocaleString("es-AR", options);

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