
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PaymentMethodsAccordion from '../Payment/PaymentMethodsAccordion';

import searchProdsService from '../../../../services/searchProds';
import guardapolvosService from '../../../../services/guardapolvos';
import { sendEmailJS } from '../email/SendEmail';

import { Button, Spinner } from 'react-bootstrap';

import { setFormData } from '../../../../reducers/cartReducer'
import { setProducts } from '../../../../reducers/guardapolvosReducer'

import '../../../../assets/styles/buyProduct/paymentOptions.scss';
import Swal from 'sweetalert2';


const PaymentOptions = ({ loading }) => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const paymentMethods = useSelector(state => state.paymentMethods);    
    const products = useSelector(state => state.guardapolvos.products);
    const cart = useSelector(state => state.cart.items);
    const formData = useSelector(state => state.cart.formData);    
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const shippingPrice = useSelector(state => state.cart.shippingPrice);
  
    const handleSubmit = async () => {   
        // const resultPhoneValidation = validatePhoneNumber(formData.phone);       
        try {
          const [result, operationCode] = await sendEmailJS(formData, cart, totalPrice + shippingPrice, shippingPrice);
          // const result = await sendWhatsAppService.sendMessage(`549${num}`, createMessage(formData, cart, totalPrice + shippingPrice, shippingPrice));
          if(result) {
              dispatch(setFormData({
                  ...formData,
                  operationCode: operationCode,
              }));
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

      if(!formData.paymentMethod) {
        Swal.fire({ 
          title:'Debes seleccionar un metodo de pago!', 
          text:'Porfavor selecciona un metodo de pago para continuar con tu compra.', 
          icon:'warning', 
          confirmButtonText: 'Aceptar', 
          confirmButtonColor: '#000', 
        })
        return
      }
      
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

        <Button
          variant="primary"
          onClick={() => handleClick()}
          className="w-100 py-2 btn-dark"
          style={{marginTop: '20px'}}
          >
          {loading ? <Spinner animation="border" size="sm" /> : 'Encargar pedido'}
        </Button>
        <p className='p-details'>
          Una vez encargado el pedido, te llegara un correo electronico con el detalle del pedido y seras dirigida a sección con el detalle del Pago
          a realizar segun el metodo de pago seleccionado..
        </p>
      </div>
    )
  }

export default PaymentOptions;
