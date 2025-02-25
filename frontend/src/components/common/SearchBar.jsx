
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IconSearch } from '../../assets/icons/icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { filterChange } from '../../reducers/filterReducer'

const SearchBar = ({ displaySearch, filtrateSearch }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const filter = useSelector(state => state.filter.search.toLowerCase()) 

    useEffect(() => {
        if(location.pathname.replace('/', '') === 'busqueda'){
            filtrateSearch()
        }
    }, [])

    const handleChange = (event) => {
        const input = event.target.value
        if(input.startsWith(' ')) return

        dispatch(filterChange(input))
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            displaySearch()
        }
    }

    return (
        <div className='d-flex align-items-center'>
            <Form className="d-flex" fixed='right' style={{ width:'100%' }}>
                <Form.Control
                    type="search"
                    placeholder="Que estas buscando?"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    value={filter}
                    onKeyPress={handleKeyPress}
                    style={{height:'30px', marginLeft:'10px', boxShadow:'none'}}
                    />
            </Form>
            <Button onClick={() => displaySearch()} variant="outline-none" style={{ marginRight:'10px'}}>
                <IconSearch />
            </Button>
        </div>
    )
}

export default SearchBar