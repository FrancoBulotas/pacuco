
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button} from 'react-bootstrap';
import { FaCheck, FaCopy } from 'react-icons/fa';

import { clearCart, setShippingPrice, setTotalPrice } from '../../../reducers/cartReducer'
import PaymentButtonMP from './Payment/PaymentButtonMP';
import { formatNumber } from '../../common/functions';

import '../../../assets/styles/buyProduct/multiStepCheckout.css'

const Success = () => {
    const dispatch = useDispatch();
    const paymentMethods = useSelector(state => state.paymentMethods);    
    const formData = useSelector(state => state.cart.formData);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const shippingPrice = useSelector(state => state.cart.shippingPrice);

    const whatsappNumber = formData.paymentMethod === 'Cuenta DNI' ? '5491163601162' : "5491123223048";
    const whatsappMessage = encodeURIComponent("Hola, quiero adjuntar mi comprobante de pago."); 

    const [copied, setCopied] = useState(null);
    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    useEffect(() => {
        dispatch(clearCart()); 
    }, []);

    useEffect(() => {
        return () => {
            dispatch(setTotalPrice(0));
            dispatch(setShippingPrice(0));
        };
    }, [dispatch]);

    const successMessage = () => {
        if (formData.paymentMethod === 'Mercado Pago') {
            return 'Los productos fueron reservados, pero aún debes realizar el pago a través de Mercado Pago.';
        }
        else if (formData.paymentMethod === 'Transferencia Bancaria') {
            return 'Los productos fueron reservados, pero aún debes realizar la transferencia bancaria.';
        }
        else if (formData.paymentMethod === 'Efectivo') {
            return 'Los productos fueron reservados, pero aún debes realizar el pago en efectivo.';
        }
        else if (formData.paymentMethod === 'Banco Frances') {
            return 'Los productos fueron reservados, pero aún debes realizar el pago con QR al Banco Frances.';
        }
        else if (formData.paymentMethod === 'Cuenta DNI') {
            return 'Los productos fueron reservados, pero aún debes realizar el pago con Cuenta DNI.';
        }
    }

    const paymentData = () => {
        if(formData.paymentMethod === 'Mercado Pago') {
            return <div className="mb-3 mt-3">
                <p className="success-message"> 
                    Para realizar el pago con Mercado Pago, utiliza el botón de abajo. 
                </p>
                <PaymentButtonMP shippingPrice={formData.shippingPrice} /> 
            </div>
        }
        else if(formData.paymentMethod === 'Transferencia Bancaria') {
            return <>                   
                <div className="detail-row mb-2 mt-4 p-2">
                    <span className="fw-bold">Titular de Cuenta:</span>
                    <div className="d-flex align-items-center">
                    <span className="ms-2">{paymentMethods?.transferencia.titularCuentaCbu}</span>
                    <Button 
                        variant="link" 
                        size="sm" 
                        className="ms-2 p-0"
                        onClick={() => copyToClipboard(paymentMethods?.transferencia.titularCuentaCbu, 'titularCbu')}
                    >
                        {copied === 'titularCbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                    </Button>
                    </div>
                </div>
                
                <div className="detail-row mb-2 p-2">
                    <span className="fw-bold">CBU:</span>
                    <div className="d-flex align-items-center">
                    <span className="ms-2">{paymentMethods?.transferencia.cbu}</span>
                    <Button 
                        variant="link" 
                        size="sm" 
                        className="ms-2 p-0"
                        onClick={() => copyToClipboard(paymentMethods?.transferencia.cbu, 'cbu')}
                    >
                        {copied === 'cbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                    </Button>
                    </div>
                </div>
                
                <div className="detail-row p-2">
                    <span className="fw-bold">Alias:</span>
                    <div className="d-flex align-items-center">
                    <span className="ms-2">{paymentMethods?.transferencia.aliasCbu}</span>
                    <Button 
                        variant="link" 
                        size="sm" 
                        className="ms-2 p-0"
                        onClick={() => copyToClipboard(paymentMethods?.transferencia.aliasCbu, 'aliasCbu')}
                    >
                        {copied === 'aliasCbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                    </Button>
                    </div>
                </div>
            </>
        }
        else if(formData.paymentMethod === 'Banco Frances') {
            return <div className="mb-3 mt-3">
                <p className="success-message"> 
                    Para realizar el pago con QR al Banco Frances, escanea el siguiente código QR con tu aplicación de banco o billetera digital.
                </p>
                <img src={paymentMethods?.bancoFrances?.imgQr} alt="" style={{height:'150px', width:'150px'}} />
            </div>;
        }
        else if(formData.paymentMethod === 'Cuenta DNI') {
            return null;
        }
    }

    const returnButtonHandler = () => {
        dispatch(setTotalPrice(0));
        dispatch(setShippingPrice(0));
        dispatch(clearCart()); 
        window.location.href = '/';
    }

    const whatsAppMessage = () => {
        if (formData.paymentMethod === 'Mercado Pago' || formData.paymentMethod === 'Transferencia Bancaria' || formData.paymentMethod === 'Banco Frances') {
            return (
                <p className="success-message"> 
                    Una vez realizado el pago te pedimos que nos adjuntes el comprobante correspondiente al siguiente numero de Whatsapp: <strong>11 2322-3048 </strong>
                    indicando el codigo de operacion: <strong>#{formData.operationCode}</strong>
                </p>
            );
        }
        else if (formData.paymentMethod === 'Efectivo') {
            return (
                <p className="success-message">
                    Para poder realizar el pago en efectivo deberas coordinar con el siguiente numero de Whatsapp: <strong>11 2322-3048 </strong>
                    indicando el codigo de operacion: <strong>#{formData.operationCode}</strong>
                </p>
            )
        }
        else if (formData.paymentMethod === 'Cuenta DNI') {
            return (
                <p className="success-message"> 
                    Para poder realizar el pago deberas coordinar con el siguiente numero de Whatsapp: <strong>11 6360-1162 </strong> 
                    indicando el codigo de operacion: <strong>#{formData.operationCode}</strong>
                </p>
            );

        }
    }

    return (
        <div className="success-page">
       
        <h1 className="success-title">¡Encargo realizado con éxito!</h1>

        <div className="success-content">
            <div>
                <p className="success-message">
                {formData.fullName} muchas gracias por confiar en nosotras! Porfavor revisa el correo electronico: <strong>{formData.email}</strong>, ahi vas a ver el detalle de tu compra. 
                 Tu codigo de operacion es: <strong>#{formData.operationCode}</strong>.
                </p>
                <div className="success-message">
                    {successMessage()}
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
                    {paymentData()}
                </div>
                {whatsAppMessage()}
                <a               
                    href={`https://wa.me/${whatsappNumber}?`}
                    className="whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-whatsapp" aria-hidden="true" style={{marginRight:'5px'}}></i>
                    Ir al chat: {formData.paymentMethod === 'Cuenta DNI' ? '11 6360-1162' : '11 2322-3048'}
                </a>
                <p className="success-message">
                Te recordamos que el tiempo de demora en caso de haber comprado un guardapolvo personalizado es entre 30 a 40 dias. En caso de ser stock, la entrega es inmediata.
                Si tu compra es con envío por Correo Argentino, LOS TIEMPOS DE ENVÍO SON APARTE DE LA DEMORA DE CONFECCIÓN.
                </p>
            </div>
            <button className="home-button" onClick={() => returnButtonHandler()}>
            Volver al Inicio
            </button>
        </div>
        </div>
    );
};

export default Success;