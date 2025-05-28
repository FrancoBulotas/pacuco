
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { formatNumber, roundNumber } from '../product/common/functions';

import Swal from 'sweetalert2';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { addOneToCart, removeFromCart, removeOneFromCart, setShow, clearCart } from '../../reducers/cartReducer';
import { IconCart } from '../../assets/icons/icons';
import CheckIfIsStockOrCustomizable from '../product/common/CheckIfIsStockOrCustomizable.jsx'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const show = useSelector(state => state.cart.show)
    const cart = useSelector(state => state.cart.items)

    const handleCart = () => dispatch(setShow(!show))

    const handleRemoveFromCart = (item) => {        
        dispatch(removeFromCart(item))
    }

    const handleItemToSee = (item) => {
        navigate(`/products?id=${item.id}`)
        handleCart()
    }

    const deleteOneItem = (item) => {
        dispatch(removeOneFromCart(item))
    }

    const saveOneItem = (item) => {
        if(item.amount === item.amountToBuy){
            Swal.fire({ title: 'No hay mas en stock!', icon:'info', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
        } else{
            dispatch(addOneToCart(item))
        }
    }

    const totalInCart = () => {
        let sum = 0
        // recorremos el carrito, y si existe un prod con descuento se multiplica ese valor, y no el total
        cart.map(item => sum += ((item.discountPrice || item.discountPrice > 0 ? item.discountPrice : roundNumber(item.price * 1.06)) * item.amountToBuy))
        return formatNumber(sum)
    }

    const buyProduct = () => {
        if(cart.length === 0){
            Swal.fire({ title: 'El carrito esta vacio', icon: 'info', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
        }
        else {
            navigate('/finalizarCompra')
            handleCart()    
        }
    }

    const buttonKeepBuying = {textDecoration:'underline', boxShadow:'none', border:'none', backgroundColor:'#fff', marginTop:'10px', fontSize:'14px', paddingLeft:'0px'}

    return (
        <div>
            <button onClick={handleCart} style={{border:'none', backgroundColor:'inherit', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <IconCart />
                <span className="badge" style={{backgroundColor:'inherit', color:'#000', padding:'0px', paddingLeft:'4px'}}>{cart.length}</span>
            </button>
            <Offcanvas show={show} onHide={handleCart} placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.map((item, i) => 
                        <div  key={i} className='productInCart'>
                            <div onClick={() => handleItemToSee(item)} className="imagen-en-carrito" style={{cursor:'pointer'}}>
                                <CheckIfIsStockOrCustomizable guardapolvo={item} navigateTo={item.table} loadGuardapolvos={false} cart={true} />
                                <img src={item.img} height="150px" width="150px" alt='pacuco guardapolvos. carrito. compras' ></img>
                            </div>
                            <div className="detalles-prod-carrito">
                                <p className="nombre-producto">{item.name}</p>
                                <p>Precio: $ {item.discountPrice || item.discountPrice > 0 ? formatNumber(item.discountPrice) : formatNumber(roundNumber(item.price * 1.06))}</p>
                                <p> 
                                    <button onClick={() => deleteOneItem(item)} className="boton-restar-uno">-</button>
                                    <span id="cantidad">{item.amountToBuy}</span>
                                    <button onClick={() => saveOneItem(item)} className="boton-sumar-uno">+</button>
                                </p>
                                <div className='size-and-delete'> 
                                    <p>Talle: {item.size} </p>
                                    <button onClick={() => handleRemoveFromCart(item)} className="boton-eliminar"><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    )}
                    <p className="precioProducto" style={{marginBottom: '10px'}}>Precio total: $ {totalInCart()}</p>
                    <div>
                        <button onClick={() => dispatch(clearCart())} className="btn btn-light" >Vaciar carrito</button>
                        <button onClick={() => buyProduct()} className="btn btn-dark boton-comprar">Finalizar compra</button >
                    </div>
                    <button onClick={() => handleCart()} style={buttonKeepBuying}>Seguir comprando</button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart