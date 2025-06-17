
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import purchasedProductsService from '../../services/purchasedProduct'
import guardapolvosService from '../../services/guardapolvos'
import PurchaseHistoryModal from './modals/PurchaseHistoryModal'
import { setToken } from '../../services/token'

import { orderByDate } from '../common/functions'
import { formatNumber } from '../product/common/functions'

import PaginationProducts from '../product/common/PaginationProductos'
import PurchaseFilterBar from './common/PurchaseFilterBar'
import Swal from 'sweetalert2'
import { FaCheck, FaTrash, FaTimes } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'
import { DateTime } from 'luxon';

import Stats from './common/Stats'

import '../../assets/styles/admin/purchaseHistory.scss'

const PurchaseHistory = () => {
    const userLogged = useSelector(state => state.login)
    const navigate = useNavigate()

    const [purchasedProducts, setPurchasedProducts] = useState([])
    const purchasedProductsRef = useRef([])
    const [purchaseModalShow, setpurchaseModalShow] = useState(false)
    const [itemToShow, setItemToShow] = useState({clientData: {
        fullName: '',
        email: '',
        dni: '',
        phone: '',
        province: '',
        city: '',
        address: '',
        zipCode: '',
        paymentMethod: '',
        shipMethod: '',
        sucursal: '',
    }})
    
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 7
    const totalProducts = purchasedProducts.length 
    const totalPages = Math.ceil(totalProducts / productsPerPage)

    useEffect(() => {
        const fetchPurchasedProducts = async () => {
            const prods = await purchasedProductsService.getAll()    
            const sortedProds = orderByDate(prods, true)
            setPurchasedProducts(sortedProds)
            purchasedProductsRef.current = sortedProds
        }
        fetchPurchasedProducts()
    }, [])

    const showPurchaseModal = (item) => {
        setpurchaseModalShow(true)
        setItemToShow(item)
    }

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return purchasedProducts.slice(startIndex, endIndex);
    }

    const resetProducts = async () => {
        setPurchasedProducts(orderByDate(await purchasedProductsService.getAll(), true))
    }

    const handleClickDelete = (item) => {
        Swal.fire({ 
            title: `Estas segura que queres eliminar el registro?`, 
            text:`codigo de operacion: ${item.operationCode}`, 
            icon:'question', 
            confirmButtonText: 'Aceptar', 
            confirmButtonColor: '#000', 
            showDenyButton: true, 
            denyButtonText: 'Cancelar',
            html: `${isProductFromStock(item) ? `
                    <div style="text-align: left;">
                        <input type="checkbox" id="confirmCheckbox">
                        <label for="confirmCheckbox">Agregar nuevamente el producto al stock</label>
                    </div>
                    ` : ''
                } `,
        })
        .then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if(isProductFromStock(item)) {
                        const isChecked = document.getElementById('confirmCheckbox').checked;
                        // en caso de que este tildado, se vuelve a agregar el producto al stock y el item tenga del stock
                        if (isChecked) {
                            try { 
                                item.cartPurchased.forEach(async (item) => {
                                    if(item.table === 'stock'){
                                        const prod = await guardapolvosService.getById(item.id);
                                        await guardapolvosService.update(prod.id, {...prod, amountToBuy: 1, amount: prod.amount + item.amountToBuy });  
                                    }
                                })  
                            }
                            catch(error) { 
                                console.log(error)
                            }
                        }
                    }

                    const token = setToken(userLogged.token)
                    await purchasedProductsService.deletePurchase(item.id, token)
                    Swal.fire({title: 'Eliminado correctamente!', icon:'success',  confirmButtonText: 'Aceptar', confirmButtonColor: '#000'})
                    .then(() => {
                        resetProducts();
                    })
                }
                catch (error) {
                    console.error('Error', error)
                    if(error.response.data.error === 'token expired'){
                        Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then((result) => {
                            if(result.isConfirmed){ 
                                navigate('/login') 
                            }
                        })
                    } else {
                        console.log(error)
                        Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                    }
                }
            }
        })
    }

    const isProductFromStock = (item) => {
        let contStock = 0;
        item.cartPurchased.map((prod) => { 
            if(prod.table == "stock") contStock++;
        })
        if(contStock > 0) return true;
        else return false
    }

    return (
        <div>
            <div className="table-wrapper">            
                {/* <Header /> */}                
                <h3>Historial de ventas</h3>
                <div className='d-flex gap-2 w-100' style={{ marginLeft:'4px', alignItems:'center', marginBottom:'20px'}}>
                    <div style={{backgroundColor:'#eed6e5', width: '40px', height: '20px', borderRadius:'8px'}}></div>
                    <p style={{fontSize:'13px', margin:'0px'}}>Productos comprados del stock</p>
                </div>
                <div className='filters-table-container'>
                    <PurchaseFilterBar purchasedProducts={purchasedProducts} 
                                        setPurchasedProducts={setPurchasedProducts} 
                                        everyProductsRef={purchasedProductsRef.current} 
                                        onPageChange={onPageChange} 
                    />
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Código de operación</th>
                                <th>Cliente</th>
                                <th>Total Compra</th>
                                <th>Fecha</th>
                                <th>Comp.</th>
                                <th colSpan={2}>*</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCurrentProducts().map((item, index) => (
                            <tr
                                key={item.operationCode}
                                className={isProductFromStock(item) ? 'from-stock' : ''}
                            >
                                <td>{(currentPage - 1) * productsPerPage + index + 1}</td>
                                <td><span className="code-pill">{item.operationCode}</span></td>
                                <td>{item.clientData.fullName}</td>
                                <td>$ {formatNumber(item.totalPricePurchased)}</td>
                                <td>{DateTime.fromJSDate(new Date(item.time)).setZone('America/Argentina/Buenos_Aires').toFormat('dd/MM/yyyy')}</td>
                                <td className="icon-cell">
                                    {item.saleConfirmed ? (
                                        <FaCheck className="icon success" />
                                    ) : (
                                        <FaTimes className="icon error" />
                                    )}
                                </td>
                                <td className="icon-cell">
                                    <IoEyeOutline
                                        className="icon view"
                                        onClick={() => showPurchaseModal(item)}
                                />
                                </td>
                                <td className="icon-cell">
                                    <FaTrash
                                        className="icon delete"
                                        onClick={() => handleClickDelete(item)}
                                />
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
                <PurchaseHistoryModal item={itemToShow} show={purchaseModalShow} onHide={() => setpurchaseModalShow(false)} resetProducts={resetProducts} />
                <div className='chart'>
                    <Stats purchasedProducts={purchasedProducts} />
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistory