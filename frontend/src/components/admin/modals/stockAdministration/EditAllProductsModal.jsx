
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import guardapolvosService  from '../../../../services/guardapolvos'
import { setToken } from '../../../../services/token'
import { useNavigate } from 'react-router-dom'

import searchProdsService from '../../../../services/searchProds'

import { reloadPage } from '../../common/commonFunctions'
import Swal from 'sweetalert2'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const EditAllProductsModal = (props) => {
    const userLogged = useSelector(state => state.login)
    const navigate = useNavigate()    

    const [choosenType, setChoosenType] = useState('guardapolvo')
    const [choosenPorcent, setChoosenPorcent] = useState(0)
    const [guardapolvos, setGuardapolvos] = useState([])

    useEffect(() => {
        setProducts('guardapolvo', choosenType === 'guardapolvo' ? '' : choosenType);
    }, [choosenType])

    const setProducts = async (category, type) => {
        let prods = [];
        if(type === '') prods = await searchProdsService.getSearch({'category': category});
        else prods = await searchProdsService.getSearch({'type': type , 'category': category});

        setGuardapolvos(prods);
    }

    const handleSelect = (e) => {
        setChoosenType(e.target.value)
    }
    
    const handleInputChange = (e) => {
        const porcent = e.target.value / 100
        setChoosenPorcent(porcent)
    }

    // cambiarle el precio en % a los guardapolvos
    const changePriceProducts = async (porcent, guardapolvos) => {        
        try {
            const token = setToken(userLogged.token)
        
            Swal.fire({ title: `Estas segura que queres modificar en un ${porcent*100}% el precio de los guardapolvos?`, icon: 'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar', })
            .then(async (result) => { 
                if (result.isConfirmed) {
                    try{
                        const res = await guardapolvosService.changePriceByPorcentage({ porcent: porcent, guardapolvos: guardapolvos }, token )
                    
                        if(res.ok) {
                            reloadPage(0.4)
                            return
                        }
                        else throw new Error("Error al intentar modificar el precio.")
                    } catch(error){
                        console.log(error)
                        if(error.response.status === 401){
                            Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            .then((result) => {
                                if(result.isConfirmed){ 
                                    navigate('/login') 
                                    return
                                }
                            })
                        } else {
                            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            return
                        }
                    }
 
                }
            })
        } catch(error) {
            console.error(error)
            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})            
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Si queremos bajar el precio, lo unico que hay que hacer es poner el numero en negativo.
          Ejemplo: Queremos bajar un 10%, ponemos -10%.
        </Tooltip>
    )

    return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Administrar todos los productos
                    </Modal.Title>                
                </Modal.Header>
                
                <Modal.Body>
                    <div className='d-flex' style={{fontSize:'16px', height:'40px', alignItems:'center'}}>
                        <p style={{margin:'0px'}}>Cambiar el precio a: </p>
                        <select name="" onChange={handleSelect} style={{marginLeft:'5px', border:'none', cursor:'pointer', outline:'none', boxShadow:'none'}}>
                            <option value='guardapolvo'>Todos</option>
                            <option value='nivel_inicial'>Nivel Inicial</option>
                            <option value='primaria'>Primaria</option>
                            <option value='stock'>Stock</option>
                            <option value='niños'>Niños</option>
                        </select>
                    </div>
                    <div className='d-flex' style={{fontSize:'16px', height:'40px', alignItems:'center'}}>
                        <p style={{margin:'0px'}}>En un: </p>
                        <input type="text" onChange={handleInputChange} style={{width:'40px', outline:'none', boxShadow:'none', border:'1px solid #e2e2e2', marginLeft:'4px'}} />
                        <p style={{margin:'0px', marginRight:'20px'}}>%</p>
                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <div><i className="bi bi-info-circle" style={{marginRight:'auto', width:'100%'}}></i></div>
                        </OverlayTrigger>
                    </div>

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                    <Button className='btn btn-dark' onClick={() => changePriceProducts(choosenPorcent, guardapolvos)}>Aplicar cambios</Button>
                </Modal.Footer>
            </Modal>
    )
}

export default EditAllProductsModal