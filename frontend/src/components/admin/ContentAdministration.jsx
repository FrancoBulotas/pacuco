
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const ContentAdministration = () => {
    const [config, setConfig] = useState({
        frecuentQuestions: [
          {
            mediosDePago: "",
            cambios: "",
            diseñosPersonalizados: "",
            envios: "",
            cuidado: "",
            calidad: "",
          },
        ],
        aboutUs: {
          first: "",
          second: "",
        },
        featuredProducts: [],
        cuentaDniDiscount: false,
      }
    );
    const configuration = useSelector(state => state.config);

    useEffect(() => {
        if(configuration != null) {    
            setConfig(configuration[0]);
        }
    }, [configuration])

    console.log(config);

    // Handle input changes
    const handleInputChange = (section, key, value) => {
        if (section === "frecuentQuestions") {
        setConfig((prevData) => ({
            ...prevData,
            frecuentQuestions: [
            {
                ...prevData.frecuentQuestions[0],
                [key]: value,
            },
            ],
        }));
        } else if (section === "aboutUs") {
        setConfig((prevData) => ({
            ...prevData,
            aboutUs: {
            ...prevData.aboutUs,
            [key]: value,
            },
        }));
        } else if (section === "cuentaDniDiscount") {
        setConfig((prevData) => ({
            ...prevData,
            cuentaDniDiscount: value,
        }));
        }
    };

    // Save config (mock function)
    const saveConfig = () => {
        console.log("Updated Data:", config);
        alert("Datos guardados exitosamente!");
    };

    return (
        <div className="admin-section">
        {   
            config ?  
            <>
                <h1 className='h1-content-administration'>Editar contenido</h1>

                <div className="section">
                    <h3 className='h3-content-administration'>Preguntas Frecuentes</h3>
                    {Object.keys(config.frecuentQuestions[0]).map((key) => (
                    <div className="input-group" key={key}>
                        <label className='label-content-administration'>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}</label>
                        <textarea
                        className='textarea-content-administration'
                        value={config.frecuentQuestions[0][key]}
                        onChange={(e) => handleInputChange("frecuentQuestions", key, e.target.value)}
                        />
                    </div>
                    ))}
                </div>

                <div className="section">
                    <h3>Sobre Nosotros</h3>
                    {Object.keys(config.aboutUs).map((key) => (
                    <div className="input-group" key={key}>
                        <label className='label-content-administration'>{key.charAt(0).toUpperCase() + key.slice(1) === 'First' ? 'Primer Parrafo' : 'Segundo Parrafo'}</label>
                        <textarea 
                        className='textarea-content-administration'
                        value={config.aboutUs[key]}
                        onChange={(e) => handleInputChange("aboutUs", key, e.target.value)}
                        />
                    </div>
                    ))}
                </div>

                <div className="section">
                    <h3 className='h3-content-administration'>Productos Destacados</h3>
                    <p>No hay configuración disponible para productos destacados.</p>
                </div>

                <div className="section">
                    <h3 className='h3-content-administration'>Descuento Cuenta DNI</h3>
                    <label>
                    <input                
                        type="checkbox"
                        checked={config.cuentaDniDiscount}
                        onChange={(e) => handleInputChange("cuentaDniDiscount", null, e.target.checked)}
                    />
                    Habilitar descuento para Cuenta DNI
                    </label>
                </div>
{/* 
                <button className="btn btn-dark" onClick={saveConfig}>
                    Guardar Cambios
                </button> */}
            </>
            : null
            }
        </div>
    );
    };

export default ContentAdministration;