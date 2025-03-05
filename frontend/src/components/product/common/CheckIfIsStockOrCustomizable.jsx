

export const checkIfIsStockOrCustomizable = ({guardapolvo, navigateTo, loadGuardapolvos=false, cart=false}) => {
    const table = navigateTo.replace('/', '')

    if (guardapolvo.table === 'stock' ){ 
        return <div className={`badge text-black tag-stock ${loadGuardapolvos ? "position-absolute" : null}`}
            style={{
                fontSize: cart ? '10px' : '11px',
                backgroundColor: " pink", 
                zIndex:'100'
        }}>Entrega Inmediata!</div>
    } else if ((guardapolvo.table === 'nivel_inicial' || guardapolvo.table === 'primaria' || guardapolvo.table === 'guardapolvos' || guardapolvo.table === 'busqueda') && guardapolvo.amount != 0){
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