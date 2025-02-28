
import React, { useState, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import searchProdsService from '../../../services/searchProds'

import { guardapolvosFilter, validateIfItemHasDiscount } from '../../common/functions.js'
import PaginationProducts from '../../product/common/PaginationProductos'
import { IconPlus } from '../../../assets/icons/icons';
import SearchBar from '../../common/SearchBar'
import LoadingScreen from '../../common/loaders/LoadingScreen.jsx'
import { filterChange } from '../../../reducers/filterReducer'
import Filters from '../common/Filters/Filters.jsx';
import FiltersAplied from '../common/Filters/FiltersAplied.jsx';
import Swal from 'sweetalert2';

import '../../../assets/styles/admin/htmlForTab.scss'


const HtmlForTab = ({ title, table, type, category, showCreateModal, showEditModal, refreshKey }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])

    const defaultSearchParams = {'type': type , 'category': category}
    const [searchParams, setSearchParams] = useState(defaultSearchParams)
    
    const filter = useSelector(state => state.filter.search.toLowerCase()) 
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 6
    const totalProducts = products.length 
    const totalPages = Math.ceil(totalProducts / productsPerPage)

    useEffect(() => {
        updateProducts(searchParams); 
    }, [type, refreshKey, searchParams])

    const updateProducts = async (params) => {
        const products = await searchProdsService.getSearch(params);
        setProducts(products);
    }

    const resetFiltredProducts = (key) => {
        setSearchParams({...searchParams, [key]:null});
    }

    const resetProducts = () => {
        dispatch(filterChange(''));
        setSearchParams(defaultSearchParams);
        updateProducts(defaultSearchParams);
    }

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        if(products.length > 0){
            return products.slice(startIndex, endIndex);
        }
    }

    const displaySearch = async () => {
        setIsLoading(true)

        if(filter !== '') {
            const newParams = {...searchParams, 'name': filter};
            setCurrentPage(1);
            const filtred = await searchProdsService.getSearch(newParams);
            setSearchParams(newParams);
            setProducts(filtred);
        } else {
            resetProducts();
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }
   
    const handleModalImage = (img) => {
        Swal.fire({ imageUrl: img, showConfirmButton: false })
    }

    const buttonStyle = {margin:'0px', fontSize: '16px', background:'inherit', border:'none'}
    const searchBarStyle = { marginRight: '5px', cursor: 'pointer', fontSize:'13px', display:'flex', alignItems: 'center', backgroundColor:'#f3f3f3', padding:'6px', borderRadius:'6px' }


    const paramKeys = Object.keys(searchParams);
    // Check if the keys exactly match ['type', 'category']
    const hasOnlyTypeAndCategory = 
      paramKeys.length === 2 && 
      paramKeys.includes('type') && 
      paramKeys.includes('category');

    return (     
        <div>
            <div className='d-flex w-100'>
                <h4 className="label-titulos">{title}</h4>
                <div style={{marginLeft:'auto', display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <div onClick={() => resetProducts()} style={searchBarStyle}>Reiniciar</div>
                    
                    <SearchBar displaySearch={displaySearch} filtrateSearch={null} />
                    <Filters searchParams={searchParams} setSearchParams={setSearchParams} table={table} setCurrentPage={setCurrentPage} />
                    <button onClick={() => showCreateModal(table)} style={buttonStyle}><IconPlus width={'30'} height={'30'} /></button>
                </div>
            </div>
            {                 
                !hasOnlyTypeAndCategory &&
                <FiltersAplied resetFiltredProducts={resetFiltredProducts} filters={searchParams} />
            }
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
                <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} admin={true} />
           </div>}
        </div>
    )
}

export default HtmlForTab