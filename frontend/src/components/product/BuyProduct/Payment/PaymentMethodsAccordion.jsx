
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setTotalPrice } from '../../../../reducers/cartReducer';
import { FaUniversity } from 'react-icons/fa';

import '../../../../assets/styles/buyProduct/paymentMethodsAccordion.css';

const PaymentMethodsAccordion = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.cart.formData);
    // const totalPrice = useSelector(state => state.cart.totalPrice);
    const cart = useSelector(state => state.cart.items);
    const [selectedMethod, setSelectedMethod] = useState(formData.paymentMethod || '');
    let totalPrice = 0;

    useEffect(() => {
        if(cart) {
            let sum = 0
            cart.map(item => sum += (((item.discountPrice || item.discountPrice > 0) ? item.discountPrice : item.price) * item.amountToBuy))
            totalPrice = sum;
        }

        if(formData.paymentMethod === 'Efectivo' || formData.paymentMethod === 'Transferencia Bancaria') {
            dispatch(setTotalPrice(Math.ceil((totalPrice) / 100) * 100)); 
        } else {
            dispatch(setTotalPrice(Math.ceil((totalPrice * 1.06) / 100) * 100)); 
        }

    }, [selectedMethod, dispatch]);

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
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifiContent: 'center', gap:'5px'}}>
                    <label htmlFor="cuenta-dni" style={{marginLeft:'5px'}}>Cuenta DNI</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>(3 cuotas sin interes)</label>
                </div>
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
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifiContent: 'center', gap:'5px'}}>
                    <label htmlFor="transferencia-bancaria" style={{marginLeft:'5px'}}>Transferencia Bancaria</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>(6% de descuento)</label>
                </div>
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
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifiContent: 'center', gap:'5px'}}>
                    <label htmlFor="efectivo">Efectivo</label>
                    <label style={{color: 'gray', fontSize: '12px'}}>(6% de descuento)</label>
                </div>
            </div>
            {/* <label className='label-discount'>6% de descuento pagando con Transferencia Bancaria o Efectivo!!</label> */}
        </div>
    );
};

export default PaymentMethodsAccordion;