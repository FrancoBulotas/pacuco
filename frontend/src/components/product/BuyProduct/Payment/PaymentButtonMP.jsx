

import { useEffect, useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useSelector } from 'react-redux';
import { checkWhichPriceToShow } from '../../../common/functions';

// Inicializa Mercado Pago con tu clave pública ALDI
initMercadoPago('APP_USR-30e5d751-8056-4181-ad59-423b5d0813df', { locale: 'es-AR' }); 
// Mi public key de prueba (Usuario comprador de mi cuenta): APP_USR-bb648458-1be1-4bbc-b563-ea881bdd1e0c 
// Public Key de Aldi: APP_USR-30e5d751-8056-4181-ad59-423b5d0813df
const PaymentButtonMP = ({ shippingPrice }) => {
    const [preferenceId, setPreferenceId] = useState(null);
    const cart = useSelector((state) => state.cart.items);

    useEffect(() => {
        createPayment();
    }, [])

    const createPayment = async () => {
        try {
            const items = cart.map((item) => ({
                name: item.name,
                price: checkWhichPriceToShow(item),
                quantity: item.amountToBuy,
            }));

            const response = await axios.post('/api/mp/create-preference', {
                items: items,
                backUrl: "https://www.pacuco.com.ar", 
                shippingPrice: shippingPrice, 
            });
            setPreferenceId(response.data.id);                  
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {preferenceId && (
                <Wallet 
                    key={preferenceId}
                    initialization={{ preferenceId }} 
                    customization={{
                        texts: { valueProp: 'smart_option' }
                }} />
            )}
        </div>
    );
};

export default PaymentButtonMP;