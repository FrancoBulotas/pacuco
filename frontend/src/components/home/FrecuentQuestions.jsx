
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import '../../assets/styles/home/frecuentQuestions.scss';

const FrecuentQuestions = () => {

    const [frecuentQuestions, setFrecuentQuestions] = useState({
        frecuentQuestions:{
            mediosDePago: "",
            cambios: "",
            diseñosPersonalizados: "",
            envios: "",
            cuidado: "",
            calidad: ""
        }
    })
    const config = useSelector(state => state.config);

    useEffect(() => {
        if(config != null) {    
            setFrecuentQuestions(config[0].frecuentQuestions[0]);
        }
    }, [config])
    
    return (
        <div className="faq-section-wrapper">
            <div className="faq-container">
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-wallet2"></i>
                </div>
                <h3 className="faq-title">Medios de pago</h3>
                <p className="faq-text">{frecuentQuestions.mediosDePago}</p>
                </div>
                
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-arrow-repeat"></i>
                </div>
                <h3 className="faq-title">Cambios</h3>
                <p className="faq-text">{frecuentQuestions.cambios}</p>
                </div>
                
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-puzzle"></i>
                </div>
                <h3 className="faq-title">Diseños Personalizados</h3>
                <p className="faq-text">{frecuentQuestions.diseñosPersonalizados}</p>
                </div>
                
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-truck"></i>
                </div>
                <h3 className="faq-title">Envíos</h3>
                <p className="faq-text">{frecuentQuestions.envios}</p>
                </div>
                
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-exclamation-circle"></i>
                </div>
                <h3 className="faq-title">CUIDADO DEL PACUCO</h3>
                <p className="faq-text">{frecuentQuestions.cuidado}</p>
                </div>
                
                <div className="faq-item">
                <div className="faq-icon-wrapper">
                    <i className="bi bi-star"></i>
                </div>
                <h3 className="faq-title">Calidad</h3>
                <p className="faq-text">{frecuentQuestions.calidad}</p>
                </div>
            </div>
            </div>
        // <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
        //     <div className='container-frecuent-questions' >
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-wallet2 icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>Medios de pago</p>
        //             <p>{frecuentQuestions.mediosDePago}</p>
        //         </div>
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-arrow-repeat icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>Cambios</p>
        //             <p>{frecuentQuestions.cambios}</p>
        //         </div>
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-puzzle icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>Diseños Personalizados</p>
        //             <p>{frecuentQuestions.diseñosPersonalizados}</p>
        //         </div>
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-truck icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>Envíos</p>
        //             <p>{frecuentQuestions.envios}</p>
        //         </div>
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-exclamation-circle icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>CUIDADO DEL PACUCO</p>
        //             <p>{frecuentQuestions.cuidado}</p>
        //         </div>
        //         <div className='child-container-frecuent-questions'>
        //             <i className="bi bi-star icon-frecuent-questions"></i>
        //             <p className='p-title-frecuent-questions'>Calidad</p>
        //             <p>{frecuentQuestions.calidad}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default FrecuentQuestions