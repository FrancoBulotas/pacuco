
import { Link } from 'react-router-dom'
import { formatNumber } from './common/functions.js'
import HtmlForNoMatches from './common/HtmlForNoMatches.jsx'
import { validateIfItemHasDiscount, checkDiscountPorcentage } from '../common/functions.js'
import ImageComponent  from '../common/Placeholders/ImageComponent.jsx'
import CheckIfIsStockOrCustomizable from './common/CheckIfIsStockOrCustomizable.jsx'

import '../../assets/styles/product.css'

export const LoadProducts = ({ products, table }) => {
    return (
        <div className='products-container'>
            {
                products?.length === 0 
                ? <HtmlForNoMatches />
                : products?.map((prod, i) =>   
                    <Link className='producto' key={i} to={`/products?id=${prod.id}`}>
                        <div className="a-contenedor-productos">
                            {(table === 'stock' || table === 'guardapolvos' || table === 'busqueda') && prod.amount === 0 
                            ? <div className="badge bg-dark text-white position-absolute tag-stock">Sin Stock</div> 
                            : null }

                            <CheckIfIsStockOrCustomizable guardapolvo={prod} navigateTo={table} loadGuardapolvos={true} />
                            
                            <div className='contenedor-imgs'>
                                <div className="contenedor-img-carrito" style={{marginTop:'20px'}}>
                                    <ImageComponent src={prod.img} alt={prod.description.general} className="section-img-carrito" />
                                    <ImageComponent src={prod.img2} alt={prod.description.general} className="section-img-carrito-hover" secondImg={true} />
                                </div>
                            </div>
                            <div className="div-contenedor-detalles">
                                <p className="nombreProducto">{prod.name}</p>
                                <div className='d-flex' style={{flexDirection:'column'}}>
                                    {validateIfItemHasDiscount(prod)
                                        ?   <>
                                                <div>
                                                    <span className="text-decoration-line-through" style={{marginRight:'8px', color:'gray'}}>$ {formatNumber(prod.price)}</span>
                                                    <span className='porcentajeProductoOff'>{checkDiscountPorcentage(prod)}% OFF</span>        
                                                </div>
                                                <span className="precioProducto">${formatNumber(prod.discountPrice)}</span> 
                                            </>
                                        : <p className="precioProducto">$ {formatNumber(prod.price)}</p>
                                    }
                                </div>
                                <div>
                                    {(prod.table === 'stock' || prod.table === 'accesorios') && prod.amount !== 0 
                                        ? <p style={{marginLeft:'auto'}}>{prod.amount} en stock</p>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </Link> 
                )
            }
        </div>
        
    )
}

export default LoadProducts