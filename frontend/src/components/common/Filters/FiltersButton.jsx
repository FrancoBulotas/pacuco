
const FiltersButton = ({ resetProducts, filters }) => {

    const filtersContainerStyle = { position:'relative', backgroundColor:'#f1f1f1', margin:'5px', borderRadius:'6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const xButtonStyle = {top:'-8px', left:'0px', padding:'4px 6px', border:'none'}

    return (
        <div style={{margin:'10px 25px', padding:'10px', border:'1px solid #f1f1f1', borderRadius:'6px', fontSize:'14px'}}>
            <div className='d-flex align-items-center justify-content-center'>
                <div>Filtros: </div>
                <div className='d-flex' style={{ marginLeft:'6px'}}>
                {
                    Object.entries(filters).map(([filterKey, filterValue], i) => {
                        if(filterValue != null) {
                            let priceText;
                            if(filterValue == 'asc') priceText = 'precio menor a mayor';
                            if(filterValue == 'desc') priceText = 'precio mayor a menor';
                            return (
                                filterValue != '' && <div key={i} style={filtersContainerStyle}>
                                    <div style={{padding:'8px 15px'}}>{filterKey === 'sortByPrice' ? priceText : filterValue}</div>
                                    <button onClick={() => resetProducts(filterKey)} className="badge bg-dark text-white position-absolute" style={xButtonStyle}>x</button>
                                </div>
                            )
                        }
                    }) 
                }
                </div>
                <div style={{marginRight: 'auto'}}></div>
                {/* <button style={{marginLeft:'auto', fontSize:'14px'}} className="btn btn-light" onClick={() => resetProducts()}>Borrar filtros</button> */}
            </div>
        </div>
    )
}

export default FiltersButton