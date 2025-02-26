
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChoosenPage } from '../../reducers/filterReducer'

import FiltersBar from '../common/FiltersBar'
import LoadingScreen from '../common/loaders/LoadingScreen'
import ScrollToTop from '../../components/common/ScrollToTop'
import ProductsBreadcrumb from '../common/ProductsBreadcrumb'
import LoadProducts from './LoadProducts'
import PaginationProducts from './common/PaginationProductos'
import HtmlForFilterResuls from './common/HtmlForFilterResult'

import '../../assets/styles/product.css'

const Products = ({ guardapolvos: products, table }) => {    
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const currentPage = useSelector(state => state.filter.choosenPage[table.replace(' ', '_')])
    const productsPerPage = 20
    const totalProducts = products?.length
    const totalPages = Math.ceil(totalProducts / productsPerPage)

    const config = useSelector(state => state.config)
    const [subCategoriesData, setSubCategoriesData] = useState(config != null ? Object.values(config[0].categories).flatMap(category => Object.keys(category).map(key => key.toLowerCase())) : null)

    useEffect(() => {
        if(config != null) {
        setSubCategoriesData(Object.values(config[0].categories)
            .flatMap(category => Object.keys(category)).map(key => key.toLowerCase()));
        }
    }, [config])

    const onPageChange = (page) => {
        dispatch(setChoosenPage({ page: page, table: table.replace(' ', '_') }))
    }

    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        let filtredProds = products?.map((prod) => {
            if(prod.show && subCategoriesData?.includes(prod.type.replace('_', ' '))){
                return prod
            }
        }).filter(prod => prod != undefined)


        return filtredProds.slice(startIndex, endIndex);
    }

    return(
        <div className='margin-auto width-90'>
            <ProductsBreadcrumb type={table.replace('_', ' ')} />
            <FiltersBar setIsLoading={setIsLoading} table={table} />
            <HtmlForFilterResuls guardapolvos={products} />
            <ScrollToTop />
            {isLoading 
            ? <LoadingScreen /> 
            :   <div>
                    <LoadProducts products={getCurrentProducts()} table={table} />
                    <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            }
        </div>
    )
}

export default Products