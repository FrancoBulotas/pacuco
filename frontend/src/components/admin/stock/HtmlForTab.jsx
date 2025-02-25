
import React, { useState, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import searchProdsService from '../../../services/searchProds'

import { guardapolvosFilter, validateIfItemHasDiscount } from '../../common/functions.js'
import PaginationProducts from '../../product/common/PaginationProductos'
import { IconPlus } from '../../../assets/icons/icons';
import SearchBar from '../../common/SearchBar'
import LoadingScreen from '../../common/loaders/LoadingScreen.jsx'
import { filterChange } from '../../../reducers/filterReducer'
import Swal from 'sweetalert2';

import '../../../assets/styles/admin/htmlForTab.scss'


const HtmlForTab = ({ title, table, type, category, showCreateModal, showEditModal, refreshKey }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [guardapolvos, setGuardapolvos] = useState([])

    useEffect(() => {
        setProducts(); 
    }, [type, refreshKey])

    const setProducts = async () => {
        const products = await searchProdsService.getSearch({'type': type , 'category': category});
        setGuardapolvos(products);
    }

    const filter = useSelector(state => state.filter.search.toLowerCase()) 
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 6
    const totalProducts = guardapolvos.length 
    const totalPages = Math.ceil(totalProducts / productsPerPage)

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        if(guardapolvos.length > 0){
            return guardapolvos.slice(startIndex, endIndex);
        }
    }

    const displaySearch = async () => {
        setIsLoading(true)

        if(filter !== '') {
            setCurrentPage(1)
            const filtred = await searchProdsService.getSearch({'table': table, 'name': filter, 'type': type, 'category': category });
            setGuardapolvos(filtred)
        } else {
            resetGuardapolvos()
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    const resetGuardapolvos = () => {
        dispatch(filterChange(''))
        setProducts();
    }
    
    const handleModalImage = (img) => {
        Swal.fire({ imageUrl: img, showConfirmButton: false })
    }

    const buttonStyle = {margin:'0px', fontSize: '16px', background:'inherit', border:'none'}
    const searchBarStyle = { marginRight: '5px', cursor: 'pointer', fontSize:'13px', display:'flex', alignItems: 'center', backgroundColor:'#f3f3f3', padding:'4px', borderRadius:'6px' }

    return (     
        <div>
            <div className='d-flex w-100'>
                <h4 className="label-titulos">{title}</h4>
                <div style={{marginLeft:'auto', display:'flex'}}>
                    {/* {
                        guardapolvos.length !== guardapolvosList.length 
                        ? <div onClick={() => resetGuardapolvos()} style={searchBarStyle}>reiniciar</div>
                        : null
                    }                      */}
                    <div onClick={() => resetGuardapolvos()} style={searchBarStyle}>reiniciar</div>
                    <div><SearchBar displaySearch={displaySearch} filtrateSearch={null} /></div>
                    <button onClick={() => showCreateModal(table)} style={buttonStyle}><IconPlus width={'20'} height={'20'} /></button>
                </div>

            </div>
           { isLoading 
            ? <LoadingScreen />
            : <div className='tabla-container'>
                <table className='tabla-de-productoss'>
                    <thead>
                        { table === 'stock' 
                            ?
                            <tr className='tr-tabla-productos'>
                                <th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Talle</th><th>Frente</th><th>Dorso</th><th style={{width:'50px'}}>Descuento</th><th></th>
                            </tr> 
                            :
                            <tr className='tr-tabla-productos'>
                                <th>Nombre</th><th>Precio</th><th>Frente</th><th>Dorso</th><th style={{width:'50px'}}>Descuento</th><th>Editar</th>
                            </tr>
                        }
                    </thead>
                    {getCurrentProducts()?.map((item, i) =>         
                        <tbody key={i}>
                            <tr className={`tr-tabla-productos ${item.show ? '' : 'resaltado'}`} >
                                <td>{item.name}</td>
                                <td>$ {validateIfItemHasDiscount(item) ? item.discountPrice : item.price}</td>
                                { table === 'stock' ? <td>{item.amount}</td> : '' }
                                { table === 'stock' ? <td>{item.size}</td> : '' }
                                <td><img src={item.img} onClick={() => handleModalImage(item.img)} alt={item.description.general} className="small-img-admin" style={{ cursor: 'pointer' }}></img></td>
                                <td><img src={item.img2} onClick={() => handleModalImage(item.img2)} alt={item.description.general} className="small-img-admin" style={{ cursor: 'pointer'}}></img></td>
                                <td>{ validateIfItemHasDiscount(item) ? <i className="bi bi-check-lg" style={{color:'green'}}></i> : <i className="bi bi-x-lg" style={{color:'red'}}></i>}</td>
                                <td onClick={() => showEditModal(item, table)} style={{ cursor: 'pointer'}}><i className="bi bi-pencil-square"></i></td>
                            </tr>
                        </tbody>
                    )}
                </table>
                <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
           </div>}
        </div>
    )
}

export default HtmlForTab