

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../../reducers/cartReducer'

// Inicializa Mercado Pago con tu clave pública ALDI
initMercadoPago('APP_USR-bb648458-1be1-4bbc-b563-ea881bdd1e0c', { locale: 'es-AR' }); 
// Mi public key de prueba (Usuario comprador de mi cuenta): APP_USR-bb648458-1be1-4bbc-b563-ea881bdd1e0c 
// Public Key de Aldi: APP_USR-30e5d751-8056-4181-ad59-423b5d0813df
const PaymentButtonMP = ({ shippingPrice }) => {
    const [preferenceId, setPreferenceId] = useState(null);
    const cart = useSelector((state) => state.cart.items);
    const formData = useSelector((state) => state.cart.formData);
    const dispatch = useDispatch();

    useEffect(() => {
        createPayment();
        dispatch(setFormData({
            ...formData,
            paymentMethod: 'Mercado Pago',
        }));
    }, [])

    const createPayment = async () => {
        try {
            const response = await axios.post('/api/mp/create-preference', {
                items: cart.map((item) => ({
                    name: item.name,
                    price: item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price,
                    quantity: item.amountToBuy,
                })),
                backUrl: "https://pacuco.loca.lt", 
                shippingPrice: shippingPrice, 
            });
            setPreferenceId(response.data.id);                  
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="wallet_container">
            {preferenceId && (
                <Wallet 
                initialization={{ preferenceId }} 
                customization={{
                    texts: { valueProp: 'smart_option' },
                    // visual: {
                    //     buttonBackground: 'black',
                    //     borderRadius: '8px',
                    // }
                }} />
            )}
        </div>
    );
};

export default PaymentButtonMP;