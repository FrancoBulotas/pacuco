import React, { useState } from 'react';
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
            <div className="payment-method-option">
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
            <div className="payment-method-option">
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
            <div className="payment-method-option">
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