
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FiltersBar = ({ searchParams, setSearchParams, table, setCurrentPage }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleClick = (key, value) => {
        handleClose();
        setCurrentPage(1);
        setSearchParams({...searchParams, [key]: value});
    }
     
    const divContainer = {border:'1px solid #e0e0e0', padding:'20px', borderRadius: '6px', marginBottom:'5px'};
    const h4Title = {padding:'0px', fontSize:'17px'};
    const divLine = {margin:'10px 0px', border:'1px solid #e0e0e0', width:'100%'};
    const divButtons = {display:'flex', flexWrap:'wrap'};
    const sizeButtonStyle = { fontSize: '15px', backgroundColor:'#f1f1f1', display:'flex', justifyContent:'center', alignItems:'center', border:'none', borderRadius:'6px', padding:'20px', margin:'6px', width:'80px', height:'70px',}

    return (
        <div>
            <div style={{display:'flex', height:'40px', marginLeft:'10px', marginRight:'10px', marginBottom:'5px', paddingTop:'5px'}}>
               
                <Button onClick={handleShow} variant="light" style={{marginLeft:'auto', backgroundColor:'#fff', color:'#000', padding:'5px 25px', fontSize:'16px'}}>
                    Filtrar <i className="bi bi-filter" style={{padding:'5px 5px'}}></i>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    {table === 'stock' && <div style={divContainer}>
                        <h4 style={h4Title}>Por cantidad</h4>
                        <div style={divLine}></div>
                        <div style={divButtons}>
                            <button
                                key={'withStock'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('withStock', true)}
                            >
                                En stock
                            </button>
                            <button
                                key={'withoutStock'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('withStock', false)}
                            >
                                Sin stock
                            </button>
                            {/* <button
                                key={'all'}
                                style={sizeButtonStyle}
                                onClick={() => setSearchParams({...searchParams, 'withStock': null})}
                            >
                                Todos
                            </button> */}
                        </div>
                    </div>}
                    <div style={divContainer}>
                        <h4 style={h4Title}>Por descuento</h4>
                        <div style={divLine}></div>
                        <div style={divButtons}>
                            <button
                                key={'withDiscount'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('withDiscount', true)}
                            >
                                Con descuento
                            </button>
                            <button
                                key={'withoutDiscount'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('withDiscount', false)}
                            >
                                Sin descuento
                            </button>
                            {/* <button
                                key={'all'}
                                style={sizeButtonStyle}
                                onClick={() => setSearchParams({...searchParams, 'withDiscount': null})}
                            >
                                Todos
                            </button> */}
                        </div>
                    </div>
                    <div style={divContainer}>
                        <h4 style={h4Title}>Por exposicion</h4>
                        <div style={divLine}></div>
                        <div style={divButtons}>
                            <button
                                key={'show'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('onDisplay', true)}
                            >
                                Se estan mostrando
                            </button>
                            <button
                                key={'notShow'}
                                style={sizeButtonStyle}
                                onClick={() => handleClick('onDisplay', false)}
                            >
                                No se estan mostrando
                            </button>
                            {/* <button
                                key={'all'}
                                style={sizeButtonStyle}
                                onClick={() => setSearchParams({...searchParams, 'onDisplay': null})}
                            >
                                Todos
                            </button> */}
                        </div>
                    </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default FiltersBar
