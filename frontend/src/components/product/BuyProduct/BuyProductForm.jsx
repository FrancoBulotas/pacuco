
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setShippingPrice, setFormData, setTotalPrice } from '../../../reducers/cartReducer'

import { checkStock } from './checkStock'
// import sendWhatsAppService from '../../../services/sendWhatsapp'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Form, Col, Dropdown, Alert, Button } from 'react-bootstrap'

import PaymentOptions from './Payment/PaymentOptions';

import { formatNumber, createMessage, validatePhoneNumber } from '../common/functions'
import Swal from 'sweetalert2'

import '../../../assets/styles/buyProduct/buyProductForm.css'
import '../../../assets/styles/buyProduct/buyProductForm.scss'
import '../../../assets/styles/buyProduct/multiStepCheckout.css'
import { checkWhichPriceToShow } from '../../common/functions'


const BuyProductForm = () => {
    const paymentMethods = useSelector(state => state.paymentMethods);
    const cart = useSelector(state => state.cart.items);
    const formData = useSelector(state => state.cart.formData);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const shippingPrice = useSelector(state => state.cart.shippingPrice);

    let shipToOfficePrice = Number(paymentMethods.priceShipmentSucursal)
    let shipToHomePrice = Number(paymentMethods.priceShipmentDomicilio)
    const noShipping = 0

    const [shippingOption, setShippingOption] = useState('Sucursal')
    const [validated, setValidated] = useState(false)
    const [loading, setLoading] = useState(false)

    const [alertDisplay, setAlertDisplay] = useState('none')

    const [currentStep, setCurrentStep] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        // para poner el precio del envio a sucursal ya que es el default
        if(shippingPrice === 0 && shippingOption === 'Sucursal'){
            dispatch(setShippingPrice(shipToOfficePrice));
        }
        if(shippingOption !== 'Sucursal'){
            dispatch(setFormData({...formData, sucursal: '', }));
        }
    }, [currentStep, shippingOption])

    useEffect(() => {
        if(cart.length === 0){
            setTimeout(() => {
                Swal.fire({ title:'Carrito vacio!', text:'no tenes nada mas para comprar aqui.', icon:'info', confirmButtonText:'Aceptar', confirmButtonColor:'#000'  })
                navigate('/')
            }, 2000)
        }
        
        const totalOnCart = cart.reduce((acc, item) =>  acc +  ((checkWhichPriceToShow(item)) * item.amountToBuy), 0);
        dispatch(setTotalPrice(totalOnCart));
    }, [cart])

    useEffect(() => {
        checkStockProductsInCart();

    }, [currentStep])

    // Navigation and step management
    const nextStep = () => {
        window.scrollTo(0, 0);

        if(currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        window.scrollTo(0, 0);

        if(currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const setShipping = (type) => {
        if(type === 'Sucursal'){
            setShippingOption(type)
            dispatch(setShippingPrice(shipToOfficePrice));
        }
        else if(type === 'Domicilio'){
            setShippingOption(type)
            dispatch(setShippingPrice(shipToHomePrice));
        }
        else if(type === 'Retiro'){
            setShippingOption(type)
            dispatch(setShippingPrice(noShipping));
        }
        dispatch(setFormData({...formData, shipMethod: type, }));
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        dispatch(setFormData({
          ...formData,
          [name]: value,
        }));
    }

    const handleDataForm = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            window.scrollTo(0, 0)
            setValidated(true)
            return;
        }

        setValidated(false);
        setAlertDisplay('none');
        nextStep();
    }

    const optionChoosed = () =>{
        if(shippingOption === 'Sucursal'){
            return (
                <div className="contenido-eleccion-sucursal" id="contenido-eleccion-sucursal">
                    <p id="costo-de-envio-sucursal">Costo de Envio: $ {shippingPrice}</p>
                    <p id="texto-caso-sucursal">Cual es la sucursal más cercana a tu domicilio?
                        Podes averiguarlo entrando en este link: <a href="https://www.correoargentino.com.ar/formularios/sucursales">Correo Argentino.</a></p>
                    <Form.Group as={Col} md="4" controlId="floatingEmail"  className='form-group'>
                        <FloatingLabel controlId="floatingEmail" label="Sucursal" className="mb-3">
                            <Form.Control
                            type="text"
                            placeholder="Sucursal"
                            required
                            name='sucursal'
                            value={formData.sucursal}
                            onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </div>
            )
        }
        else if (shippingOption === 'Domicilio'){
            return (
                <p id="costo-de-envio-domicilio">Costo de Envio: $ {shippingPrice}</p>
            )
        }
        else if(shippingOption === 'Retiro'){
            return (
                <div className="contenido-eleccion-retiro" id="contenido-eleccion-retiro">
                    <p><strong>SHOWROOM WILDE / Dirección:</strong> San isidro y Bahia Blanca.</p>
                    <p>
                        <strong>Días y horarios de atención:</strong> Los sabados coordinar con Aldi al 1169401968 y de Lunes a Viernes con Adry al 1163601162, aclarando el numero de pedido.
                        (Aguardar confirmación vía Whatsapp para retiro)
                    </p>
                </div>
            )
        }
    }

    const checkStockProductsInCart = async () => {
        const stockProductsInCart = cart.filter(item => item.table == 'stock');
        
        if (stockProductsInCart.length !== 0){
            try {
                await checkStock(stockProductsInCart, dispatch);
            } catch (e) {
                console.error(e);
            }
        }  
    }

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return renderCartReview();
            case 2:
                return renderBillingDetails();
            case 3:
                return renderPaymentMethod();
            default:
                return renderCartReview();
        }
    }

    const renderCartReview = () => (
        <div className="cart-review-step">
        <h2 className="text-center mb-4" style={{fontSize:'20px'}}>Revisar Carrito</h2>
        <div className="cart-items">
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.img} alt={item.name} className="cart-item-image" onClick={() => navigate(`/products?id=${item.id}`)}/>
                    <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>Precio: $ {formatNumber(checkWhichPriceToShow(item))}</p>
                        <p>Cantidad: {item.amountToBuy}</p>
                        <p>Talle: {item.size}</p>
                        <p>Subtotal: $ {formatNumber((checkWhichPriceToShow(item)) * item.amountToBuy)}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="cart-summary">
            <div className="cart-summary-item total" style={{border: 'none'}}>
                <span>Total:</span>
                <span>$ {formatNumber((totalPrice))}</span>
            </div>
        </div>
        <div className="step-navigation">
            <Button variant="secondary" onClick={() => navigate('/products?category=')}>
                Seguir Comprando
            </Button>
            <Button variant="dark" onClick={nextStep} disabled={cart.length === 0}>
                Continuar
            </Button>
        </div>
    </div>
    )

    const renderBillingDetails = () => (
        <div className="billing-details-step">
            <Form noValidate validated={validated} onSubmit={handleDataForm}>
                <div>
                    <h2 className="d-flex justify-content-center mb-3" style={{fontSize:'20px'}}>Detalles de facturacion</h2>
                    <Form.Group as={Col} md="4" controlId="floatingFullName" className='form-group'>
                        <FloatingLabel controlId="floatingFullName" label="Nombre completo" className="mb-3">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder='Nombre completo'
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingEmail"  className='form-group'>
                        <FloatingLabel controlId="floatingEmail" label="Correo Electronico" className="mb-3">
                            <Form.Control
                            type="email"
                            placeholder="Correo Electronico"
                            required
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingDNI"  className='form-group'>
                        <FloatingLabel controlId="floatingDNI" label="DNI" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="DNI"
                                required
                                name='dni'
                                value={formData.dni}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingPhone"  className='form-group'>
                        <FloatingLabel controlId="floatingPhone" label="Celular" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Ej: 1123456789"
                                required
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={validated && !validatePhoneNumber(formData.phone).valid}
                                isValid={validated && validatePhoneNumber(formData.phone).valid}
                            />
                            <Form.Control.Feedback type="invalid">
                            El número de celular no es válido. Asegúrese de que esté en el formato correcto.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                            Ingrese el número en formato: código de área seguido del número, sin espacios ni símbolos ni un 0 delante. Ejemplo: 1123456789
                            </Form.Text>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingProvince"  className='form-group'>
                        <FloatingLabel controlId="floatingProvince" label="Provincia" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Provincia"
                                required
                                name='province'
                                value={formData.province}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingCity"  className='form-group'>
                        <FloatingLabel controlId="floatingCity" label="Localidad" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Localidad"
                                required
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingStreet"  className='form-group'>
                        <FloatingLabel controlId="floatingStreet" label="Nombre de la calle y numero de la casa" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Nombre de la calle y numero de la casa"
                                required
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingZipCode"  className='form-group'>
                        <FloatingLabel controlId="floatingZipCode" label="Codigo Postal" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Codigo Postal"
                                required
                                name='zipCode'
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-12 col-md-10">
                    <div className="div-tipo-envio" id="div-tipo-envio">
                        <p className="tipo-envio">Seleccionar tipo de envio</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                {shippingOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setShipping('Sucursal')}>Sucursal</Dropdown.Item>
                                <Dropdown.Item onClick={() => setShipping('Domicilio')}>Domicilio</Dropdown.Item>
                                <Dropdown.Item onClick={() => setShipping('Retiro')}>Retiro Showroom</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="linea-horizontal-envio"></div>
                    {
                        optionChoosed()
                    }

                </div>
                <div className="cart-summary">
                    <div className="cart-summary-item">
                        <span>Subtotal:</span>
                        <span>$ {formatNumber(totalPrice)}</span>
                    </div>
                    <div className="cart-summary-item">
                        <span>Envío:</span>
                        <span>$ {formatNumber(shippingPrice)}</span>
                    </div>
                    <div className="cart-summary-item total">
                        <span>Total:</span>
                        <span>$ {formatNumber((totalPrice + shippingPrice))}</span>
                    </div>
                </div>

                <div className="step-navigation">
                    <Button variant="secondary" onClick={prevStep}>
                        Volver
                    </Button>
                    <Button variant="dark" type='submit'>
                        Continuar
                    </Button>
                </div>
            </Form>
        </div>
    )

    const renderPaymentMethod = () => (
        <div className="payment-method-step">
            <h2 className="text-center mb-4" style={{fontSize:'20px'}}>Elegir Método de Pago</h2>
            <div className="cart-summary">
                <div className="cart-summary-item">
                    <span>Subtotal:</span>
                    <span>$ {formatNumber(totalPrice)}</span>
                </div>
                <div className="cart-summary-item">
                    <span>Envío:</span>
                    <span>$ {formatNumber(shippingPrice)}</span>
                </div>
                <div className="cart-summary-item total">
                    <span>Total:</span>
                    <span>$ {formatNumber(totalPrice + shippingPrice)}</span>
                </div>
            </div>
            <Alert key='danger' variant='danger' style={{display:alertDisplay}}>
                Debes elegir medio de pago!
            </Alert>
            <PaymentOptions loading={loading} />
            {/* <div className="divAclaracion">
                <label className="labelAclaracion">Una vez realizado el pago, al Finalizar Pedido recibiras un correo electronico, por favor responderlo adjuntando el comprobante de pago.</label>
            </div>  */}
            <div className="step-navigation">
                <Button variant="secondary" onClick={prevStep}>
                    Volver
                </Button>
            </div>
        </div>
    )

    return(
        <div className="multi-step-checkout">
            <div className="checkout-progress">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                    <div>1. Carrito</div>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                    <div>2. Detalles</div>
                </div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                    <div>3. Pago</div>
                </div>
            </div>
            {renderStep()}
        </div>
    )
}

export default BuyProductForm