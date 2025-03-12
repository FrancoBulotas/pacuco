
import guardapolvosService from '../../../services/guardapolvos'
import { removeFromCart } from '../../../reducers/cartReducer'
import { setProducts } from '../../../reducers/guardapolvosReducer'
import Swal from 'sweetalert2'

export const checkStock = async (stockCart, dispatch) => {
    const products = await guardapolvosService.getAll();
    dispatch(setProducts(products));

    stockCart.map(async (item) => {
        try {
            const guardapolvo = products.find(product => product.id === item.id)

            if(guardapolvo && guardapolvo.amount <= 0) {
                Swal.fire({ title: `${item.name} se elimino del carrito ya que no hay stock disponible`, icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
                .then((result) => {
                    if (result.isConfirmed) {
                        dispatch(removeFromCart(item));
                        return;
                    }
                }) 
            }
        } catch (error) {
            console.log(error)
            Swal.fire({ title: `${item.name} se elimino del carrito ya que no hay stock disponible`, icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(removeFromCart(item));
                    return;
                }
            }) 
        }
    })
    
}