
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import '../../assets/styles/home/aboutUs.css'

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState({
        aboutUs:{
            first:'',
            second:''
        }
    })
    const config = useSelector(state => state.config);

    useEffect(() => {
        if(config != null) setAboutUs(config[0].aboutUs);
    }, [config])

    return(
        <section className="about-us-section" id="sobre-nosotros" data-aos="fade-down">
            <div className="about-us-container">
                <div className="about-us-header">
                <h2 className="about-us-title">SOBRE NOSOTRAS</h2>
                <div className="about-us-divider"></div>
                </div>
                
                <div className="about-us-content">
                <div className="about-us-text">
                    <p className="about-us-paragraph">{aboutUs.first}</p>
                    <p className="about-us-paragraph">{aboutUs.second}</p>
                    <p className="about-us-paragraph">
                    Por orden de llegada al emprendimiento Familiar…   💖💗 Somos  
                    <a href="https://www.instagram.com/adry.francisco/?hl=es-la" target="_blank" className="about-us-link"> @adryfrancisco</a> Profesora de Educación Física,
                    mamá de 3 Bellos hijos, amante del Yoga y Creadora de Pacuco guardapolvos 💞🙌🥼 yy..
                    <a href="https://www.instagram.com/aldiparodi/?hl=es-la" target="_blank" className="about-us-link">@aldiparodi</a> Docente de nivel inicial. 💖💗 
                    </p>
                    <p className="about-us-paragraph">
                    <a href="https://www.instagram.com/valenBulotas/?hl=es-la" target="_blank" className="about-us-link">@valenBulotas</a>  Estudiante de Arquitectura y Amante del Gym💖💗  
                    <a href="https://www.instagram.com/tiziBulo_/?hl=es-la" target="_blank" className="about-us-link">@tiziBulo_</a>  Estudiante de Educación Física y Atleta de Alto rendimiento. 💖💗
                    <a href="https://www.instagram.com/franbulotas/?hl=es-la" target="_blank" className="about-us-link">@franbulotas</a> … Estudiante de la Tecnicatura en Programación y Atleta de Alto rendimiento. Quien desarrolló la página Web.💖💗
                    </p>
                </div>
                
                <div className="about-us-image">
                    <div className="image-frame">
                    <img 
                        src="https://pacucostorage.blob.core.windows.net/common/logo-pacuco-ok-min.webp" 
                        alt="Logo pacuco guardapolvos" 
                        className="about-us-img"
                    />
                    </div>
                </div>
                </div>
            </div>
            </section>
        // <section className="section-sobre-nosotros-index" id="sobre-nosotros" data-aos="fade-down">	
        //     <div className="container-sobre-nosotros">
        //         <h4 className="h3-sobre-nosotros">SOBRE NOSOTRAS</h4>
        //         <div className="container-flexible">
        //             <div className="container-flexible-texto">    
        //                 <p className='p-sobre-nosotros'>{aboutUs.first}</p>
        //                 <p className="p-sobre-nosotros">{aboutUs.second}</p>
        //                 <p className="p-sobre-nosotros">Por orden de llegada al emprendimiento Familiar…   💖💗 Somos  
        //                     <a href="https://www.instagram.com/adry.francisco/?hl=es-la" target="_blank" className="a-sobre-nosotros"> @adryfrancisco</a> Profesora de Educación Física, 
        //                     mamá de 3 Bellos hijos, amante del Yoga y Creadora de Pacuco guardapolvos 💞🙌🥼 yy.. 
        //                     <a href="https://www.instagram.com/aldiparodi/?hl=es-la" target="_blank" className="a-sobre-nosotros">@aldiparodi</a> Docente de nivel inicial. 💖💗 </p>
        //                 <p className='p-sobre-nosotros'><a href="https://www.instagram.com/valenBulotas/?hl=es-la" target="_blank" className="a-sobre-nosotros">@valenBulotas</a>  Estudiante de Arquitectura y Amante del Gym💖💗  <a href="https://www.instagram.com/tiziBulo_/?hl=es-la" target="_blank" className="a-sobre-nosotros">@tiziBulo_</a>  Estudiante de Educación Física y Atleta de Alto rendimiento. 💖💗
        //                     <a href="https://www.instagram.com/franbulotas/?hl=es-la" target="_blank" className="a-sobre-nosotros">@franbulotas</a> … Estudiante de la Tecnicatura en Programación y Atleta de Alto rendimiento. Quien desarrolló la página Web.💖💗</p>
        //             </div>
        //             <div className="container-flexible-img">
        //                 <img src="https://pacucostorage.blob.core.windows.net/common/logo-pacuco-ok-min.webp" alt="Logo pacuco guardapolvos" className="section-img-flexible"></img>
        //             </div>
        //         </div>	
        //     </div>
        // </section>
    )
}

export default AboutUs