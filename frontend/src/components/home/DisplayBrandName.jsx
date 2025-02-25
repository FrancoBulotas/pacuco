

import Carousel from 'react-bootstrap/Carousel'
import { checkIfImagesAreLoaded } from '../common/functions'

import { useEffect, useState } from 'react'

const DisplayBrandName = () => {
    const [imageLogoPacucoSrc, setImageLogoPacucoSrc] = useState('https://pacucostorage.blob.core.windows.net/common/carousel-logo-pacuco.webp');
    const [imageCuentaDniSrc, setImageCuentaDniSrc] = useState('https://pacucostorage.blob.core.windows.net/common/carousel-cuenta-dni.webp');
    const [imageShipmentSrc, setImageShipmentSrc] = useState('https://pacucostorage.blob.core.windows.net/common/carousel-shipment.webp');

    // const updateImageSrc = () => {
    //   if (window.innerWidth < 500) {
    //     setImageLogoPacucoSrc('https://pacucostorage.blob.core.windows.net/common/fondo-logo-home-page-desktop.webp');        
    //     // setImageCuentaDniSrc('https://pacucostorage.blob.core.windows.net/common/flyer-cuenta-dni-mobile.png');
    //   } else if (window.innerWidth > 1150){
    //     // setImageLogoPacucoSrc('https://pacucostorage.blob.core.windows.net/common/fondo-home-logo-pacuco-desktop-big.png');

    //   } else {
    //     setImageLogoPacucoSrc('https://pacucostorage.blob.core.windows.net/common/fondo-logo-home-page-desktop.webp');        

    //     // setImageCuentaDniSrc('https://pacucostorage.blob.core.windows.net/common/flyer-cuenta-dni.png');
    //   }
    // };
  
    // useEffect(() => {
    //   updateImageSrc(); // Set the initial image
    //   window.addEventListener('resize', updateImageSrc); // Update on resize
  
    //   // Cleanup the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('resize', updateImageSrc);
    //   };
    // }, []);
    
    useEffect(() => {
        const blurDivs = document.querySelectorAll('.blur-load')
        checkIfImagesAreLoaded(blurDivs)
    }, [])

    return (
       <div className='carousel-container'>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <div className='blur-load' style={{backgroundImage:'url(https://pacucostorage.blob.core.windows.net/common/fondo-logo-home-page-small.png)'}}>
                        <img width={1080} height={653} fetchpriority="high" rel="preload" as="image" src={imageLogoPacucoSrc} loading='lazy' alt='Desde nuestra tienda en Wilde, Buenos Aires… Proveemos de Guardapolvos a Maestras de Nivel Inicial, Maestras De Escuelas Primarias, 
                            Maestras Especiales y a fines, para que luzcan Bellas con la última tendencia en uniformidades laborales.
                            Además, desde hace más de 10 años disponemos de un servicio  personalizado, con un amplio surtido de tejidos donde juntas diseñamos el Pacuco como más te guste, 
                            brindando una respuesta  a tus ideas para tus uniformes laborales.' />
                    </div>
                    <Carousel.Caption className='carousel-caption-logo'>                        
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={6000}>
                    <div className='blur-load' style={{backgroundImage:'url(https://pacucostorage.blob.core.windows.net/common/fondo-logo-home-page-small.png)'}}>
                        <img width={1080} height={653} fetchpriority="high" rel="preload" as="image" alt='20% de descuento de lunes a viernes pagando con cuenta DNI. Tope de reintegro $6000.' src={imageCuentaDniSrc} />
                    </div>                       
                </Carousel.Item> */}
                <Carousel.Item interval={6000}>
                    <div className='blur-load' style={{backgroundImage:'url(https://pacucostorage.blob.core.windows.net/common/fondo-logo-home-page-small.png)'}}>
                        <img width={1080} height={653} fetchpriority="high" rel="preload" as="image" alt='ENVIOS A TODO EL PAIS! Con correo argentino, a sucursal o domicilio.' src={imageShipmentSrc} />
                    </div>                       
                </Carousel.Item>
            </Carousel>
       </div>

    )
}

export default DisplayBrandName