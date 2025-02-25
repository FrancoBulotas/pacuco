
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OffCanvasBody = ({ updateQueryParams, isCustom, isAccesory }) => {
    const navigate = useNavigate();
    const config = useSelector(state => state.config)

    const [categoriesData, setCategoriesData] = useState(config != null ? config[0].categories : null)

    useEffect(() => {
        if(config != null) setCategoriesData(config[0].categories);
    }, [config])

    const divContainer = {border:'1px solid #e0e0e0', padding:'20px', borderRadius: '6px', marginBottom:'5px'};
    const h4Title = {padding:'0px', fontSize:'17px'};
    const divLine = {margin:'10px 0px', border:'1px solid #e0e0e0', width:'100%'};
    const divButtons = {display:'flex', flexWrap:'wrap'};
    const sizeButtonStyle = { fontSize: '15px', backgroundColor:'#f1f1f1',display:'flex', justifyContent:'center', alignItems:'center', border:'none', borderRadius:'6px', padding:'20px', margin:'6px', width:'60px', height:'20px',}
    const tableButtonStyle = { fontSize: '15px', backgroundColor:'#f1f1f1',display:'flex', justifyContent:'center', alignItems:'center', border:'none', borderRadius:'6px', padding:'10px', margin:'6px', width:'80px', }
    const watchAllButtonStyle = { width:'100px', fontSize: '12px', backgroundColor:'#f1f1f1', border:'none', borderRadius:'6px', padding:'5px', margin:'6px', width:'60px', }
    const tableButtonStyleDescripcion = { fontSize: '13px', backgroundColor:'#f1f1f1', display:'flex', justifyContent:'center', alignItems:'center', border:'none', borderRadius:'6px', padding:'10px', margin:'6px', width:'90px', }

    // const obtenerValoresUnicos = (campo) => {
    //     const valores = guardapolvos.map(producto => producto.description[campo]);
    //     return [...new Set(valores)];
    // }
      
    // const basesUnicas = obtenerValoresUnicos('base');
    // const detallesUnicos = obtenerValoresUnicos('detalle');
    // const vivosUnicos = obtenerValoresUnicos('vivos');
    // const bolsillosUnicos = obtenerValoresUnicos('bolsillos');

    const availableSizes = {
        custom: ['00', '0', '1', '2', '3', '4', '5', 'S', 'M', 'L'],
    };

    return (
        <>
            {/* Render Categories and Subcategories */}
            {Object.entries(categoriesData).map(([category, subcategories]) => (
                <div key={category} style={divContainer}>
                <h4 style={h4Title}>
                    {category}
                    <button
                        key={category}
                        style={watchAllButtonStyle}
                        onClick={() => navigate(updateQueryParams('category', category.toLowerCase().replace(' ', '_')))}
                    >
                        ver todos
                    </button>
                </h4>
                
                <div style={divLine}></div>
                <div style={divButtons}>
                    {Object.keys(subcategories).map((type) => (
                    type !== 'notShow' &&    
                    <button
                        key={type}
                        style={tableButtonStyle}
                        onClick={() => navigate(updateQueryParams('type', type.toLowerCase().replace(' ', '_')))}
                    >
                        {type}
                    </button>
                    ))}
                </div>
                </div>
            ))}
            <div style={divContainer}>
                <h4 style={h4Title}>Talle</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    {availableSizes.custom.map((size) => (
                    <button
                        key={size}
                        style={sizeButtonStyle}
                        onClick={() => navigate(updateQueryParams('size', size))}
                    >
                        {size}
                    </button>
                    ))}
                </div>
            </div>  

            {/* <div style={divContainer}>
                <h4 style={h4Title}>Guardapolvos</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('type', 'nivel_inicial'))}>Nivel Inicial</button>
                    <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('type', 'primaria'))}>Primaria</button>
                    <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('type', 'stock'))}>Stock</button>
                    <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('type', 'niños'))}>Niños</button>
                </div>
            </div>
            <div style={divContainer}>
                <h4 style={h4Title}>Accesorios</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('type', 'totebag'))}>Totebags</button>
                </div>
            </div>
            {
                isCustom &&
                <div style={divContainer}>
                    <h4 style={h4Title}>Talle</h4>
                    <div style={divLine}></div>
                    <div style={divButtons}>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '00'))}>00</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '0'))}>0</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '1'))}>1</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '2'))}>2</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '3'))}>3</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '4'))}>4</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', '5'))}>5</button>
                    </div>
                </div>
            }
            {
                isAccesory &&
                <div style={divContainer}>
                    <h4 style={h4Title}>Talle</h4>
                    <div style={divLine}></div>
                    <div style={divButtons}>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', 'M'))}>M</button>
                        <button style={sizeButtonStyle} onClick={() => navigate(updateQueryParams('size', 'L'))}>L</button>
                    </div>
                </div>
            } */}













            {/* {
                !custom &&
                <div style={divContainer}>
                    <h4 style={h4Title}>Cantidad</h4>
                    <div style={divLine}></div>
                    <div style={divButtons}>
                        <button style={tableButtonStyle} onClick={() => navigate(updateQueryParams('stockAvailable', true))}>Stock Disponible</button>
                    </div>
                </div>
            } */}
            {/* <div style={divContainer}>
                <h4 style={h4Title}>Base</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    {basesUnicas.map((nombre, i) => (
                            <button key={i} style={tableButtonStyleDescripcion} onClick={() => navigate(updateQueryParams('description', `base_${nombre}`))}>{nombre}</button>    
                    ))}
                </div>
            </div>
            <div style={divContainer}>
                <h4 style={h4Title}>Detalle</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    {detallesUnicos.map((nombre, i) => (
                                <button key={i} style={tableButtonStyleDescripcion} onClick={() => navigate(updateQueryParams('description', `detalles_${nombre}`))}>{nombre}</button>    
                    ))}
                </div>
            </div>
            <div style={divContainer}>
                <h4 style={h4Title}>Vivos</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    {vivosUnicos.map((nombre, i) => (
                                <button key={i} style={tableButtonStyleDescripcion} onClick={() => navigate(updateQueryParams('description', `vivos_${nombre}`))}>{nombre}</button>    
                    ))}
                </div>
            </div>
            <div style={divContainer}>
                <h4 style={h4Title}>Bolsillos</h4>
                <div style={divLine}></div>
                <div style={divButtons}>
                    {bolsillosUnicos.map((nombre, i) => (
                                <button key={i} style={tableButtonStyleDescripcion} onClick={() => navigate(updateQueryParams('description', `bolsillos_${nombre}`))}>{nombre}</button>    
                    ))}
                </div>
            </div> */}
            {/* <button style={{marginTop:'20px'}} className="btn btn-dark" onClick={() => resetProducts()}>Borrar filtros</button> */}
        </>
    )
}

export default OffCanvasBody