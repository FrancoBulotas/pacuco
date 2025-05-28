
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addOneToCart, setShow } from '../../reducers/cartReducer.js'
import { useNavigate } from 'react-router-dom'

import ScrollToTop from '../common/ScrollToTop.js'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Swal from 'sweetalert2';
import { formatNumber, roundNumber } from './common/functions.js'
import { validateIfItemHasDiscount, checkDiscountPorcentage} from '../common/functions.js'
import ImageComponent from '../common/Placeholders/ImageComponent.jsx'
import CheckIfIsStockOrCustomizable from './common/CheckIfIsStockOrCustomizable.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/guardapolvo/breadcrum.scss'
import '../../assets/styles/guardapolvo/guardapolvoOld.css'


const Product = ({ navigateTo, product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart.items)
    const [choosenSize, setChoosenSize] = useState('00')
    const [choosenImg, setChoosenImg] = useState(product.img)
    const [change, setChange] = useState(false)

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setChoosenImg(product.img);
    }, [product])

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        } 
    }, [])    

    const saveItem = (prod) => {
        const guardapolvoWithChoosenSize = {...prod, size: prod.table === 'stock' ? prod.size : choosenSize}

        if(prod.table === 'stock'){
            const guardapolvoToAddFromCart = cart.find(item => item.id === prod.id)

            if(guardapolvoWithChoosenSize.amount !== 0){
                if(guardapolvoToAddFromCart && guardapolvoWithChoosenSize.amount === guardapolvoToAddFromCart.amountToBuy){
                    Swal.fire({ title: 'No hay stock suficiente!', icon:'info', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
                } else {
                    dispatch(addOneToCart(guardapolvoWithChoosenSize))
                    dispatch(setShow(true))
                }
            } else {
                Swal.fire({ title: 'No hay stock suficiente!', icon:'info', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
            }
        } else {
            dispatch(addOneToCart(guardapolvoWithChoosenSize))
            dispatch(setShow(true))
        }
    }

    const handleSelectChange = (e) => {
        setChange(true);
        setChoosenSize(e.target.value);
    }
    const handleImgChange = (e) => {
        setChange(true);
        setChoosenImg(e.target.src);
    }
    const handleModalImage = () => {
        Swal.fire({ imageUrl: choosenImg, showConfirmButton: false })
    }

    return(
        <div>
            <ScrollToTop />   
            {
                product ? 
                <section className="py-2">
                    <Breadcrumb className="container px-4 px-lg-5 my-3 breadcrumb-container" style={{marginTop:'0px'}}>
                        <Breadcrumb.Item onClick={() => navigate('/')}>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate(`/products?type=${navigateTo.replace('/', '')}`)}> {navigateTo.replace('_', ' ').replace('/', '')} </Breadcrumb.Item> {/*onClick={() => navigate(`/products?table=${navigateTo.replace(' ','_')}`)}*/}
                        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">
                                {/* <img onClick={handleModalImage} className="card-img-top mb-5 mb-md-0" src={choosenImg === '' ? guardapolvo.img : choosenImg} alt={guardapolvo.description.general} style={{maxHeight:'450px', maxWidth:'100%', width:'100%', objectFit:'contain', cursor:'pointer'}} /> */}

                                <CheckIfIsStockOrCustomizable guardapolvo={product} navigateTo={navigateTo} />

                                <ImageComponent onClick={handleModalImage} src={change ? choosenImg : product.img } alt={product.description.general} className="card-img-top mb-5 mb-md-0" />

                                <div className="imgs-chicas">
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={product.img} alt={product.description.general} className="small-img" id="small-img"></img>
                                    </div>	
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={product.img2} alt={product.description.general} className="small-img" id="small-img2"></img>
                                    </div>	
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={product.img3 !== undefined ? product.img3 : "https://pacucostorage.blob.core.windows.net/common/tabla-de-talles.JPG"} alt={product.description.general} className="small-img"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <h1 className="display-5" style={{fontSize:'35px'}}>{product.name}</h1>
                                {/* <div className="fs-5 mb-4 mt-4" style={{maxHeight:'70px'}}>
                                    {validateIfItemHasDiscount(product)
                                        ?   <>
                                                <div>
                                                    <span className="text-decoration-line-through" style={{marginRight:'8px', color:'gray'}}>$ {formatNumber(product.price)}</span>
                                                    <span className='porcentajeProductoOff'>{checkDiscountPorcentage(product)}% OFF</span>        
                                                </div>
                                                <p className='fw-bolder' style={{marginTop:'10px'}}>$ {formatNumber(product.discountPrice)}</p> 
                                            </>
                                        : <span className='fw-bolder'>$ {formatNumber(product.price)}</span>
                                    }
                                </div> */}
                                <div className="" style={{maxHeight:'70px', margin: '10px 0px'}}>
                                    {
                                        validateIfItemHasDiscount(product) ? (
                                            <>
                                                <p style={{ margin: '0px'}}>
                                                    <strong style={{fontSize: '26px'}}>$ {formatNumber(product.discountPrice)} </strong>
                                                </p>
                                                <div>
                                                    <span style={{ color: 'gray', marginRight: '8px', textDecoration: 'line-through' }}>
                                                        Precio de lista: $ {formatNumber(roundNumber(product.price * 1.06))}
                                                    </span>
                                                    <span className='porcentajeProductoOff'>
                                                        {checkDiscountPorcentage(product)}% OFF
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p style={{ margin: '0px'}}>
                                                    <strong style={{fontSize: '26px'}}>$ {formatNumber(roundNumber(product.price * 1.06))} </strong>
                                                    <span style={{ color: 'gray'}}>precio de lista</span>
                                                </p>
                                                <p style={{ margin: '0px'}}>
                                                    <span style={{color: 'gray'}}>$ {formatNumber(product.price)} </span>
                                                    <span style={{ color: 'gray'}}>con transferencia o efectivo</span>
                                                </p>
                                            </>
                                        )
                                    }
                                </div>
                                <span>Medios de pago</span>
                                <div className="d-flex justify-content-start align-items-center" style={{gap:'5px'}}>
                                    <img style={{width:'45px', height:'25px'}} src='https://pacucostorage.blob.core.windows.net/common/CUENTA-DNI.png' alt='medio de pago cuenta DNI'></img>
                                    <img style={{width:'35px', height:'25px'}} src='https://pacucostorage.blob.core.windows.net/common/logo-banco-frances.webp' alt='medio de pago banco frances'></img>
                                    <img style={{width:'50px', height:'30px'}} src='https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png' alt='medio de pago mercado pago'></img>
                                    <img style={{width:'30px', height:'30px'}} src='https://pacucostorage.blob.core.windows.net/common/bill-image.png' alt='medio de pago efectivo'></img>
                                </div>
                                <div style={{marginBottom:'20px', fontSize:'12px', color:'green'}}></div>
                                {/* <div style={{marginBottom:'20px', fontSize:'12px', color:'green'}}>PAGANDO CON CUENTA DNI DE LUNES A VIERNES 20% DE DESCUENTO</div> */}

                                <div className="d-flex">
                                    <div className='d-flex align-items-center' style={{padding:'10px', border:'1px solid #000', borderRadius:'6px', marginRight:'5px'}}>
                                        Talle
                                        {
                                            product.table === 'stock' ?
                                            <div className='d-flex align-items-center'><p style={{marginLeft:'4px', marginBottom:'0px'}}>{product.size}</p></div> :
                                            <select name="" onChange={handleSelectChange} style={{marginLeft:'5px', border:'none', cursor:'pointer'}}>
                                                <option>00</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        }
                                    </div>
                                    {
                                        product.table === 'stock' ? 
                                            product.amount !== 0 ? 
                                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => saveItem(product)}>
                                                <i className="bi-cart-fill me-1"></i>
                                                Añadir al carrito
                                            </button> :
                                            <div className="btn btn-outline-dark flex-shrink-0 d-flex align-items-center">
                                                Sin Stock    
                                            </div>
                                        :
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => saveItem(product)}>
                                            <i className="bi-cart-fill me-1"></i>
                                            Añadir al carrito
                                        </button>
                                    }
                                    <div className='d-flex align-items-center' style={{marginLeft:'8px'}}>
                                        {
                                            (product.table === 'stock' || product.table === 'accesorios') && product.amount !== 0 ?
                                            <div> {product.amount} en stock</div> :
                                            ''
                                        }
                                    </div>
                                </div>
                                {
                                    product.category === 'guardapolvo' ?
                                    <>
                                        <p style={{marginTop:'20px'}}>BASE: {product.description.base}</p>
                                        <p>DETALLE: {product.description.detalle}</p>
                                        <p>VIVOS: {product.description.vivos}</p>
                                        {product.description.bolsillos !== undefined ? <p>BOLSILLOS: {product.description.bolsillos}</p> : null }
                                    </> : null
                                }
                                <p className="lead" style={{marginTop: '15px'}}>{product.description.general}</p>
                            </div>
                        </div>
                    </div>
                </section>  :
                <>error</>
            }
        </div>
    )
}

export default Product