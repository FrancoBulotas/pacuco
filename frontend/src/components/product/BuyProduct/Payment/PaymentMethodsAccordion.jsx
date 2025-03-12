

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Accordion, Button, Card, Spinner } from 'react-bootstrap';
import { FaUniversity, FaCheck, FaCopy } from 'react-icons/fa';
import { setFormData} from '../../../../reducers/cartReducer'

import '../../../../assets/styles/buyProduct/paymentMethodsAccordion.css';

const PaymentMethodsAccordion = ({ paymentMethods, loading, handleClick }) => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.cart.formData);
    const [activeKey, setActiveKey] = useState('');
    const [copied, setCopied] = useState(null);
    
    useEffect(() => {
        dispatch(setFormData({
            ...formData,
            paymentMethod: activeKey === '0' ? 'Mercado Pago' : 'Transferencia Bancaria',
        }));
    }, [activeKey])

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)} className="payment-accordion">
        <Card className="mb-3 border-0 shadow-sm">
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                <div className="d-flex align-items-center">
                {/* <FaCreditCard className="me-2 text-dark" size={20} /> */}
                <img src="https://pacucostorage.blob.core.windows.net/common/MP_RGB_HANDSHAKE_color-blanco_vert.png" 
                    alt="" 
                    style={{width:'30px', height:'23px', marginRight:'10px'}}
                />
                <span className="fw-bold">Mercado Pago</span>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <p className="mb-3">
                Realiza una transferencia por Mercado Pago a la siguiente cuenta:
                </p>
                
                <div className="bank-details bg-light p-3 rounded mb-3">
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
                </div>
                
                <p className="option-note mb-4">
                Una vez realizada la transferencia, envíanos el comprobante al correo electrónico{' '}
                <a href="mailto:compras@pacuco.com.ar" className="email-link fw-bold">
                    compras@pacuco.com.ar
                </a>{' '}
                para confirmar tu compra.
                </p>
                
                <Button
                variant="primary"
                onClick={() => handleClick('Mercado Pago')}
                className="w-100 py-2 btn-dark"
                >
                {loading ? <Spinner animation="border" size="sm" /> : 'Encargar pedido'}
                </Button>
            </Accordion.Body>
            </Accordion.Item>
        </Card>

        <Card className="border-0 shadow-sm">
            <Accordion.Item eventKey="1">
            <Accordion.Header>
                <div className="d-flex align-items-center">
                <FaUniversity className="me-2 text-dark" size={20} />
                <span className="fw-bold">Transferencia Bancaria</span>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <p className="mb-3">
                Realiza una transferencia bancaria a la siguiente cuenta:
                </p>
                
                <div className="bank-details bg-light p-3 rounded mb-3">
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
                </div>
                
                <p className="option-note mb-4">
                Una vez realizada la transferencia, envíanos el comprobante al correo electrónico{' '}
                <a href="mailto:compras@pacuco.com.ar" className="email-link fw-bold">
                    compras@pacuco.com.ar
                </a>{' '}
                para confirmar tu compra.
                </p>
                
                <Button
                variant="primary"
                onClick={() => handleClick('Transferencia Bancaria')}
                className="w-100 py-2 btn-dark"
                >
                {loading ? <Spinner animation="border" size="sm" /> : 'Encargar pedido'}
                </Button>
            </Accordion.Body>
            </Accordion.Item>
        </Card>
        </Accordion>
    );
};

export default PaymentMethodsAccordion;