
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setTotalPrice } from '../../../../reducers/cartReducer';
import { FaUniversity } from 'react-icons/fa';

import '../../../../assets/styles/buyProduct/paymentMethodsAccordion.css';
import { checkWhichPriceToShow } from '../../../common/functions';

const PaymentMethodsAccordion = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.cart.formData);
    const cart = useSelector(state => state.cart.items);
    const [selectedMethod, setSelectedMethod] = useState(formData.paymentMethod || '');

    useEffect(() => {
        if(formData.paymentMethod === 'Efectivo' || formData.paymentMethod === 'Transferencia Bancaria') {
            dispatch(setTotalPrice(cart.reduce((acc, item) =>  acc +  ((item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price) * item.amountToBuy), 0))); 
        } else {
            dispatch(setTotalPrice(cart.reduce((acc, item) =>  acc +  ((checkWhichPriceToShow(item)) * item.amountToBuy), 0))); 
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

                <div className="container-labels-payment-methods">
                    <label htmlFor="mercado-pago">Mercado Pago</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>Podés pagar con dinero en cuenta o cualquiera de tus tarjetas!</label>
                </div>
                <img src="https://pacucostorage.blob.core.windows.net/common/MP_RGB_HANDSHAKE_color-blanco_vert.png" 
                    alt="" 
                    style={{width:'30px', height:'23px', marginRight:'10px'}}
                />
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
                <div className="container-labels-payment-methods">
                    <label htmlFor="banco-frances">Banco Francés</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>30% de descuento martes y jueves con tarjetas de credito!</label>
                </div>
                <img src="https://pacucostorage.blob.core.windows.net/common/logo-banco-frances.webp" alt="" style={{width:'40px', height:'23px', marginRight:'10px'}} />

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
                <div className="container-labels-payment-methods">
                    <label htmlFor="cuenta-dni">Cuenta DNI</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>3 cuotas sin interes!</label>
                </div>
                <img src="https://pacucostorage.blob.core.windows.net/common/cuenta-dni-banco-provincia-logo.png" alt="" style={{width:'50px', height:'15px', marginRight:'10px'}} />

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
                <div className="container-labels-payment-methods">
                    <label htmlFor="transferencia-bancaria">Transferencia Bancaria</label>
                    <label style={{color: 'gray', fontSize: '11px'}}>10% de descuento</label>
                </div>
                <FaUniversity className="me-2 text-dark" size={30} />
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
                <div className="container-labels-payment-methods">
                    <label htmlFor="efectivo">Efectivo</label>
                    <label style={{color: 'gray', fontSize: '12px'}}>10% de descuento</label>
                </div>
                <img src="https://pacucostorage.blob.core.windows.net/common/bill-image.png" 
                    alt="" 
                    style={{width:'23px', height:'23px', marginRight:'10px'}}
                />
            </div>
            <label className='label-discount'>Se recuerda que las promociones que tienen Cuenta DNI y Banco Francés 
                corren por cuenta de los bancos, no es una promocion que otorgamos nosotras. Por ese motivo no se ve reflejado en el total.
            </label>
        </div>
    );
};

export default PaymentMethodsAccordion;