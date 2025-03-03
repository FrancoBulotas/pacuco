
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const HtmlForFilterResuls = ({ products }) => {
    const previusSearch = useSelector(state => state.filter.previusSearch.toLowerCase()) 

    const [searchParams] = useSearchParams();
    const [params, setParams] = useState({});

    const config = useSelector(state => state.config)
    const [subCategoriesData, setSubCategoriesData] = useState(config != null ? Object.values(config[0].categories).flatMap(category => Object.keys(category).map(key => key.toLowerCase())) : null)

    useEffect(() => {
        if(config != null) {
        setSubCategoriesData(Object.values(config[0].categories)
            .flatMap(category => Object.keys(category)).map(key => key.toLowerCase()));
        }
    }, [config])


    useEffect(() => {
        const params = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        setParams(params);
    }, [searchParams])

    const getLengthProductsToShow = () => {
        let productsToShow = products.filter(prod => prod.show && subCategoriesData?.includes(prod.type.replace('_', ' ')) && prod.amount !== 0);
        return productsToShow.length;
    }

    const styleResults = {color:'#777', marginLeft:'10px'}

    return(
        <div>
            { Object.keys(params).includes('name')
                ? <div style={styleResults}> {getLengthProductsToShow()} resultado{getLengthProductsToShow() === 1 ? '' : 's'} para "{previusSearch}"</div>
                : <div style={styleResults}> {getLengthProductsToShow()} resultado{getLengthProductsToShow() === 1 ? '' : 's'}</div>
            }
        </div>
    )
}

export default HtmlForFilterResuls