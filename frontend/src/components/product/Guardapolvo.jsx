
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addOneToCart, setShow } from '../../reducers/cartReducer'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

import ScrollToTop from '../../components/common/ScrollToTop'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Swal from 'sweetalert2';
import { formatNumber } from './common/functions.js'
import { validateIfItemHasDiscount, checkDiscountPorcentage} from '../common/functions.js'
import ImageComponent from '../common/Placeholders/ImageComponent.jsx'
import CheckIfIsStockOrCustomizable from './common/CheckIfIsStockOrCustomizable.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/guardapolvo/breadcrum.scss'
import '../../assets/styles/guardapolvo/guardapolvoOld.css'


const Guardapolvo = ({navigateTo, guardapolvo}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams] = useSearchParams();

    const cart = useSelector(state => state.cart.items)
    const [choosenSize, setChoosenSize] = useState('00')
    const [choosenImg, setChoosenImg] = useState(guardapolvo.img)
    const [change, setChange] = useState(false)

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        if(change) setChoosenImg(guardapolvo.img);
    }, [location, searchParams])

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        } 
    }, [])

    const saveItem = (guardapolvo) => {
        const guardapolvoWithChoosenSize = {...guardapolvo, size: guardapolvo.table === 'stock' ? guardapolvo.size : choosenSize}

        if(guardapolvo.table === 'stock'){
            const guardapolvoToAddFromCart = cart.find(item => item.id === guardapolvo.id)

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
                guardapolvo ? 
                <section className="py-2">
                    <Breadcrumb className="container px-4 px-lg-5 my-3 breadcrumb-container" style={{marginTop:'0px'}}>
                        <Breadcrumb.Item onClick={() => navigate('/')}>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item active> {navigateTo.replace('_', ' ').replace('/', '')} </Breadcrumb.Item> {/*onClick={() => navigate(`/products?table=${navigateTo.replace(' ','_')}`)}*/}
                        <Breadcrumb.Item active>{guardapolvo.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">
                                {/* <img onClick={handleModalImage} className="card-img-top mb-5 mb-md-0" src={choosenImg === '' ? guardapolvo.img : choosenImg} alt={guardapolvo.description.general} style={{maxHeight:'450px', maxWidth:'100%', width:'100%', objectFit:'contain', cursor:'pointer'}} /> */}

                                <CheckIfIsStockOrCustomizable guardapolvo={guardapolvo} navigateTo={navigateTo} />

                                <ImageComponent onClick={handleModalImage} src={change ? choosenImg : guardapolvo.img } alt={guardapolvo.description.general} className="card-img-top mb-5 mb-md-0" />

                                <div className="imgs-chicas">
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={guardapolvo.img} alt={guardapolvo.description.general} className="small-img" id="small-img"></img>
                                    </div>	
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={guardapolvo.img2} alt={guardapolvo.description.general} className="small-img" id="small-img2"></img>
                                    </div>	
                                    <div className="imgs-modelos">
                                        <img onClick={handleImgChange} src={guardapolvo.img3 !== undefined ? guardapolvo.img3 : "https://pacucostorage.blob.core.windows.net/common/tabla-de-talles.JPG"} alt={guardapolvo.description.general} className="small-img"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <h1 className="display-5" style={{fontSize:'35px'}}>{guardapolvo.name}</h1>
                                <div className="fs-5 mb-4 mt-4" style={{maxHeight:'70px'}}>
                                    {validateIfItemHasDiscount(guardapolvo)
                                        ?   <>
                                                <div>
                                                    <span className="text-decoration-line-through" style={{marginRight:'8px', color:'gray'}}>$ {formatNumber(guardapolvo.price)}</span>
                                                    <span className='porcentajeProductoOff'>{checkDiscountPorcentage(guardapolvo)}% OFF</span>        
                                                </div>
                                                <p className='fw-bolder' style={{marginTop:'10px'}}>$ {formatNumber(guardapolvo.discountPrice)}</p> 
                                            </>
                                        : <span className='fw-bolder'>$ {formatNumber(guardapolvo.price)}</span>
                                    }
                                </div>
                                <span>Medios de pago</span>
                                <div >
                                    <img style={{width:'45px', height:'25px'}} src='https://pacucostorage.blob.core.windows.net/common/CUENTA-DNI.png' alt='medio de pago cuenta DNI'></img>
                                    <img style={{width:'50px', height:'30px'}} src='https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png' alt='medio de pago mercado pago'></img>
                                    <img style={{width:'30px', height:'30px'}} src='https://pacucostorage.blob.core.windows.net/common/bill-image.png' alt='medio de pago efectivo'></img>
                                </div>
                                <div style={{marginBottom:'20px', fontSize:'12px', color:'green'}}></div>
                                {/* <div style={{marginBottom:'20px', fontSize:'12px', color:'green'}}>PAGANDO CON CUENTA DNI DE LUNES A VIERNES 20% DE DESCUENTO</div> */}

                                <div className="d-flex">
                                    <div className='d-flex align-items-center' style={{padding:'10px', border:'1px solid #000', borderRadius:'6px', marginRight:'5px'}}>
                                        Talle
                                        {
                                            guardapolvo.table === 'stock' ?
                                            <div className='d-flex align-items-center'><p style={{marginLeft:'4px', marginBottom:'0px'}}>{guardapolvo.size}</p></div> :
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
                                        guardapolvo.table === 'stock' ? 
                                            guardapolvo.amount !== 0 ? 
                                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => saveItem(guardapolvo)}>
                                                <i className="bi-cart-fill me-1"></i>
                                                Añadir al carrito
                                            </button> :
                                            <div className="btn btn-outline-dark flex-shrink-0 d-flex align-items-center">
                                                Sin Stock    
                                            </div>
                                        :
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => saveItem(guardapolvo)}>
                                            <i className="bi-cart-fill me-1"></i>
                                            Añadir al carrito
                                        </button>
                                    }
                                    <div className='d-flex align-items-center' style={{marginLeft:'8px'}}>
                                        {
                                            guardapolvo.table === 'stock' ?
                                            <div> {guardapolvo.amount} en stock</div> :
                                            ''
                                        }
                                    </div>
                                </div>
                                {
                                    guardapolvo.category === 'guardapolvo' ?
                                    <>
                                        <p style={{marginTop:'20px'}}>BASE: {guardapolvo.description.base}</p>
                                        <p>DETALLE: {guardapolvo.description.detalle}</p>
                                        <p>VIVOS: {guardapolvo.description.vivos}</p>
                                        {guardapolvo.description.bolsillos !== undefined ? <p>BOLSILLOS: {guardapolvo.description.bolsillos}</p> : null }
                                    </> : null
                                }
                                <p className="lead" style={{marginTop: '15px'}}>{guardapolvo.description.general}</p>
                            </div>
                        </div>
                    </div>
                </section>  :
                <>error</>
            }
        </div>
    )
}

export default Guardapolvo