
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChoosenPage } from '../../reducers/filterReducer'

import FiltersBar from '../common/FiltersBar'
import LoadingScreen from '../common/loaders/LoadingScreen'
import ScrollToTop from '../../components/common/ScrollToTop'
import ProductsBreadcrumb from '../common/ProductsBreadcrumb'
import LoadGuardapolvos from './LoadGuardapolvos'
import PaginationProducts from './common/PaginationProductos'
import HtmlForFilterResuls from './common/HtmlForFilterResult'

import '../../assets/styles/product.css'

const Products = ({ guardapolvos, table }) => {    
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const currentPage = useSelector(state => state.filter.choosenPage[table.replace(' ', '_')])
    const productsPerPage = 20
    const totalProducts = guardapolvos?.length
    const totalPages = Math.ceil(totalProducts / productsPerPage)

    const onPageChange = (page) => {
        dispatch(setChoosenPage({ page: page, table: table.replace(' ', '_') }))
    }

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return guardapolvos?.slice(startIndex, endIndex);
    }

    return(
        <div className='margin-auto width-90'>
            <ProductsBreadcrumb type={table.replace('_', ' ')} />
            <FiltersBar setIsLoading={setIsLoading} table={table} />
            <HtmlForFilterResuls guardapolvos={guardapolvos} />
            <ScrollToTop />
            {isLoading 
            ? <LoadingScreen /> 
            :   <div>
                    <LoadGuardapolvos guardapolvos={getCurrentProducts()} table={table} />
                    <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            }
        </div>
    )
}

export default Products