
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

const Products = ({ products, type = ''}) => {    
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const currentPage = useSelector(state => state.filter.choosenPage)
    const productsPerPage = 20

    const config = useSelector(state => state.config)
    const [subCategoriesData, setSubCategoriesData] = useState(config != null ? Object.values(config[0].categories).flatMap(category => Object.keys(category).map(key => key.toLowerCase())) : null)

    useEffect(() => {
        if(config != null) {
            setSubCategoriesData(Object.values(config[0].categories)
                .flatMap(category => Object.keys(category)).map(key => key.toLowerCase()));
        }
    }, [config])

    const onPageChange = (page) => {
        dispatch(setChoosenPage({ page: page }))
    }

    const getFiltredProds = () => {
        let filtredProds = products?.map((prod) => {
            if(prod.show && subCategoriesData?.includes(prod.type.replace('_', ' ')) && prod.amount !== 0){
                return prod
            }
        }).filter(prod => prod != undefined);

        return filtredProds;
    }

    const getCurrentLength = () => {
        const totalProducts = getFiltredProds().length;
        const totalPages = Math.ceil(totalProducts / productsPerPage);

        return totalPages;
    }
 
    const getCurrentProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        const filtredProds = getFiltredProds();

        return filtredProds.slice(startIndex, endIndex);
    }

    return(
        <div className='margin-auto width-90'>
            <ProductsBreadcrumb type={type.replace('_', ' ')} />
            <FiltersBar setIsLoading={setIsLoading} table={type} />
            <HtmlForFilterResuls products={products} />
            <ScrollToTop />
            {isLoading 
            ? <LoadingScreen /> 
            :   <div>
                    <LoadProducts products={getCurrentProducts()} />
                    <PaginationProducts currentPage={currentPage} totalPages={getCurrentLength()} onPageChange={onPageChange} />
                </div>
            }
        </div>
    )
}

export default Products