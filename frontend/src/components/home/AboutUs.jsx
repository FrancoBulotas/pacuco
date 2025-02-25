
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
        <section className="section-sobre-nosotros-index" id="sobre-nosotros" data-aos="fade-down">	
            <div className="container-sobre-nosotros">
                <h4 className="h3-sobre-nosotros">SOBRE NOSOTRAS</h4>
                <div className="container-flexible">
                    <div className="container-flexible-texto">
                        {/* <p className='p-sobre-nosotros'>Desde nuestra tienda en Wilde, Buenos Aires… Proveemos de Guardapolvos a Maestras de Nivel Inicial, Maestras De Escuelas Primarias, 
                            Maestras Especiales y a fines, para que luzcan Bellas con la última tendencia en uniformidades laborales.
                            Además, desde hace más de 10 años disponemos de un servicio  personalizado, con un amplio surtido de tejidos donde juntas diseñamos el Pacuco como más te guste, 
                            brindando una respuesta  a tus ideas para tus uniformes laborales.</p>
                        <p className="p-sobre-nosotros">Ahora... Queremos que nos conozcan y que sepan quienes estamos día a día detrás de escena, diseñando, cortando, realizando la moldería, 
                            preparando el packaging,  muchas veces entregando y todo todo con mucho Amor y dedicación! ♥️💓</p> */}
                        <p className='p-sobre-nosotros'>{aboutUs.first}</p>
                        <p className="p-sobre-nosotros">{aboutUs.second}</p>
                        <p className="p-sobre-nosotros">Por orden de llegada al emprendimiento Familiar…   💖💗 Somos  
                            <a href="https://www.instagram.com/adry.francisco/?hl=es-la" target="_blank" className="a-sobre-nosotros"> @adryfrancisco</a> Profesora de Educación Física, 
                            mamá de 3 Bellos hijos, amante del Yoga y Creadora de Pacuco guardapolvos 💞🙌🥼 yy.. 
                            <a href="https://www.instagram.com/aldiparodi/?hl=es-la" target="_blank" className="a-sobre-nosotros">@aldiparodi</a> Docente de nivel inicial. 💖💗 </p>
                        <p className='p-sobre-nosotros'><a href="https://www.instagram.com/valenBulotas/?hl=es-la" target="_blank" className="a-sobre-nosotros">@valenBulotas</a>  Estudiante de Arquitectura y Amante del Gym💖💗  <a href="https://www.instagram.com/tiziBulo_/?hl=es-la" target="_blank" className="a-sobre-nosotros">@tiziBulo_</a>  Estudiante de Educación Física y Atleta de Alto rendimiento. 💖💗
                            <a href="https://www.instagram.com/franbulotas/?hl=es-la" target="_blank" className="a-sobre-nosotros">@franbulotas</a> … Estudiante de la Tecnicatura en Programación y Atleta de Alto rendimiento. Quien desarrolló la página Web.💖💗</p>
                        {/* <p className="p-sobre-nosotros">Queremos agradecerles por acompañarnos en este año diferente, difícil, pero Bello a la vez!!</p>
                        <p className="p-sobre-nosotros">Ahora... queremos que nos conozcan y que sepan quienes estamos día a día detrás de escena, diseñando, cortando, preparando el packaging, muchas veces entregando y todo todo con mucho Amor y dedicación! ♥️💓</p>
                        <p className="p-sobre-nosotros">Somos <a href="https://www.instagram.com/adry.francisco/?hl=es-la" target="_blank" className="a-sobre-nosotros">@adryfrancisco</a> Profesora de Educación Física, mamá de 3 Bellos hijos, amante del Yoga y Creadora de Pacuco guardapolvos 💞🙌🥼 yy.. <a href="https://www.instagram.com/aldiparodi/?hl=es-la" target="_blank" className="a-sobre-nosotros">@aldiparodi</a> Docente de Nivel inicial, estudiante de Psicopedagogía. Ambas Tía y Sobrina💖💗</p> */}
                    </div>
                    <div className="container-flexible-img">
                        <img src="https://pacucostorage.blob.core.windows.net/common/logo-pacuco-ok-min.webp" alt="Logo pacuco guardapolvos" className="section-img-flexible"></img>
                    </div>
                </div>	
            </div>
        </section>
    )
}

export default AboutUs