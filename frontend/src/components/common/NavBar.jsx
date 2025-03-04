
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AdminNavBar from '../admin/common/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from '../cart/Cart';

import SearchBar from './SearchBar';
import { setFiltredGuardapolvos, setStaticFiltredGuardapolvos } from '../../reducers/guardapolvosReducer'
import { filterChange, setPreviusSearch } from '../../reducers/filterReducer'
import searchProdsService from '../../services/searchProds.js'
import LoadingScreen from './loaders/LoadingScreen.jsx';

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const NavBar = () => {
    // const query = useQuery();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const filter = useSelector(state => state.filter.search.toLowerCase()) 
    const [openNav, setOpenNav] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleToggleNav = () => setOpenNav(!openNav)

    const filtrateSearch = async ()=> {
        if(filter !== '') {
            // const allGuardapolvos = await guardapolvosService.getAll()
            // const filtred = allGuardapolvos.filter(guardapolvo => guardapolvosFilter(filter, guardapolvo))
            const params = { name: filter }
            const queryParams = new URLSearchParams(params).toString();
            const filtred = await searchProdsService.getSearch(params);

            dispatch(setFiltredGuardapolvos(filtred))
            dispatch(setStaticFiltredGuardapolvos(filtred))
            navigate(`/products?${queryParams}`);
            // navigate('/busqueda')
        }
    }

    const displaySearch = () => {
        setIsLoading(true)
        
        filtrateSearch()
        dispatch(setPreviusSearch(filter))
        dispatch(filterChange(''))

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    const navigateTo = (path) => {
        setIsLoading(true)

        navigate(path)

        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }

    const handleClick = (query) => {
        handleToggleNav();
        navigateTo(`/products?${query}`);
    }

    return (
        <div>
            { isLoading 
            ? <LoadingScreen />
            : <Navbar expand="lg" fixed='top' className='nav-bar-drop'>
                <Container>                  
                    <div className="d-lg-none me-2 ml-5">
                        <Cart />
                    </div>

                    <Navbar.Brand href='/'>PACUCO</Navbar.Brand>
                    {/* para el sidebar del menu admin */}
                    { location.pathname.includes('/administracion')
                        ? <AdminNavBar />
                        : <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleNav} />
                            <Navbar.Collapse in={openNav} id="basic-navbar-nav" style={{zIndex:'55'}} >
                                <Nav className="my-2 my-lg-0">
                                    <div className="d-none d-lg-block">
                                        <SearchBar displaySearch={displaySearch} filtrateSearch={filtrateSearch} />
                                    </div>
                                    <Nav.Link onClick={() => navigateTo('/')}>INICIO</Nav.Link>
                                    {/* <Nav.Link href="/">SOBRE NOSOTRAS</Nav.Link> */}
                                    <NavDropdown title="GUARDAPOLVOS" id="basic-nav-dropdown"className='drop-down-menu-custom'>
                                        <NavDropdown.Item onClick={() => handleClick('type=nivel_inicial')}>Nivel Inicial</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleClick('type=primaria')}>Primaria / Color</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleClick('type=stock')}>Stock / Entrega inmediata</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleClick('category=guardapolvo')}>Ver todos los guardapolvos</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="ACCESORIOS" id="basic-nav-dropdown"className='drop-down-menu-custom'>
                                        <NavDropdown.Item onClick={() => handleClick('type=totebag')}>Totebags</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleClick('category=accesorios')}>Ver todos los accesorios</NavDropdown.Item>
                                    </NavDropdown>

                                    <div className="d-none d-lg-block" style={{marginLeft:'5px'}}>
                                        <Cart />
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    }
                    
                </Container>
                <div className="d-lg-none" style={{backgroundColor:'#fff', padding:'4px', zIndex:'50', borderBottom:'1px solid #f1f1f1'}}>
                    <SearchBar displaySearch={displaySearch} filtrateSearch={filtrateSearch} />
                </div>
            </Navbar>  
        }
        </div>    
    )
}

export default NavBar