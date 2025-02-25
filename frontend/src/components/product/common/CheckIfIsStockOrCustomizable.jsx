

export const checkIfIsStockOrCustomizable = ({guardapolvo, navigateTo, loadGuardapolvos=false, cart=false}) => {
    const table = navigateTo.replace('/', '')

    // console.log(guardapolvo, table)

    if ((table === 'stock' || table === 'guardapolvos' || table === 'busqueda') && guardapolvo.amount > 0){ 
        // console.log('Entrega Inmediata!')
        return <div className={`badge text-black tag-stock ${loadGuardapolvos ? "position-absolute" : null}`}
            style={{
                fontSize: cart ? '10px' : '11px',
                backgroundColor: " pink", 
                zIndex:'100'
        }}>Entrega Inmediata!</div>
    } else if ((table === 'nivel_inicial' || table === 'primaria' || table === 'guardapolvos' || table === 'busqueda') && guardapolvo.amount != 0){
        // console.log('Entrega en 20 dias!')
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