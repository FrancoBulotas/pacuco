

const emailToAdmiTemplateHtml = ( formData, totalPrice, operationCode, cart ) => {
    
    return (
        `<div style="color:#000;">
            <p>Cliente: ${formData.fullName}</p>
            <p>Numero de pedido: # ${operationCode}</p>
            <p>Mail: ${formData.email}</p>
            <p>DNI: ${formData.dni}</p>
            <p>Telefono: ${formData.phone}</p>
            <p>Provincia: ${formData.province}</p>
            <p>Localidad: ${formData.city}</p>
            <p>Direccion: ${formData.address}</p>
            <p>Tipo de envio: ${formData.shipMethod}</p>
            <p>Sucursal: ${formData.sucursal}</p>
            <p>Codigo Postal: ${formData.zipCode}</p>
            <p>Medio de pago: ${formData.paymentMethod}</p>
            <p>Total: <strong>$ ${totalPrice}</strong></p>

            <p>Carrito: </p>
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
                    <p>Tipo: ${item.table === 'stock' ? `Stock` : 'Pedido'}</p>
                    <p>Valor unidad: $ ${item.discountPrice && (item.discountPrice !== "0" || item.discountPrice > 0) ? item.discountPrice : item.price}</p>
                </div>
                </div>
                `
            ) }
        </div>`
    )
}

export default emailToAdmiTemplateHtml

