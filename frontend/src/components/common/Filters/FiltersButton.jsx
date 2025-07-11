
const FiltersButton = ({ resetProducts, resetAdminProducts, filters, searchParamsAdmin }) => {
    const filtersContainerStyle = { position:'relative', backgroundColor:'#f1f1f1', margin:'5px', borderRadius:'6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const xButtonStyle = {top:'-8px', left:'0px', padding:'4px 6px', border:'none'}

    return (
        <div className="filters-container">
            <div className='choosen-filters-container'>
            { filters && 
                Object.entries(filters).map(([filterKey, filterValue], i) => {
                    if(filterValue != null) {
                        let text = filterValue;
                        if(filterValue == 'asc') text = 'Precio menor a mayor';
                        else if(filterValue == 'desc') text = 'Precio mayor a menor';
                        else if(filterKey == 'size') text = `Talle ${filterValue}`;

                        return (
                            filterValue != '' && <div key={i} style={filtersContainerStyle}>
                                <div style={{padding:'8px 15px', fontSize:'12px'}}>{text.replace('_', ' ').toUpperCase()}</div>
                                <button onClick={() => resetProducts(filterKey)} className="badge bg-dark text-white position-absolute" style={xButtonStyle}>x</button>
                            </div>
                        )
                    }
                }) 
            }
            { searchParamsAdmin &&
                Object.entries(searchParamsAdmin).map(([filterKey, filterValue], i) => {
                    if(filterValue != null && filterKey != 'type' && filterKey != 'category') {
                        let text = filterValue;
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
                        else if(filterValue == 'asc') text = 'Precio menor a mayor';
                        else if(filterValue == 'desc') text = 'Precio mayor a menor';
                        else if(filterKey == 'name') text = filterValue;
                        else if(filterKey == 'size') text = `Talle ${filterValue}`;

                        return (
                            <div key={i} style={filtersContainerStyle}>
                                <div style={{padding:'10px 15px', fontSize:'12px'}}>{text.replace('_', ' ').toUpperCase()}</div>
                                <button onClick={() => resetAdminProducts(filterKey)} className="badge bg-dark text-white position-absolute" style={xButtonStyle}>x</button>
                            </div>
                        )
                    }
                }) 
            }
            </div>
        </div>
    )
}

export default FiltersButton