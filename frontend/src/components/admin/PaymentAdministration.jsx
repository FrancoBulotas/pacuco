
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Header from './common/Header'
import { URL_COMMON_IMAGES_AZURE } from '../common/consts'
import AdminNavBar from './common/NavBar'

import { setToken } from '../../services/token'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { reloadPage } from './common/commonFunctions'
import { setNewPaymentMethods } from '../../reducers/paymentMethodsReducer'
import imageService from '../../services/imageUpload'
import Swal from 'sweetalert2'

import '../../assets/styles/admin/paymentAdministration.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/admin/paymentAdministration.scss'

const PaymentAdministration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paymentMethods = useSelector(state => state.paymentMethods) 
    const userLogged = useSelector(state => state.login)
    const [newValues, setNewValues] = useState({
        aliasCbu: '',
        aliasCvu: '',
        cbu: '',
        cvu: '',
        titularCuentaCbu: '',
        titularCuentaCvu: '',
        image: null,
        sucursal: '',
        domicilio: '',
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setNewValues({
            ...newValues,
            [name]: value,
        })
    }

    const handleFileChange = (e) => {
        setNewValues({...newValues, image: e.target.files[0]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()  
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        const data = {
            aliasCbu: newValues.aliasCbu !== '' ?  newValues.aliasCbu :  paymentMethods.aliasCbu,
            cbu: newValues.cbu !== '' ?  newValues.cbu :  paymentMethods.cbu,
            aliasCvu: newValues.aliasCvu !== '' ?  newValues.aliasCvu :  paymentMethods.aliasCvu,
            cvu: newValues.cvu !== '' ?  newValues.cvu :  paymentMethods.cvu,
            titularCuentaCbu: newValues.titularCuentaCbu !== '' ?  newValues.titularCuentaCbu :  paymentMethods.titularCuentaCbu,
            titularCuentaCvu: newValues.titularCuentaCvu !== '' ?  newValues.titularCuentaCvu :  paymentMethods.titularCuentaCvu,
            priceShipmentSucursal: newValues.sucursal !== '' ?  newValues.sucursal :  paymentMethods.priceShipmentSucursal,
            priceShipmentDomicilio: newValues.domicilio !== '' ?  newValues.domicilio :  paymentMethods.priceShipmentDomicilio,
            imgQr: newValues.image !== null ? `${URL_COMMON_IMAGES_AZURE}/${uniqueSuffix}-${newValues.image.name}` : paymentMethods.imgQr,
        }

        let imageFile = { image: newValues.image !== null ? newValues.image : false }
              
        try {
            const token = setToken(userLogged.token)
            if (imageFile.image !== false) {
                const formData = new FormData();
                formData.append('images', imageFile.image)
                formData.append('blobName', uniqueSuffix)
                formData.append('containerName', 'common')

                try { 
                    await imageService.upload(formData, token) 
                    reloadPage(1)
                }
                catch (error) {
                    console.log(error)
                    if (error.response.data.error === 'token expired') { 
                        Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then((result) => {
                            if(result.isConfirmed){ navigate('/login') }
                        })
                    } else {
                        Swal.fire({title:'Error al subir imagen', text:'Intentalo de nuevo mas tarde!', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then(() => { return })
                    }
                }
            }   
            imageFile = false
            dispatch(setNewPaymentMethods(paymentMethods.id, data))
            setNewValues({ aliasCbu: '', aliasCvu: '', cbu: '', cvu: '', titularCuentaCbu: '', titularCuentaCvu: '', image: null, sucursal: '', domicilio: ''})
            e.stopPropagation()
        } catch (error) {
            console.log(error)
        }
    }

    const divPayment = {
        display:'flex', 
        flexDirection:'column'
    }

    const htmlMercadoPago = () => {
        return (
            <form style={divPayment} onSubmit={handleSubmit}>
                <h6>Datos actuales</h6>
                <label>Titular: {paymentMethods.titularCuentaCvu}</label>
                <label>Alias: {paymentMethods.aliasCvu}</label>
                <label>CVU: {paymentMethods.cvu}</label>
                <h6>Nuevos datos</h6>
                <FloatingLabel controlId="floatingInput" label="nuevo titular" className="mb-2" >
                    <Form.Control type="text" placeholder="nuevo titular" name='titularCuentaCvu' value={newValues.titularCuentaCvu} onChange={handleChangeInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="nuevo alias" className="mb-2" >
                    <Form.Control type="text" placeholder="nuevo alias" name='aliasCvu' value={newValues.aliasCvu} onChange={handleChangeInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="nuevo cvu" className="mb-2" >
                    <Form.Control type="text" placeholder="nuevo cvu" name='cvu' value={newValues.cvu} onChange={handleChangeInput} />
                </FloatingLabel>
                {/* Alias: <input type="text" placeholder='nuevo alias' name='aliasCvu' value={newValues.aliasCvu} onChange={handleChangeInput} /> */}
                {/* CVU: <input type="text" placeholder='nuevo cvu' name='cvu' value={newValues.cvu} onChange={handleChangeInput}/> */}
                <button type='submit' className='btn btn-dark'>Modificar</button>
            </form>
        )
    }
    const htmlTransferencia = () => {
        return (
            <form style={divPayment} onSubmit={handleSubmit}>
                <h6>Datos actuales</h6>
                <label>Titular: {paymentMethods.titularCuentaCbu}</label>
                <label>Alias: {paymentMethods.aliasCbu}</label>
                <label>CBU: {paymentMethods.cbu}</label>
                <h6>Nuevos datos</h6>
                <FloatingLabel controlId="floatingInput" label="nuevo titular" className="mb-2" >
                    <Form.Control type="text" placeholder="nuevo titular" name='titularCuentaCbu' value={newValues.titularCuentaCbu} onChange={handleChangeInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="nuevo alias" className="mb-2" >
                    <Form.Control type="text" placeholder='nuevo alias' name='aliasCbu' value={newValues.aliasCbu} onChange={handleChangeInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="nuevo cbu" className="mb-2" >
                    <Form.Control type="text" placeholder='nuevo cbu' name='cbu' value={newValues.cbu} onChange={handleChangeInput} />
                </FloatingLabel>
                {/* Alias: <input type="text" placeholder='nuevo alias' name='aliasCbu' value={newValues.aliasCbu} onChange={handleChangeInput} />
                CBU: <input type="text" placeholder='nuevo cbu' name='cbu' value={newValues.cbu} onChange={handleChangeInput}/> */}
                <button type='submit' className='btn btn-dark'>Modificar</button>
            </form>
        )
    }
    const htmlCuentaDni = () => {
        return (
            <form style={divPayment} onSubmit={handleSubmit}>
                <h6>QR actual</h6>
                <img src={paymentMethods.imgQr} alt="" style={{height:'150px', width:'150px'}} />
                <h6>Nuevo QR</h6>
                {/* <input type="file" name='image' onChange={handleFileChange} /> */}
                <Form.Control type="file"name='image' onChange={handleFileChange} style={{marginBottom:'10px'}} />
                <button type='submit' className='btn btn-dark'>Modificar</button>
            </form>

        )
    }
    const htmlSucursal = () => {
        return (
            <form style={divPayment} onSubmit={handleSubmit}>
                <h6>Datos actuales</h6>
                <label>Valor: ${paymentMethods.priceShipmentSucursal}</label>
                <h6>Nuevos datos</h6>
                <FloatingLabel controlId="floatingInput" label="envio a sucursal" className="mb-2" >
                    <Form.Control type="text" placeholder='envio a sucursal' name='sucursal' value={newValues.sucursal} onChange={handleChangeInput}  />
                </FloatingLabel>
                {/* <input type="text" placeholder='envio a sucursal' name='sucursal' value={newValues.sucursal} onChange={handleChangeInput} /> */}
                <button type='submit' className='btn btn-dark' >Modificar</button>
            </form>
        )
    }
    const htmlDomicilio = () => {
        return (
            <form style={divPayment} onSubmit={handleSubmit}>
                <h6>Datos actuales</h6>
                <label>Valor: ${paymentMethods.priceShipmentDomicilio}</label>
                <h6>Nuevos datos</h6>
                <FloatingLabel controlId="floatingInput" label="envio a domicilio" className="mb-2" >
                    <Form.Control type="text" placeholder='envio a domicilio' name='domicilio' value={newValues.domicilio} onChange={handleChangeInput} />
                </FloatingLabel>
                {/* <input type="text" placeholder='envio a domicilio' name='domicilio' value={newValues.domicilio} onChange={handleChangeInput} /> */}
                <button type='submit' className='btn btn-dark'>Modificar</button>
            </form>
        )
    }

    const mainContainer = { 
        width: '100%',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection: 'column',
        backgroundColor:'#fff',
        minHeight: '60vh'
    }
    const secondContainer = { 
        width:'80%', 
        // height:'55vh', 
        padding:'20px'
    }

    const containerHeaderStyle = {
        width:'100%', 
        margin: 'auto',
        paddingTop:'20px'
    }

    const containerFormStyle = {
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '0.25rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div>
            <div style={mainContainer}>
                <div style={secondContainer}> 
                    <div style={containerHeaderStyle}>
                        {/* <Header /> */}
                        <h3>Modificar Medios de Pago</h3>
                    </div>
                    <div className="tab-container">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={5} className='col'>
                                    <Nav variant="pills" className="flex-column nav-pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Mercado Pago</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Transferencia Bancaria</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Cuenta DNI</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="forth">Envio a Sucursal</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Envio a domicilio</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">{htmlMercadoPago()}</Tab.Pane>
                                    <Tab.Pane eventKey="second">{htmlTransferencia()}</Tab.Pane>
                                    <Tab.Pane eventKey="third">{htmlCuentaDni()}</Tab.Pane>
                                    <Tab.Pane eventKey="forth">{htmlSucursal()}</Tab.Pane>
                                    <Tab.Pane eventKey="fifth">{htmlDomicilio()}</Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </div>
                </div>
            </div>    
        </div>
    )
}

export default PaymentAdministration