
import { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IconSearch, IconReload } from '../../../assets/icons/icons'

import debounce from 'just-debounce-it'
import { orderByDate } from '../../common/functions'

import { filterChange } from '../../../reducers/filterReducer'
import purchasedProductsService from '../../../services/purchasedProduct'

const PurchaseFilterBar = ({ purchasedProducts, setPurchasedProducts, everyProductsRef, onPageChange }) => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.search.toLowerCase()) 
    const [search, setSearch] = useState('')

    // const [prods, setprods] = useState([])

    // useEffect(() => {
    //     const fetchPurchasedProducts = async () => {
    //         setprods(await purchasedProductsService.getAll())
    //     }
    //     fetchPurchasedProducts()
    // }, [])

    // const debounceFilter = useCallback(
    //     debounce(input => {
    //         if(input !== '') {
    //             // estos console log estan porque sino no aparece la busqueda (creo que es porque demora lo suficiente para que se termine la busqueda real, nose pero funciona)
    //             console.log(prods)
    //             console.log(prods.filter(item => item.operationCode.toLowerCase().includes(input.toLowerCase())
    //                                                         || item.clientData.fullName.toLowerCase().includes(input.toLowerCase())
    //                                                         || item.time.toLowerCase().includes(input.toLowerCase())))

    //             setPurchasedProducts(prods.filter(item => item.operationCode.toLowerCase().includes(input.toLowerCase())
    //                                                               || item.clientData.fullName.toLowerCase().includes(input.toLowerCase())
    //                                                               || item.time.toLowerCase().includes(input.toLowerCase()))) 
    //             onPageChange(1)
    //         }
    //         else {
    //             resetProducts()
    //         }
    //     }, 400)
    //   , [])

    const handleChange = (e) => {
        const newInput = e.target.value
        if(newInput.startsWith(' ')) return
        
        setSearch(newInput)
        dispatch(filterChange(newInput))
        // debounceFilter(newInput)
    }

    const displaySearch = async () => {
        if(filter !== '') {
            setPurchasedProducts(everyProductsRef.filter(item => item.operationCode.toLowerCase().includes(filter.toLowerCase())
                                                              || item.clientData.fullName.toLowerCase().includes(filter.toLowerCase())
                                                              || item.time.toLowerCase().includes(filter.toLowerCase()))) 
            onPageChange(1)
        }
        else {
            resetProducts()
        }
    }

    const resetProducts = async () => {
        setSearch('')
        setPurchasedProducts(orderByDate(await purchasedProductsService.getAll(), true))
    }

    return(
        <Form className="d-flex" fixed='right' style={{ marginLeft: 'auto', flexDirection:'column' }}>
            <div className="d-flex" style={{}}>
                <Form.Control
                    type="search"
                    placeholder="buscar por codigo, cliente, fecha..."
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    value={search}
                />
                <Button onClick={() => displaySearch()} variant="outline-secondary" style={{padding:'0px 10px 5px 10px'}}>
                    <IconSearch />
                </Button>
                <Button onClick={() => resetProducts()} variant="outline-secondary" style={{padding:'0px 10px 5px 10px'}}>
                    <IconReload width={'18px'} height={'18px'} />
                </Button>
                
            </div>
            <label style={{fontSize:'14px', padding:'3px'}}>{purchasedProducts?.length} resultados de {everyProductsRef.length}</label>
        </Form>
    )
}

export default PurchaseFilterBar
