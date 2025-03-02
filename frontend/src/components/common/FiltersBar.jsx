
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

const FiltersBar = ({ setIsLoading, table, isAdmin, searchParamsAdmin, setSearchParamsAdmin, setCurrentPageAdmin }) => {
    const [searchParams, setSearchParams] = useState({})
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setSearchParams(params);

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

    const resetAdminProducts = (key) => {
        setSearchParamsAdmin({...searchParamsAdmin, [key]:null});
    }

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
        // para cuando no haya filtros que se busquen todos los prods
        const allNull = Object.values(filtersUpdated).every(value => value === null);
        if(allNull){
            url.searchParams.append('category', '');
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

    const handleClick = (key, value) => {
        if(isAdmin) {
            handleClose();
            setCurrentPageAdmin(1);
            setSearchParamsAdmin({...searchParamsAdmin, [key]: value});
        } else {
            navigate(updateQueryParamsOrderButton(key, value))
        }
    }

    return (
        <div>
            <div style={{display:'flex', height:'40px', marginLeft:'10px', marginRight:'10px', marginBottom:'5px', paddingTop:'5px'}}>
                <Dropdown as={ButtonGroup} className="dropdown-custom">
                    <Button variant="light" style={{backgroundColor:'#fff', color:'#000', padding:'5px 25px', fontSize:'16px', border:'1px solid #f1f1f1'}}>Ordenar</Button>

                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" style={{backgroundColor:'#fff', color:'#000', padding:'5px 25px', border:'1px solid #f1f1f1'}} />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClick('sortByPrice', 'asc')}>Precio menor a mayor</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClick('sortByPrice', 'desc')}>Precio mayor a menor</Dropdown.Item>
                        {/* <Dropdown.Item onClick={() => navigate(updateQueryParamsOrderButton('sortByName', 'asc'))}>Nombre</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                
                <Button onClick={handleShow} variant="light" style={{marginLeft:'auto', backgroundColor:'#fff', color:'#000', padding:'5px 25px', fontSize:'16px', border:'1px solid #f1f1f1'}}>
                    Filtrar <i className="bi bi-filter" style={{padding:'5px 5px'}}></i>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <OffCanvasBody updateQueryParams={updateQueryParamsFiltrerButton} isAdmin={isAdmin} table={table} 
                        handleClose={handleClose} searchParams={searchParamsAdmin} setSearchParams={setSearchParamsAdmin} 
                        setCurrentPage={setCurrentPageAdmin} />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <FiltersButton resetProducts={resetProducts} resetAdminProducts={resetAdminProducts} filters={filters} searchParamsAdmin={searchParamsAdmin} />
        </div>
    )
}

export default FiltersBar
