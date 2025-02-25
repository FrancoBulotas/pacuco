
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffCanvasBody from './Filters/OffCanvasBody'
import FiltersButton from './Filters/FiltersButton'
import { setChoosenPage } from '../../reducers/filterReducer'

const FiltersBar = ({ setIsLoading, table }) => {
    const [searchParams, setSearchParams] = useState({})
    const [isCustom, setIsCustom] = useState(false)
    const [isAccesory, setIsAccesory] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();   
    const timeToLoad = 1000;
    const [show, setShow] = useState(false)
    const [filters, setFilters] = useState({
        size: null,
        table: null,
        sortByPrice: null,
        name: null,
    })

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true);
        checkIsCustom();
        checkIsAccesory();
    }
     
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setSearchParams(params);

        // no pueden estar simultaneamente la query all con table
        // if(url.searchParams.get('all') && url.searchParams.get('table')) {
        //     url.searchParams.delete('all');
        //     window.location.href = url.toString();        
        // }
        // no pueden estar simultaneamente category=guardapolvo con type!=nivel_inicial, primaria o stock
        // if(url.searchParams.get('category') === 'guardapolvo' && url.searchParams.get('type') === 'totebag') {
        //     url.searchParams.delete('category');
        //     window.location.href = url.toString();        
        // }
        // no pueden estar la query size cuando table es == primaria || == nivel_inicial
        if(url.searchParams.get('size') && (url.searchParams.get('type') == 'primaria' || url.searchParams.get('type') == 'nivel_incial')) {
            url.searchParams.delete('size');
            window.location.href = url.toString();        
        }

        // if(url.searchParams.get('size')){
            setFilters((prevFilters) => ({ 
                ...prevFilters, 
                size: url.searchParams.get('size'), 
                type: url.searchParams.get('type'), 
                sortByPrice: url.searchParams.get('sortByPrice'), 
                name: url.searchParams.get('name'), 
                category: url.searchParams.get('category'), 
            }));
        // }
    }, [location.search])

    const resetProducts = (choice) => {
        handleClose();
        dispatch(setChoosenPage({ page: 1, table: table }))

        // Eliminar el parámetro 'size'
        if(choice == 'size'){
            setFilters((prevFilters) => ({ ...prevFilters, size: null}));
            url.searchParams.delete('size');
        }
        if(choice == 'type'){
            setFilters((prevFilters) => ({ ...prevFilters, size: null}));
            url.searchParams.delete('type');
            // url.searchParams.append('category', 'guardapolvo');
        }
        if(choice == 'sortByPrice'){
            setFilters((prevFilters) => ({ ...prevFilters, sortByPrice: null}));
            url.searchParams.delete('sortByPrice');
        }
        if(choice == 'name'){
            setFilters((prevFilters) => ({ ...prevFilters, name: null}));
            url.searchParams.delete('name');
        }
        if(choice == 'category'){
            setFilters((prevFilters) => ({ ...prevFilters, category: null}));
            url.searchParams.delete('category');
        }

        let filtersUpdated = filters;
        filtersUpdated[choice] = null;
        // para cuando no haya filtros que se busquen todos los guardapolvos
        const allNull = Object.values(filtersUpdated).every(value => value === null);
        if(allNull){
            url.searchParams.append('category', 'guardapolvo');
        }
        window.location.href = url.toString();  
    }

    const updateQueryParamsOrderButton = (key, value) => {
        searchParams.set(key, value);
        return `${location.pathname}?${searchParams.toString()}`;
    };

    const updateQueryParamsFiltrerButton = (key, value) => {
        handleClose();
        setIsLoading(true);

        dispatch(setChoosenPage({ page: 1, table: table.replace(' ', '_') }))

        searchParams.set(key, value);

        setTimeout(async() => {
            setIsLoading(false)
        }, timeToLoad);

        return `${location.pathname}?${searchParams.toString()}`;
    };

    const checkIsCustom = () =>{
        if(searchParams){
            if(searchParams.get('type') === 'stock') setIsCustom(true)
            else setIsCustom(false)
        }
    }

    const checkIsAccesory = () =>{
        if(searchParams){
            if(searchParams.get('type') === 'totebag') setIsAccesory(true)
            else setIsAccesory(false)
        }
    }

    return (
        <div>
            <div style={{display:'flex', height:'40px', marginLeft:'10px', marginRight:'10px', marginBottom:'5px', paddingTop:'5px'}}>
                <Dropdown as={ButtonGroup} className="dropdown-custom">
                    <Button variant="light" style={{backgroundColor:'#fff', color:'#000', padding:'5px 25px', fontSize:'16px'}}>Ordenar</Button>

                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" style={{backgroundColor:'#fff', color:'#000', padding:'5px 25px'}} />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate(updateQueryParamsOrderButton('sortByPrice', 'asc'))}>Precio menor a mayor</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate(updateQueryParamsOrderButton('sortByPrice', 'desc'))}>Precio mayor a menor</Dropdown.Item>
                        {/* <Dropdown.Item onClick={() => navigate(updateQueryParamsOrderButton('sortByName', 'asc'))}>Nombre</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                
                <Button onClick={handleShow} variant="light" style={{marginLeft:'auto', backgroundColor:'#fff', color:'#000', padding:'5px 25px', fontSize:'16px'}}>
                    Filtrar <i className="bi bi-filter" style={{padding:'5px 5px'}}></i>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <OffCanvasBody updateQueryParams={updateQueryParamsFiltrerButton} isCustom={isCustom} isAccesory={isAccesory} />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            {
                // si son todos null devuelve true y no entra
                !Object.values(filters).every(value => value === null)
                ? 
                <FiltersButton resetProducts={resetProducts} filters={filters} />
                : null
            } 
        </div>
    )
}

export default FiltersBar
