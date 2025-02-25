
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
        <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
            <div className='container-frecuent-questions' >
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-wallet2 icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>Medios de pago</p>
                    {/* <p>Los medios de pago que utilizamos son: Mercado Pago, transferencia bancaria y Cuenta DNI.</p> */}
                    <p>{frecuentQuestions.mediosDePago}</p>
                </div>
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-arrow-repeat icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>Cambios</p>
                    {/* <p>⭐ Podés solicitar el cambio por otro producto dentro de los 15 días de la compra. Los gastos de envío corren por cuenta del comprador.</p> */}
                    <p>{frecuentQuestions.cambios}</p>
                </div>
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-puzzle icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>Diseños Personalizados</p>
                    {/* <p> PODES DISEÑAR TU GUARDAPOLVO COMO MAS TE GUSTE!! Vos elegís la base, los detalles y los vivos!!! 🙌🏼 Y si buscas una imágen  exclusiva para tu bolsillo hablanos por 
                        privado y lo diseñamos juntas! 
                    </p> */}
                    <p>{frecuentQuestions.diseñosPersonalizados}</p>
                </div>
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-truck icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>Envíos</p>
                    {/* <p>⭐ Los envíos se realizan  mediante Correo Argentino o retiro a domicilio. Diseños personalizados: demoran entre 20  o 30 días en confeccionarse.  Stock: Entrega inmediata. Una vez despachado demoran entre 3 y 10 días en llegar a tu domicilio o sucursal. 💌📮  </p> */}
                    <p>{frecuentQuestions.envios}</p>
                </div>
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-exclamation-circle icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>CUIDADO DEL PACUCO</p>
                    {/* <p>Te recomendamos siempre lavar nuestros productos con agua fría, puede ser a mano o en el lavarropa automático. Nunca centrifugar!! Planchar con temperatura baja.</p> */}
                    <p>{frecuentQuestions.cuidado}</p>
                </div>
                <div className='child-container-frecuent-questions'>
                    <i className="bi bi-star icon-frecuent-questions"></i>
                    <p className='p-title-frecuent-questions'>Calidad</p>
                    {/* <p> ⭐Trabajamos Únicamente con telas de INTA Industria Textil Argentina / ARCIEL. Lo que garantiza una Excelente calidad del producto y un Guardapolvo para muchos 
                        años de uso.!! 
                        DATO: 😱 Todos los guardapolvos ( Excepto el Cloe)  llevan un bolsillo secreto interno de seguridad con un cierre de 14 cm. ideal para guardar 
                        pertenencias de valor.  
                    </p> */}
                    <p>{frecuentQuestions.calidad}</p>
                </div>
            </div>
        </div>
        // <Accordion className='accordion-container' style={{display:'flex', justifyContent:'center', padding:'30px', width:'100%', paddingBottom:'60px'}}>
        //     <div style={accordionStyle} className="accordion-wrapper">
        //         <h4 style={{display:'flex', justifyContent:'center', marginBottom:'20px', fontSize:'30px', fontWeight:'600'}}>PREGUNTAS FRECUENTES</h4>
        //         <Accordion.Item eventKey="0" className="accordion-item">
        //             <Accordion.Header className="accordion-header">¿Cuales son los medios de pago?</Accordion.Header>
        //             <Accordion.Body className="accordion-body">
        //                 Los medios de pago que utilizamos son: Mercado Pago, transferencia bancaria y Cuenta DNI.
        //             </Accordion.Body>
        //         </Accordion.Item>
        //         <Accordion.Item eventKey="1" className="accordion-item">
        //             <Accordion.Header className="accordion-header">¿Cuanto demora un Pacuco que no se encuentra en Stock?</Accordion.Header>
        //             <Accordion.Body  className="accordion-body">
        //                 Una vez encargado, la confección demora 30 días. El tiempo de envio es aparte del tiempo de confección.
        //             </Accordion.Body>
        //         </Accordion.Item>
        //     </div>
        // </Accordion>
    )
}

export default FrecuentQuestions