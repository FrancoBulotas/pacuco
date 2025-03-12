
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button} from 'react-bootstrap';
import { FaCheck, FaCopy } from 'react-icons/fa';

const Success = () => {

    const paymentMethods = useSelector(state => state.paymentMethods);    
    const formData = useSelector(state => state.cart.formData);

    const whatsappNumber = "5491123223048"; 
    const whatsappMessage = encodeURIComponent("Hola, quiero adjuntar mi comprobante de pago."); 

    const [copied, setCopied] = useState(null);

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="success-page">
       
        <h1 className="success-title">¡Encargo realizado con éxito!</h1>

        <div className="success-content">
            <div>
                <p className="success-message">
                {formData.fullName} muchas gracias por confiar en nosotras! Porfavor revisa el correo electronico: <strong>{formData.email}</strong>, ahi vas a ver el detalle de tu compra.
                </p>
                <div className="success-message">
                    {formData.paymentMethod === 'Mercado Pago' ? 
                    'Los productos fueron reservados, pero aún debes realizar la transferencia de Mercado Pago a:'
                    : 'Los productos fueron reservados, pero aún debes realizar la transferencia bancaria a:'
                    }
                    
                    <div className="bank-details bg-light p-3 rounded mb-3">
                        {formData.paymentMethod === 'Mercado Pago' ? 
                            (
                            <>
                                        <div className="detail-row mb-2">
                                            <span className="fw-bold">Titular de Cuenta:</span>
                                            <div className="d-flex align-items-center">
                                            <span className="ms-2">{paymentMethods.titularCuentaCvu}</span>
                                            <Button 
                                                variant="link" 
                                                size="sm" 
                                                className="ms-2 p-0"
                                                onClick={() => copyToClipboard(paymentMethods.titularCuentaCvu, 'titularCvu')}
                                            >
                                                {copied === 'titularCvu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                            </Button>
                                            </div>
                                        </div>
                                        
                                        <div className="detail-row mb-2">
                                            <span className="fw-bold">CVU:</span>
                                            <div className="d-flex align-items-center">
                                            <span className="ms-2">{paymentMethods.cvu}</span>
                                            <Button 
                                                variant="link" 
                                                size="sm" 
                                                className="ms-2 p-0"
                                                onClick={() => copyToClipboard(paymentMethods.cvu, 'cvu')}
                                            >
                                                {copied === 'cvu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                            </Button>
                                            </div>
                                        </div>
                                        
                                        <div className="detail-row">
                                            <span className="fw-bold">Alias:</span>
                                            <div className="d-flex align-items-center">
                                            <span className="ms-2">{paymentMethods.aliasCvu}</span>
                                            <Button 
                                                variant="link" 
                                                size="sm" 
                                                className="ms-2 p-0"
                                                onClick={() => copyToClipboard(paymentMethods.aliasCvu, 'aliasCvu')}
                                            >
                                                {copied === 'aliasCvu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                            </Button>
                                            </div>
                                        </div>
                            </>) 
                            : ( 
                                <>                   
                                   <div className="detail-row mb-2">
                                        <span className="fw-bold">Titular de Cuenta:</span>
                                        <div className="d-flex align-items-center">
                                        <span className="ms-2">{paymentMethods.titularCuentaCbu}</span>
                                        <Button 
                                            variant="link" 
                                            size="sm" 
                                            className="ms-2 p-0"
                                            onClick={() => copyToClipboard(paymentMethods.titularCuentaCbu, 'titularCbu')}
                                        >
                                            {copied === 'titularCbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                        </Button>
                                        </div>
                                    </div>
                                    
                                    <div className="detail-row mb-2">
                                        <span className="fw-bold">CBU:</span>
                                        <div className="d-flex align-items-center">
                                        <span className="ms-2">{paymentMethods.cbu}</span>
                                        <Button 
                                            variant="link" 
                                            size="sm" 
                                            className="ms-2 p-0"
                                            onClick={() => copyToClipboard(paymentMethods.cbu, 'cbu')}
                                        >
                                            {copied === 'cbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                        </Button>
                                        </div>
                                    </div>
                                    
                                    <div className="detail-row">
                                        <span className="fw-bold">Alias:</span>
                                        <div className="d-flex align-items-center">
                                        <span className="ms-2">{paymentMethods.aliasCbu}</span>
                                        <Button 
                                            variant="link" 
                                            size="sm" 
                                            className="ms-2 p-0"
                                            onClick={() => copyToClipboard(paymentMethods.aliasCbu, 'aliasCbu')}
                                        >
                                            {copied === 'aliasCbu' ? <FaCheck className="text-success" /> : <FaCopy className='text-secondary' />}
                                        </Button>
                                        </div>
                                    </div>
                                </>
                            ) 
                        }

                    </div>
                </div>
                <p className="success-message"> Una vez realizado el pago te pedimos que nos adjuntes el comprobante correspondiente al siguiente numero de Whatsapp: <strong>11 2322-3048</strong>
                </p>
                <a               
                    href={`https://wa.me/${whatsappNumber}?`}
                    className="whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-whatsapp" aria-hidden="true" style={{marginRight:'5px'}}></i>
                    Ir al chat: 11 2322-3048
                </a>
                <p className="success-message">
                Te recordamos que el tiempo de demora en caso de haber comprado un guardapolvo personalizado es entre 30 a 40 dias. En caso de ser stock, la entrega es inmediata.
                Si tu compra es con envío por Correo Argentino, LOS TIEMPOS DE ENVÍO SON APARTE DE LA DEMORA DE CONFECCIÓN.
                </p>
            </div>
            <button className="home-button" onClick={() => window.location.href = '/'}>
            Volver al Inicio
            </button>
        </div>
        </div>
    );
};

export default Success;