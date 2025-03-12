
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap'
import Spinner from '../../../common/Spinner'

// import PaymentButtonMP from './PaymentButtonMP';
import PaymentMethodsAccordion from './PaymentMethodsAccordion';

import searchProdsService from '../../../../services/searchProds';
import guardapolvosService from '../../../../services/guardapolvos';
import { sendEmailJS } from '../SendEmail';

import { clearCart, setShippingPrice, setFormData, setTotalPrice } from '../../../../reducers/cartReducer'
import { setProducts } from '../../../../reducers/guardapolvosReducer'

import '../../../../assets/styles/buyProduct/paymentOptions.scss';


const PaymentOptions = ({ loading }) => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const paymentMethods = useSelector(state => state.paymentMethods);    
    const products = useSelector(state => state.guardapolvos.products);
    const cart = useSelector(state => state.cart.items);
    const formData = useSelector(state => state.cart.formData);    
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const shippingPrice = useSelector(state => state.cart.shippingPrice);
  
    console.log(formData);

    const handleSubmit = async () => {   
        // const resultPhoneValidation = validatePhoneNumber(formData.phone);       
        try {
          const result = await sendEmailJS(formData, cart, totalPrice + shippingPrice, shippingPrice);
          // const result = await sendWhatsAppService.sendMessage(`549${num}`, createMessage(formData, cart, totalPrice + shippingPrice, shippingPrice));
          if(result) {
              // dispatch(setFormData({ fullName : '', email: '', dni: '', phone: '', province: '', city: '', address: '', zipCode: '', shipMethod: 'Sucursal', sucursal: '', paymentMethod: '',}));
              dispatch(setTotalPrice(0));
              dispatch(setShippingPrice(0));
              dispatch(clearCart()); 

              updateProductsFromStock();
              await searchProdsService.clearCache();

              return true;
          } else {
              Swal.fire({ title:'Hubo un problema con tu compra', text:'Intentalo de nuevo mas tarde. Cualquier consulta escribir al 11 2322-3048.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
              .then(() => {
                  navigate('/');
              })
          }    
          
      } catch (error) {
          console.log(error);
          Swal.fire({ title:'Hubo un problema con tu compra', text:'Intentalo de nuevo mas tarde. Cualquier consulta escribir al 11 2322-3048.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
              .then(() => {
                  navigate('/');
          })
      }
    }

    const updateProductsFromStock = () => {
      const stockProductsInCart = cart.filter(item => item.table === 'stock');

      if(stockProductsInCart.length !== 0){
          stockProductsInCart.map(async (item) => {
              const prod = products.find(product => product.id === item.id);

              if(prod && prod.amount > 0 && prod.amount >= item.amountToBuy){
                  try { 
                      await guardapolvosService.update(item.id, {...item, amountToBuy: 1, amount: item.amount - item.amountToBuy })
                      
                      const response = await searchProdsService.getSearch({'category': ''});
                      dispatch(setProducts(response))
                  }
                  catch(error) { 
                      console.error(error)
                  }    
              }
          })
      }
    }

    const handleClick = () => {


      const result = handleSubmit();

      if(result) navigate('/finalizarCompra/success');
    }


    return(
      <div className="payment-section">
        <PaymentMethodsAccordion 
          paymentMethods={paymentMethods} 
          loading={loading} 
          handleClick={handleClick} 
        />
        {/* Contenedor de Opciones */}
        {/* <div className="payment-options">
          <div className="payment-option">
            <h3 className="option-title">Mercado Pago</h3>
            <p className="option-description">
              Realiza una transferencia por Mercado Pago a la siguiente cuenta:

            </p>
            <div className="bank-details">
              <p><strong>Titular de Cuenta:</strong> {paymentMethods.titularCuentaCvu}</p>
              <p><strong>CBU:</strong> {paymentMethods.cvu}</p>
              <p><strong>Alias:</strong> {paymentMethods.aliasCvu}</p>
            </div>
            <p className="option-note">
              Una vez realizada la transferencia, envíanos el comprobante al correo electrónico{' '}
              <a href="mailto:compras@pacuco.com.ar" className="email-link">
                compras@pacuco.com.ar
              </a>{' '}
              para confirmar tu compra.
            </p>

            <Button 
                variant="dark" 
                onClick={() => handleClick('Mercado Pago')}
                style={{width:'100%'}}
            >
                {loading ? <Spinner /> : 'Encargar pedido'}
            </Button>
          </div>

          <div className="payment-option">
            <h3 className="option-title">Transferencia Bancaria</h3>
            <p className="option-description">
              Realiza una transferencia bancaria a la siguiente cuenta:
            </p>
            <div className="bank-details">
              <p><strong>Titular de Cuenta:</strong> {paymentMethods.titularCuentaCbu}</p>
              <p><strong>CBU:</strong> {paymentMethods.cbu}</p>
              <p><strong>Alias:</strong> {paymentMethods.aliasCbu}</p>
            </div>
            <p className="option-note">
              Una vez realizada la transferencia, envíanos el comprobante al correo electrónico{' '}
              <a href="mailto:compras@pacuco.com.ar" className="email-link">
                compras@pacuco.com.ar
              </a>{' '}
              para confirmar tu compra.
            </p>

            <Button 
                variant="dark" 
                onClick={() => handleClick('Transferencia Bancaria')}
                style={{width:'100%'}}
            >
                {loading ? <Spinner /> : 'Encargar pedido'}
            </Button>
          </div>
        </div> */}
      </div>
    )
  }

export default PaymentOptions;
