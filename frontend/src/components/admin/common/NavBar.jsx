
import '../../../assets/styles/admin/navBar.css'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../reducers/loginReducer'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';


const AdminNavBar = () => { 
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const userLogged = useSelector(state => state.login)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const signOut = () => {
        dispatch(setUser(null))
    }

    const buttonStyle = {height:'100%', borderRadius:'0px', backgroundColor:'#fff'}

    return(
        <div>
            <Button variant="light" onClick={handleShow} style={buttonStyle}>
                <i className="fas fa-bars"></i> 
            </Button>

            <Offcanvas className='sb-sidenav-light' show={show} onHide={handleClose} scroll={true} backdrop={true}>
                <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Principal</div>
                                <Link onClick={handleClose} className="nav-link" to="/administracion">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Menu
                                </Link>
                                <div className="sb-sidenav-menu-heading">Administracion</div>
                                <Link onClick={handleClose} to={'/administracion/productos'} className="nav-link collapsed"data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Productos
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <Link onClick={handleClose} to={'/administracion/mediosDePago'} className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fa fa-credit-card-alt"></i></div>
                                    Medios de pago
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <Link onClick={handleClose} to={'/administracion/contenido'} className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fa fa-edit"></i></div>
                                    Contenido
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="sb-sidenav-menu-heading">Informacion</div>
                                <Link onClick={handleClose} to={'/administracion/historial'} className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Historial de ventas
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer" style={{borderRadius:'6px'}}>
                            <div className="medium">Usuario: {userLogged.username}</div>
                            <button onClick={() => signOut()} className='btn btn-dark'>Cerrar Sesion</button>
                        </div>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default AdminNavBar