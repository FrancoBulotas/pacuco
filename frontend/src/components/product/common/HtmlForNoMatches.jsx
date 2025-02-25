
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const HtmlForNoMatches = () => {
    const location = useLocation()
    const previusSearch = useSelector(state => state.filter.previusSearch.toLowerCase()) 

    const containerStyle = {margin:'200px 0px'}

    const textForNoResultsSearch = `no hay resultados para "${previusSearch}"`
    const textForNoResultGeneral = `no hay resultados que cumplan con tu busqueda...`

    return(
        <div style={containerStyle}>
            { location.pathname.replace('/', '') === 'busqueda'
            ? textForNoResultsSearch
            : textForNoResultGeneral
            }
        </div> 
    )
}

export default HtmlForNoMatches