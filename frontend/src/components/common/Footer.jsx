
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
        <div className='me-5 d-none d-lg-block'>
          <span>Redes sociales:</span>
        </div>
        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a> */}
          <a href='https://www.instagram.com/pacuco_guardapolvos/?hl=es' className='me-4 text-reset' style={{textDecoration:'none'}}>
            <MDBIcon color='secondary' fab icon='instagram' /> pacuco_guardapolvos 
          </a>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a onClick={() => navigate('/products?type=nivel_inicial')} style={{cursor:'pointer'}} className='text-reset'>
                  Nivel Inicial
                </a>
              </p>
              <p>
                <a onClick={() => navigate('/products?type=primaria')} style={{cursor:'pointer'}} className='text-reset'>
                  Primaria
                </a>
              </p>
              <p>
                <a onClick={() => navigate('/products?type=stock')} style={{cursor:'pointer'}} className='text-reset'>
                  Stock
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>navegación</h6>
              <p>
                <a onClick={() => navigate('/')} style={{cursor:'pointer'}} className='text-reset'>
                  Inicio
                </a>
              </p>
              {/* <p>
                <a onClick={() => navigate('/products?category=todos')} style={{cursor:'pointer'}} className='text-reset'>
                  Productos
                </a>
              </p> */}
              <p>
                <Link to="/" onClick={() => scrollToSection('#sobre-nosotros')} className='text-reset'>
                  Sobre Nosotras
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                compras@pacuco.com.ar
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Adry: +54 9 1163601162
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Aldi: +54 9 1169401968
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}

function scrollToSection(id) {
  setTimeout(() => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 350);
}

export default Footer