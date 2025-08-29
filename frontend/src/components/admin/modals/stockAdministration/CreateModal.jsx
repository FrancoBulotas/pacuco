
import { useSelector, useDispatch } from 'react-redux'
import imageService from '../../../../services/imageUpload'
import { useState } from 'react'
import guardapolvosService from '../../../../services/guardapolvos'
import searchProdsService from '../../../../services/searchProds'
import { setToken } from '../../../../services/token'
import { URL_GUARDAPOLVOS_IMAGES_AZURE } from '../../../common/consts'
import { useNavigate } from 'react-router-dom'
import { InputsForStock } from '.././common'

import Alert from 'react-bootstrap/Alert'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

const CreateModal = (props) => {
    const navigate = useNavigate()
    const userLogged = useSelector(state => state.login)
    const [alertStatus, setAlertStatus] = useState({display : 'none', text : ''})
    const [imageData, setImageData] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        listedPrice: '',
        type: '',
        category: '',
        description: { general:'', base:'', detalle:'', vivos:'', bolsillos:'' },
        amount: '',
        amountToBuy: 1,
        size: '',
        table: props.table,
        img: "",
        img2: "",
        img3: "",
        imgs: [],
        show: '',
    })
    const [isUploading, setIsUploading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if( name === 'base' || name === 'general' || name === 'detalle' || name === 'vivos' || name === 'bolsillos'){
            setFormData({
                ...formData,
                description: {...formData.description, [name]: value,}
              })
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(!file) return 

        const name = e.target.name
        // se asigna el nombre de la foto subida a la variable que luego es subida como guardapolvo
        if (name === 'imageFront') {
            setFormData((prevFormData) => ({...prevFormData, img : file.name, }))
        } else if (name === 'imageBack') {
            setFormData((prevFormData) => ({...prevFormData, img2 : file.name, }))
        } else if (name === 'imageSizes') {
            setFormData((prevFormData) => ({...prevFormData, img3 : file.name, }))
        }

        // se agrega al array de imagenes que luego es subido a azure
        setImageData((prevImageData) => [...prevImageData, file]) 
        
        // para la lista de nombres, aun no se usa pero va a ser para que se puedan subir muchas fotos
        setFormData((prevFormData) => ({...prevFormData, imgs : [...formData.imgs, file.name], }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        if(formData.name === ''){
            setAlertStatus({display:'block', text:'Ingresar nombre'})
            return
        } else if(formData.listedPrice === ''){
            setAlertStatus({display:'block', text:'Ingresar precio'})
            return
        } 
        // else if(formData.type === ''){
        //     setAlertStatus({display:'block', text:'Ingresar tipo'})
        //     return
        //} 
        else if(formData.description.general === ''){
            setAlertStatus({display:'block', text:'Ingresar descripcion'})
            return
        } else if(formData.img === ''){
            setAlertStatus({display:'block', text:'Ingresar imagen frente'})
            return
        } else if(formData.img2 === ''){
            setAlertStatus({display:'block', text:'Ingresar dorso'})
            return
        }
        if(props.table === 'stock'){
            if(formData.amount === ''){
                setAlertStatus({display:'block', text:'Ingresar cantidad'})
                return
            }
            else if(formData.size === ''){
                setAlertStatus({display:'block', text:'Ingresar talle'})
                return
            }
        }

        setAlertStatus({display:'none', text:''})

        let devMode = ''
        if (/prueba[\$0-9]/.test(formData.name)) {
            devMode = '-dev';
        }

        const newObject = formData
        newObject.img = `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img}`
        newObject.img2 = `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img2}`
        newObject.img3 = formData.img3 !== '' ? `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img3}` : undefined
        newObject.table = props.table;
        newObject.type = props.type;
        newObject.price = formData.listedPrice;
        newObject.category = props.category;
        newObject.discountPrice = undefined;
        newObject.discountListedPrice = undefined;
        newObject.show = true;

        const data = new FormData()
        data.append('blobName', uniqueSuffix)
        data.append('containerName', 'guardapolvos')

        console.log(formData);

        try {
            Swal.fire({
                title: `Estas segura que queres agregar ${formData.name}?`, icon: 'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar', })
            .then(async (result) => {
                if (result.isConfirmed) {
                    setIsUploading(true);
                    try {
                        const token = setToken(userLogged.token)
                        await guardapolvosService.create(formData, token)

                        // genero la lista de todos los guardapolvos reemplazando el guardapolvo a editar por el newObject con datos actualizados
                        // const guardapolvosUpdated = guardapolvos.map(guardapolvo => guardapolvo.id === newObject.id ? newObject : guardapolvo)
                        // dispatch(initializeGuardapolvosByTable(newObject.table, guardapolvosUpdated.filter(item => item.table === newObject.table)))

                        imageData.forEach(image => {
                            data.append('images', image)
                        })
                       
                        await imageService.upload(data, token);
                        await searchProdsService.clearCache();
                    } catch (error){
                        console.error(error);
                        setIsUploading(false);
                        if(error.response.status === 401){
                            Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                                .then((result) => {
                                    if(result.isConfirmed){ navigate('/login') }
                                })
                        }
                        else {
                            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            return
                        }
                    } finally {
                        setIsUploading(false)
                    }
                    Swal.fire({ title: `${formData.name} agregado!`, icon: 'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
                        .then(() => {
                            props.handleProductCreated();
                            props.onHide();
                            setFormData({
                                name: '',
                                price: '',
                                listedPrice: '',
                                type: '',
                                category: '',
                                description: { general:'', base:'', detalle:'', vivos:'', bolsillos:'' },
                                amount: '',
                                amountToBuy: 1,
                                size: '',
                                table: props.table,
                                img: "",
                                img2: "",
                                img3: "",
                                imgs: [],
                                show: '',
                            })
                        })                  
                }
            })
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar nuevo producto
                </Modal.Title>                
            </Modal.Header>
            <Alert key='danger' variant='danger' style={{display:`${alertStatus.display}`}}>
                {alertStatus.text}
            </Alert>
            <Modal.Body>
                {isUploading && (
                    <div style={{
                        position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(255,255,255,0.7)', zIndex: 1050
                    }}>
                        <div style={{textAlign:'center'}}>
                            <Spinner animation="border" role="status" />
                            <div style={{marginTop:8}}>Subiendo imágenes...</div>
                        </div>
                    </div>
                )}
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Form.Group className="mb-3" controlId="controlInput1">
                        <Form.Label><strong>Nombre</strong></Form.Label>
                        <Form.Control type="text" name="name" placeholder="nuevo nombre" value={formData.name} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="controlInput2">
                        <Form.Label><strong>Precio de lista</strong></Form.Label>
                        <Form.Control type="text" name="listedPrice" placeholder="nuevo precio" value={formData.listedPrice} onChange={handleInputChange} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="controlInput3">
                        <Form.Label><strong>Categoria</strong></Form.Label>                        
                        <Form.Select name="category" value={formData.category} onChange={handleInputChange}>
                            <option value="">Selecciona una categoría</option>
                            <option value="guardapolvo">Guardapolvo</option>
                            <option value="accesorios">Accesorios</option>
                        </Form.Select>
                    </Form.Group> */}
                    {
                        // props.category === 'accesorios' &&
                        // <Form.Group className="mb-3" controlId="controlInput3">
                        //     <Form.Label><strong>Tipo</strong></Form.Label>                        
                        //     <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                        //         <option value="">Selecciona un tipo</option>
                        //         <option value="totebag">Totebag</option>
                        //     </Form.Select>
                        // </Form.Group>
                    }
                    {/* {
                        props.category === 'guardapolvo' &&
                        <Form.Group className="mb-3" controlId="controlInput3">
                            <Form.Label><strong>Tipo</strong></Form.Label>                        
                            <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                                <option value="">Selecciona un tipo</option>
                                <option value="nivel_inicial">Nivel Inicial</option>
                                <option value="primaria">Primaria</option>
                                <option value="stock">Stock</option>
                            </Form.Select>
                        </Form.Group>
                    } */}
                    {props.table === 'stock'
                        ? <InputsForStock amount={''} size={''} formData={formData} handleInputChange={handleInputChange} /> 
                        : null
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><strong>Descripcion</strong></Form.Label>
                        {
                            props.category === 'guardapolvo' ? 
                            <>
                                <Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nueva base" name="base" onChange={handleInputChange} value={formData.description.base} />
                                <Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo detalle" name="detalle" onChange={handleInputChange} value={formData.description.detalle} />
                                <Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo vivo" name="vivos" onChange={handleInputChange} value={formData.description.vivos} />
                                <Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo bolsillos" name="bolsillos" onChange={handleInputChange} value={formData.description.bolsillos} />
                            </> : null
                        }
                        <Form.Control as="textarea" placeholder="nueva descripcion general" name="general" onChange={handleInputChange} value={formData.description.general} rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label><strong>Imagen Frente</strong></Form.Label>                    
                        <Form.Control type="file" name="imageFront" onChange={handleFileChange} /> 
                        {/* <Form.Control type="file" name="imgs" onChange={handleFileChange} /> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label><strong>Imagen Dorso</strong></Form.Label>                    
                        <Form.Control type="file" name="imageBack" onChange={handleFileChange} /> 
                        {/* <Form.Control type="file" name="imgs" onChange={handleFileChange} /> */}
                    </Form.Group>
                    {
                        props.table === 'stock' ? 
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Label><strong>Imagen Talles</strong></Form.Label>                    
                             <Form.Control type="file" name="imageSizes" onChange={handleFileChange} /> 
                            {/* <Form.Control type="file" name="imgs" onChange={handleFileChange} /> */}

                        </Form.Group>
                        : null
                    }
                    {/* <ProgressBar now={uploadProgress}  /> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                <Button variant="dark" onClick={handleSubmit}>Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateModal