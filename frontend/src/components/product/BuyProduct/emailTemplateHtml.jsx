

const emailTemplateHtml = ( formData, totalPrice, operationCode, cart, shippingPrice ) => {
    
    return (
        `<div>
          <h4>Muchas gracias por tu compra ${formData.fullName}, en Pacuco Guardapolvos.</h4>
          <p>Tu numero de pedido: <strong># ${operationCode}</strong></p>
          <p>Encargaste lo siguiente: </p>
            ${ cart.map(item => 
                `
                <div style="display:flex;">
                  <div className='contenedor-imgs'>
                      <div className="contenedor-img-carrito">
                          <img src=${item.img} alt="" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:130px !important; width:100%; max-height:130px !important; height:auto !important;" data-proportionally-constrained="true" data-responsive="true"></img>
                      </div>
                  </div>
                  <div style="margin-left: 5px; color:#000;">
                      <h3>${item.name}</h3>
                      <p>Cantidad: ${item.amountToBuy}</p>
                      <p>Talle: ${item.size}</p>
                      <p>Valor unidad: $ ${item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price}</p>
                  </div>
                </div>
                `
            ) }
            
            ${shippingPrice !== 0 ? `<p style="margin-top:20px;">Envio: $ ${shippingPrice}</p>` : ''}
            
            <p style="margin-bottom:20px;"><strong>Total: $ ${totalPrice}</strong></p>

            <div style="color:#000;"> 
                <p>Una vez realizado el pago te pedimos que nos adjuntes el comprobante correspondiente al siguiente numero de Whatsapp: 11 2322-3048 (tenes hasta 48 hs de realizada la compra para efectuarla).</p>

                <p>Estamos esperando la confirmación del pago, que puede demorar hasta 48 hs hábiles (esto puede variar dependiendo del medio de pago elegido).</p>

                <p>Te recordamos que el tiempo de demora en caso de haber comprado un guardapolvo personalizado es entre 20 a 30 dias. En caso de ser stock, la entrega es inmediata.</p>

                <p>Si tu compra es con envío por Correo Argentino, LOS TIEMPOS DE ENVÍO SON APARTE DE LA DEMORA DE CONFECCIÓN.</p>

                <p>En caso de haber elegido RETIRO:</p>

                <p>Dirección de retiro:</p>
                <p>Retiro por SHOWROOM WILDE / Dirección: San isidro 6033 - entre Bahia Blanca y Martin Fierro. NO FUNCIONA EL TIMBRE! GOLPEAR PERSIANA</p>
                <p>Días y horarios de atención: coordinar al 11 2322-3048 (Valen) aclarando el numero de pedido. </p>

                <p>MUCHAS GRACIAS POR CONFIAR ♡</p>

                <p>PACUCO GUARDAPOLVOS</p>

                <p>* * *</p>
                <p>Si no hiciste esta compra o simplemente estabas probando nuestro sitio, por favor desconsiderá este e-mail.</p>
            </div>
        </div>`
    )
}

export default emailTemplateHtml

