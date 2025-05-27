import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../../reducers/cartReducer';
import { FaUniversity } from 'react-icons/fa';

import '../../../../assets/styles/buyProduct/paymentMethodsAccordion.css';

const PaymentMethodsAccordion = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.cart.formData);
    const [selectedMethod, setSelectedMethod] = useState(formData.paymentMethod || '');

    const handleSelection = (method) => {
        setSelectedMethod(method);
        dispatch(setFormData({
            ...formData,
            paymentMethod: method,
        }));
    };

    return (
        <div className="payment-methods-container">
            <div className="payment-method-option" onClick={() => handleSelection('Mercado Pago')}>
                <input
                    type="radio"
                    id="mercado-pago"
                    name="paymentMethod"
                    value="Mercado Pago"
                    checked={selectedMethod === 'Mercado Pago'}
                    onChange={() => handleSelection('Mercado Pago')}
                />
                <img src="https://pacucostorage.blob.core.windows.net/common/MP_RGB_HANDSHAKE_color-blanco_vert.png" 
                    alt="" 
                    style={{width:'30px', height:'23px', marginRight:'10px'}}
                />
                <label htmlFor="mercado-pago">Mercado Pago</label>
            </div>
            <div className="payment-method-option" onClick={() => handleSelection('Transferencia Bancaria')}>
                <input
                    type="radio"
                    id="transferencia-bancaria"
                    name="paymentMethod"
                    value="Transferencia Bancaria"
                    checked={selectedMethod === 'Transferencia Bancaria'}
                    onChange={() => handleSelection('Transferencia Bancaria')}
                />
                <FaUniversity className="me-2 text-dark" size={20} />
                <label htmlFor="transferencia-bancaria" style={{marginLeft:'5px'}}>Transferencia Bancaria</label>
            </div>
            <div className="payment-method-option" onClick={() => handleSelection('Banco Frances')}>
                <input
                    type="radio"
                    id="banco-frances"
                    name="paymentMethod"
                    value="Banco Frances"
                    checked={selectedMethod === 'Banco Frances'}
                    onChange={() => handleSelection('Banco Frances')}
                />
                <img src="https://pacucostorage.blob.core.windows.net/common/logo-banco-frances.webp" alt="" style={{width:'23px', height:'23px', marginRight:'10px'}} />
                <label htmlFor="banco-frances" style={{marginLeft:'5px'}}>Banco Francés</label>
            </div>
            <div className="payment-method-option" onClick={() => handleSelection('Cuenta DNI')}>
                <input
                    type="radio"
                    id="cuenta-dni"
                    name="paymentMethod"
                    value="Cuenta DNI"
                    checked={selectedMethod === 'Cuenta DNI'}
                    onChange={() => handleSelection('Cuenta DNI')}
                />
                <img src="https://pacucostorage.blob.core.windows.net/common/cuenta-dni-banco-provincia-logo.png" alt="" style={{width:'50px', height:'15px', marginRight:'10px'}} />
                <label htmlFor="cuenta-dni" style={{marginLeft:'5px'}}>Cuenta DNI</label>
            </div>
            <div className="payment-method-option" onClick={() => handleSelection('Efectivo')}>
                <input
                    type="radio"
                    id="efectivo"
                    name="paymentMethod"
                    value="Efectivo"
                    checked={selectedMethod === 'Efectivo'}
                    onChange={() => handleSelection('Efectivo')}
                />
                <img src="https://pacucostorage.blob.core.windows.net/common/bill-image.png" 
                    alt="" 
                    style={{width:'23px', height:'23px', marginRight:'10px'}}
                />
                <label htmlFor="efectivo">Efectivo</label>
            </div>
        </div>
    );
};

export default PaymentMethodsAccordion;