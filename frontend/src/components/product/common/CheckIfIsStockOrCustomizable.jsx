

export const checkIfIsStockOrCustomizable = ({guardapolvo: prod, navigateTo, loadGuardapolvos=false, cart=false}) => {

    if (prod.table === 'stock' &&  prod.amount !== 0){ 
        return <div className={`badge text-black tag-stock ${loadGuardapolvos ? "position-absolute" : null}`}
            style={{
                fontSize: cart ? '10px' : '11px',
                backgroundColor: " pink", 
                zIndex:'100'
        }}>Entrega Inmediata!</div>
    } else if ((prod.table === 'nivel_inicial' || prod.table === 'primaria' || prod.table === 'guardapolvos' || prod.table === 'busqueda') && prod.amount != 0){
        return <div className={`badge text-black tag-stock ${loadGuardapolvos ? "position-absolute" : null}`} 
            style={{
                fontSize: cart ? '10px' : '11px',
                backgroundColor: " pink", 
                zIndex:'100'
        }}>Entrega en 30/40 dias!</div>
    } else {
        return null
    }
}

export default checkIfIsStockOrCustomizable