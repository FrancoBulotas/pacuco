
const FiltersButton = ({ resetFiltredProducts, filters }) => {

    const filtersContainerStyle = { position:'relative', backgroundColor:'#f1f1f1', margin:'5px', borderRadius:'6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const xButtonStyle = {top:'-8px', left:'0px', padding:'4px 6px', border:'none'}

    return (
        <div style={{margin:'10px 25px', padding:'10px', border:'1px solid #f1f1f1', borderRadius:'6px', fontSize:'14px'}}>
            <div className='d-flex align-items-center justify-content-center'>
                <div>Filtros aplicados: </div>
                <div className='d-flex' style={{ marginLeft:'6px'}}>
                {
                    Object.entries(filters).map(([filterKey, filterValue], i) => {
                        if(filterValue != null && filterKey != 'type' && filterKey != 'category') {
                            let text;
                            if(filterKey == 'withStock') {
                                if(filterValue) text = 'En stock';
                                else if(!filterValue) text = 'Sin stock';
                            }
                            else if(filterKey == 'withDiscount'){
                                if(filterValue) text = 'Con descuento aplicado';
                                else if(!filterValue) text = 'Sin descuento aplicado';
                            } 
                            else if(filterKey == 'onDisplay'){
                                if(filterValue) text = 'Se muestran al publico';
                                else if(!filterValue) text = 'No se muestran al publico';
                            } 
                            else if(filterKey == 'name') if(filterValue) text = filterValue;

                            return (
                                <div key={i} style={filtersContainerStyle}>
                                    <div style={{padding:'8px 15px'}}>{text}</div>
                                    <button onClick={() => resetFiltredProducts(filterKey)} className="badge bg-dark text-white position-absolute" style={xButtonStyle}>x</button>
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