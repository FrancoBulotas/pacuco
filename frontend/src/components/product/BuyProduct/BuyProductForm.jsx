
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart, removeFromCart } from '../../../reducers/cartReducer'
import { sendEmailJS } from './SendEmail'
import { checkStock } from './checkStock'
import sendWhatsAppService from '../../../services/sendWhatsapp'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Form, Col, Dropdown, Alert, Button } from 'react-bootstrap'


import '../../../assets/styles/buyProduct/buyProductForm.css'
import '../../../assets/styles/buyProduct/buyProductForm.scss'
import '../../../assets/styles/buyProduct/multiStepCheckout.css'

import PaymentOptions from './PaymentOptions'

import ScrollToTop from '../../common/ScrollToTop'
import { formatNumber, createMessage, validatePhoneNumber } from '../common/functions'
import Swal from 'sweetalert2'
import Spinner from '../../common/Spinner'
// import CheckIfIsStockOrCustomizable from '../common/CheckIfIsStockOrCustomizable.jsx'

const BuyProductForm = () => {
    const paymentMethods = useSelector(state => state.paymentMethods)    
    const cart = useSelector(state => state.cart.items)

    let shipToOfficePrice = Number(paymentMethods.priceShipmentSucursal)
    let shipToHomePrice = Number(paymentMethods.priceShipmentDomicilio)
    const noShipping = 0

    const [shippingPrice, setShippingPrice] = useState(shipToOfficePrice)
    const [shippingOption, setShippingOption] = useState('Sucursal')
    const [totalPrice, setTotalPrice] = useState(0)
    const [validated, setValidated] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        fullName : '',
        email: '',
        dni: '',
        phone: '',
        province: '',
        city: '',
        address: '',
        zipCode: '',
        shipMethod: 'Sucursal',
        sucursal: '',
        paymentMethod: '',
    })

    // const [payment, setPayments] = useState({})
    const [choosenCbu, setChoosenCbu] = useState('')
    const [choosenAlias, setChoosenAlias] = useState('')
    const [choosenTitular, setChoosenTitular] = useState('')
    const [payMethodsDisplay, setPayMethodsDisplay] = useState('none')
    const [imgCuentaDniDisplay, setimgCuentaDniDisplay] = useState('none')
    const [imgQrSrc, setImgQrSrc] = useState('')
    const [alertDisplay, setAlertDisplay] = useState('none')

    const [currentStep, setCurrentStep] = useState(1)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(cart.length === 0){
            setTimeout(() => {
                Swal.fire({ title:'Carrito vacio!', text:'no tenes nada mas para comprar aqui.', icon:'info', confirmButtonText:'Aceptar', confirmButtonColor:'#000'  })
                navigate('/')
            }, 2000)
        }

        let sum = 0
        cart.map(item => sum += ((item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price) * item.amountToBuy))
        setTotalPrice(sum)
    }, [cart])

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
            setShippingPrice(shipToOfficePrice)
        }
        else if(type === 'Domicilio'){
            setShippingOption(type)
            setShippingPrice(shipToHomePrice)
        }
        else if(type === 'Retiro'){
            setShippingOption(type)
            setShippingPrice(noShipping)
        }
        setFormData({...formData, shipMethod: type, })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
          ...formData,
          [name]: value,
        })
    }

    const sendMessageAndResetState = async (num) => {
        const result = await sendEmailJS(formData, cart, totalPrice + shippingPrice, shippingPrice);
        // const result = await sendWhatsAppService.sendMessage(`549${num}`, createMessage(formData, cart, totalPrice + shippingPrice, shippingPrice));
        if(result) {
            Swal.fire({ title:'Compra realizada con exito!', text:`Porfavor revisa el correo electronico: ${formData.email}, ahi vas a ver el detalle de tu compra, y como proceder. Muchas gracias por elegirnos!!`, icon:'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
            .then((result) =>{
                if(result.isConfirmed){ 
                    setFormData({ fullName : '', email: '', dni: '', phone: '', province: '', city: '', address: '', zipCode: '', shipMethod: 'Sucursal', sucursal: '', paymentMethod: '',})            
                    dispatch(clearCart()) 
                }
            }) 
        } else {
            Swal.fire({ title:'Hubo un problema con tu compra.', text:'intentalo de nuevo mas tarde', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
        }      
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

    const handleSubmit = async (event) => {   
        const resultPhoneValidation = validatePhoneNumber(formData.phone);

        if(selectedOption === ''){
            event.preventDefault()
            event.stopPropagation()
            setAlertDisplay('block')
            setValidated(true)
            
            setTimeout(() => {
                setAlertDisplay('none');
            }, 3000);

            return;
        }  

        setValidated(false);
        
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);

        try {
            const stockProductsInCart = cart.filter(item => item.table === 'stock');
            
            if (stockProductsInCart.length !== 0){
                const { error, text, product } = await checkStock(stockProductsInCart);
                if(error){
                    Swal.fire({ title:text, icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(removeFromCart(product));
                            return;
                        }
                    }) 
                } 
                else {
                    sendMessageAndResetState(resultPhoneValidation.justNumbers)
                }
            } else { 
                sendMessageAndResetState(resultPhoneValidation.justNumbers)
            }        
        } catch (error) {
            console.log(error);
        }
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)

        if(e.target.value === 'Mercado Pago'){
            setPayMethodsDisplay('block')
            setimgCuentaDniDisplay('none')
            setChoosenCbu(`CVU: ${paymentMethods.cvu}`)
            setChoosenAlias(`Alias: ${paymentMethods.aliasCvu}`)
            setChoosenTitular(`Titular de la cuenta: ${paymentMethods.titularCuentaCvu}`)
        }
        else if(e.target.value === 'Transferencia Bancaria'){
            setPayMethodsDisplay('block')
            setimgCuentaDniDisplay('none')
            setChoosenCbu(`CBU: ${paymentMethods.cbu}`)
            setChoosenAlias(`Alias: ${paymentMethods.aliasCbu}`)
            setChoosenTitular(`Titular de la cuenta: ${paymentMethods.titularCuentaCbu}`)
        }
        else{
            setimgCuentaDniDisplay('block')
            setPayMethodsDisplay('none')
            setImgQrSrc(paymentMethods.imgQr)
        }
        setFormData({...formData, paymentMethod: e.target.value, })
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
                    <p>SHOWROOM WILDE / Dirección: San isidro y Bahia Blanca.
                        Días y horarios de atención: coordinar al 1169401968 (Aldi) o al 1163601162 (Adry) aclarando el numero de pedido. 
                        (Aguardar confirmación vía Whatsapp para retiro)
                    </p>
                </div>
            )
        }        
    }

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return renderCartReview()
            case 2:
                return renderBillingDetails()
            case 3:
                return renderPaymentMethod()
            default:
                return renderCartReview()
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
                        <p>Precio: $ {formatNumber(item.discountPrice > 0 ? item.discountPrice : item.price)}</p>
                        <p>Cantidad: {item.amountToBuy}</p>
                        <p>Talle: {item.size}</p>
                        <p>Subtotal: $ {formatNumber((item.discountPrice > 0 ? item.discountPrice : item.price) * item.amountToBuy)}</p>
                    </div>
                </div>
            ))}
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
                        <span>$ {formatNumber(totalPrice + shippingPrice)}</span>
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
            <h2 className="text-center mb-4" style={{fontSize:'20px'}}>Método de Pago</h2>
            <Alert key='danger' variant='danger' style={{display:alertDisplay}}>
                Debes elegir medio de pago!
            </Alert>
            <PaymentOptions 
                selectedOption={selectedOption} 
                handleOptionChange={handleOptionChange}
                choosenCbu={choosenCbu}
                choosenAlias={choosenAlias}
                choosenTitular={choosenTitular}
                imgQrSrc={imgQrSrc}
                payMethodsDisplay={payMethodsDisplay}
                imgCuentaDniDisplay={imgCuentaDniDisplay}
            />
            <div className="divAclaracion">
                <label className="labelAclaracion">Una vez realizado el pago, al Finalizar Pedido recibiras un correo electronico, por favor responderlo adjuntando el comprobante de pago.</label>
            </div> 
            <div className="step-navigation">
                <Button variant="secondary" onClick={prevStep}>
                    Volver
                </Button>
                <Button 
                    variant="dark" 
                    onClick={handleSubmit}
                    // disabled={!selectedOption}
                >
                    {loading ? <Spinner /> : 'Finalizar Pedido'}
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
        // <div className='simulacion-body-comprar-carrito'>
        //     <div className='container-finalizar-compra'>
        //         <div className="row mt-3">
        //             <Form noValidate validated={validated} onSubmit={handleSubmit}>
        //                 <div>
        //                     <h2 className="d-flex justify-content-center mb-3">Detalles de facturacion</h2>
        //                     <Form.Group as={Col} md="4" controlId="floatingFullName" className='form-group'>
        //                         <FloatingLabel controlId="floatingFullName" label="Nombre completo" className="mb-3">
        //                                 <Form.Control
        //                                     required
        //                                     type="text"
        //                                     placeholder='Nombre completo'
        //                                     name='fullName'
        //                                     value={formData.fullName}
        //                                     onChange={handleChange}
        //                                 />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingEmail"  className='form-group'>
        //                         <FloatingLabel controlId="floatingEmail" label="Correo Electronico" className="mb-3">
        //                             <Form.Control
        //                             type="email"
        //                             placeholder="Correo Electronico"
        //                             required
        //                             name='email'
        //                             value={formData.email}
        //                             onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingDNI"  className='form-group'>
        //                         <FloatingLabel controlId="floatingDNI" label="DNI" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="DNI" 
        //                                 required 
        //                                 name='dni'
        //                                 value={formData.dni}
        //                                 onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingPhone"  className='form-group'>
        //                         <FloatingLabel controlId="floatingPhone" label="Celular" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Ej: 1123456789" 
        //                                 required 
        //                                 name='phone'
        //                                 value={formData.phone}
        //                                 onChange={handleChange}
        //                                 isInvalid={validated && !validatePhoneNumber(formData.phone).valid}
        //                                 isValid={validated && validatePhoneNumber(formData.phone).valid}
        //                             />
        //                             <Form.Control.Feedback type="invalid">
        //                             El número de celular no es válido. Asegúrese de que esté en el formato correcto.
        //                             </Form.Control.Feedback>
        //                             <Form.Text className="text-muted">
        //                             Ingrese el número en formato: código de área seguido del número, sin espacios ni símbolos ni un 0 delante. Ejemplo: 1123456789
        //                             </Form.Text>
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingProvince"  className='form-group'>
        //                         <FloatingLabel controlId="floatingProvince" label="Provincia" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Provincia" 
        //                                 required 
        //                                 name='province'
        //                                 value={formData.province}
        //                                 onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingCity"  className='form-group'>
        //                         <FloatingLabel controlId="floatingCity" label="Localidad" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Localidad" 
        //                                 required 
        //                                 name='city'
        //                                 value={formData.city}
        //                                 onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingStreet"  className='form-group'>
        //                         <FloatingLabel controlId="floatingStreet" label="Nombre de la calle y numero de la casa" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Nombre de la calle y numero de la casa" 
        //                                 required 
        //                                 name='address'
        //                                 value={formData.address}
        //                                 onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>
        //                     <Form.Group as={Col} md="4" controlId="floatingZipCode"  className='form-group'>
        //                         <FloatingLabel controlId="floatingZipCode" label="Codigo Postal" className="mb-3">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Codigo Postal" 
        //                                 required 
        //                                 name='zipCode'
        //                                 value={formData.zipCode}
        //                                 onChange={handleChange}
        //                             />
        //                         </FloatingLabel>
        //                     </Form.Group>

        //                 </div>
                    
        //                 <div className="form-group row formulario-div">
        //                     <div className="col-12 col-md-10">
        //                         <div className="div-tipo-envio" id="div-tipo-envio">
        //                             <p className="tipo-envio">Seleccionar tipo de envio</p>
        //                             <Dropdown>
        //                                 <Dropdown.Toggle variant="dark" id="dropdown-basic"> 
        //                                     {shippingOption}
        //                                 </Dropdown.Toggle>
        //                                 <Dropdown.Menu>
        //                                     <Dropdown.Item onClick={() => setShipping('Sucursal')}>Sucursal</Dropdown.Item>
        //                                     <Dropdown.Item onClick={() => setShipping('Domicilio')}>Domicilio</Dropdown.Item>
        //                                     <Dropdown.Item onClick={() => setShipping('Retiro')}>Retiro Showroom</Dropdown.Item>
        //                                 </Dropdown.Menu>
        //                             </Dropdown>
        //                         </div>
        //                         <div className="linea-horizontal-envio"></div>
        //                         {
        //                             optionChoosed()
        //                         }
                                
        //                     </div>
        //                 </div>
        //                 <div id="carrito" className="form-group table-responsive">
        //                     <table className="table" id="lista-compra">
        //                         <thead className="thead-carrito">
        //                             <tr style={{backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
        //                                 <th className="th-form th-form-img" scope="col">Imagen</th>
        //                                 <th className="th-form" scope="col">Nombre</th>
        //                                 <th className="th-form th-form-precio" scope="col">Precio</th>
        //                                 <th className="th-form" scope="col">Cant.</th>
        //                                 <th className="th-form" scope="col">Talle</th>
        //                                 <th className="th-form" scope="col">Sub Total</th>
        //                             </tr>
        //                         </thead>
                                
        //                         {cart.map((item, i) => 
        //                             <tbody key={i}>
        //                                 <tr>
        //                                     <td className="th-form th-form-img">
        //                                         {/* <CheckIfIsStockOrCustomizable guardapolvo={item} navigateTo={item.table} loadGuardapolvos={false} cart={true} /> */}

        //                                         <img className="th-form img-fluid img-carrito" src={item.img} alt='pacuco guardapolvos. carrito de compras.' />
        //                                     </td>
        //                                     <td className="th-form">{item.name}</td>
        //                                     <td className="th-form th-form-precio">$ {item.discountPrice || item.discountPrice > 0 ? formatNumber(item.discountPrice) : formatNumber(item.price)}</td>
        //                                     <td className="th-form">{item.amountToBuy}</td>
        //                                     <td className="th-form">{item.size}</td>
        //                                     <td className="th-form">${formatNumber((item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price) * item.amountToBuy)}</td>
        //                                 </tr>
        //                             </tbody>
        //                         )}

        //                         <thead>
        //                             <tr className="tr-precio-total">
        //                                 <th className="text-right"><p>ENVÍO</p> $ {formatNumber(shippingPrice)}</th>
        //                                 <th className="text-right"><p>TOTAL</p> $ {formatNumber(totalPrice + shippingPrice)}</th>
        //                             </tr>
        //                         </thead>

        //                     </table>
        //                 </div>
                        
        //                 <div className="linea-horizontal"></div>
        //                 <label className="labelMedioDePago">Medio de Pago</label>  
        //                 <Alert key='danger' variant='danger' style={{display:alertDisplay}}>
        //                     Debes elegir medio de pago!
        //                 </Alert>

        //                 <PaymentOptions selectedOption={selectedOption} handleOptionChange={handleOptionChange} 
        //                 choosenCbu={choosenCbu} choosenAlias={choosenAlias} choosenTitular={choosenTitular} imgQrSrc={imgQrSrc} 
        //                 payMethodsDisplay={payMethodsDisplay} imgCuentaDniDisplay={imgCuentaDniDisplay} />
                        
        //                 <div className="linea-horizontal"></div>
                        
        //                 <div className="divAclaracion">
        //                     <label className="labelAclaracion">Una vez realizado el pago, al Finalizar Pedido recibiras un correo electronico, por favor responderlo adjuntando el comprobante de pago.</label>
        //                 </div>   
        //                 <div className="d-flex justify-content-between">
        //                     <div className="col-md-4 mb-2">
        //                         <button onClick={() => navigate('/')} className="btn btn-block btn-seguir">Seguir comprando</button>
        //                     </div>
        //                     <div className="col-xs-12 col-md-4">
        //                         <button type="submit" className="btn btn-dark btn-block">
        //                             { loading ? <div style={{width:'114px', height:'28px'}}><Spinner /></div> : 'Finalizar Pedido' }
        //                         </button>
        //                     </div>
        //                 </div>
        //             </Form>
        //         </div>
        //     </div>
        // </div>

    )
}

export default BuyProductForm