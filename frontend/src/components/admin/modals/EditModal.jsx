
import { useSelector, useDispatch } from 'react-redux'
import imageService from '../../../services/imageUpload'
import guardapolvosService from '../../../services/guardapolvos'
import searchProdsService from '../../../services/searchProds'
import { initializeGuardapolvosByTable } from '../../../reducers/guardapolvosReducer'

import { setToken } from '../../../services/token'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { URL_GUARDAPOLVOS_IMAGES_AZURE } from '../../common/consts'
import { useNavigate } from 'react-router-dom'
import { InputsForStock } from './common'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import '../../../assets/styles/admin/modals.scss'
import { isValidNumber } from '../../common/functions'

const EditModal = (props) => {
    const userLogged = useSelector(state => state.login)
    const navigate = useNavigate()    
    const dispatch = useDispatch()

    const guardapolvos = useSelector(state => state.guardapolvos.filtred)
    const [imageData, setImageData] = useState([])
    const [formData, setFormData] = useState({ 
        id: '', 
        name: '', 
        price: '', 
        type: '', 
        category: '', 
        discountPrice: '', 
        amount: '', 
        size: '', 
        description: { 
            general: '', 
            base: '', 
            detalle: '', 
            vivos: '', 
            bolsillos: '', 
        }, 
        img: '', 
        img2: '',
        img3: '', 
        featured: '',
        show: '',
    })

    useEffect(() => {
        // tuve que agregar este useEffect, para que al actualizarse el prop, se ponga la descripcion general en el formData
        // y asi poder mostrarse en el input y editar desde ahi.
        setFormData({
            ...formData,
            description: { ...formData.description, general: props.item.description ?  props.item.description.general : '', },
            show: props.item.show
        })
    }, [props.item])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(typeof value !== 'boolean' && value.startsWith(' ')) return

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

        if (name === 'imageFront') {
            setFormData((prevFormData) => ({...prevFormData, img : file.name, }))
        } else if (name === 'imageBack') {
            setFormData((prevFormData) => ({...prevFormData, img2 : file.name, }))
        } else if (name === 'imageSizes') {
            setFormData((prevFormData) => ({...prevFormData, img3 : file.name, }))
        }
        setImageData((prevImageData) => [...prevImageData, file])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        let devMode = ''
        if (/prueba[\$0-9]/.test(props.item.name)) {
            devMode = '-dev';
        }

        // validamos que el precio sea un numero
        if(!isValidNumber(formData.price) && formData.price !== ''){
            Swal.fire({ title:'Ingresa un precio valido!', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
            return
        }

        const newObject = {
            id: props.item.id,
            table: props.item.table,
            amountToBuy: 1,
            img : formData.img !== '' ? `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img}` : props.item.img,
            img2 : formData.img2 !== '' ? `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img2}` : props.item.img2,
            img3 : formData.img3 !== '' ? `${URL_GUARDAPOLVOS_IMAGES_AZURE}${devMode}/${uniqueSuffix}-${formData.img3}` : props.item.img3,
            name : formData.name !== '' ? formData.name : props.item.name,
            price : formData.price !== '' ? Number(formData.price) : Number(props.item.price),
            discountPrice : formData.discountPrice !== '' ? formData.discountPrice : props.item.discountPrice,
            amount : formData.amount !== '' ? formData.amount : props.item.amount,
            size : formData.size !== '' ? formData.size : props.item.size,
            type : formData.type !== '' ? formData.type : props.item.type,
            category : formData.category !== '' ? formData.category : props.item.category,
            show : formData.show !== '' ? formData.show : props.item.show,
            description : {
                general: formData.description.general !== '' ? formData.description.general : props.item.description.general,
                base: formData.description.base !== '' ? formData.description.base : props.item.description.base,
                detalle: formData.description.detalle !== '' ? formData.description.detalle : props.item.description.detalle,
                vivos: formData.description.vivos !== '' ? formData.description.vivos : props.item.description.vivos,
                bolsillos: formData.description.bolsillos !== '' ? formData.description.bolsillos : props.item.description.bolsillos,
            },
        }
        
        const data = new FormData()
        data.append('blobName', uniqueSuffix)
        data.append('containerName', 'guardapolvos')

        try {
            Swal.fire({ title: `Estas segura que queres modificar?`, icon: 'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar', })
            .then(async (result) => {
                if (result.isConfirmed) {                
                    try {
                        const token = setToken(userLogged.token)

                        await guardapolvosService.update(props.item.id, newObject, token)
                                      
                        // genero la lista de todos los guardapolvos reemplazando el guardapolvo a editar por el newObject con datos actualizados
                        const guardapolvosUpdated = guardapolvos.map(guardapolvo => guardapolvo.id === props.item.id ? newObject : guardapolvo)
                        dispatch(initializeGuardapolvosByTable(newObject.table, guardapolvosUpdated.filter(item => item.table === newObject.table)))

                        if(imageData.length > 0){
                            imageData.forEach(image => data.append('images', image))                    
                            await imageService.upload(data, token)
                        }

                        await searchProdsService.clearCache();
                    } catch (error){
                        console.log(error)
                        if(error.response.status === 401){
                            Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            .then((result) => {
                                if(result.isConfirmed){ 
                                    navigate('/login') 
                                    return
                                }
                            })
                        } else {
                            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            return
                        }
                    }
                    Swal.fire({title: `${props.item.name} modificado!`, icon: 'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then(() => {
                            props.handleProductEdited();
                            props.onHide();
                            setFormData({ 
                                id: '', 
                                name: '', 
                                price: '', 
                                type: '', 
                                category: '', 
                                discountPrice: '', 
                                amount: '', 
                                size: '', 
                                description: { 
                                    general: '', 
                                    base: '', 
                                    detalle: '', 
                                    vivos: '', 
                                    bolsillos: '', 
                                }, 
                                img: '', 
                                img2: '',
                                img3: '', 
                                featured: '',
                                show: '',
                            });
                    })
                }
            })
        } catch (error) {
            console.error('Error:', error)
            Swal.fire({ title: 'Error', text: 'No se pudo modificar el producto', icon: 'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
        }
    }

    const deleteItem = () => {
        Swal.fire({ title: 'Estas segura que queres eliminar el guardapolvo?', icon:'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar',})
            .then(async (result) => {
                if (result.isConfirmed) {
                    try { 
                        const token = setToken(userLogged.token)
                        await guardapolvosService.deleteGuardapolvo(props.item.id, token) 

                        // genero la lista de todos los guardapolvos eliminando el guardapolvo pasado por parametro
                        const guardapolvosUpdated = guardapolvos.filter(guardapolvo => guardapolvo.id !== props.item.id)
                        dispatch(initializeGuardapolvosByTable(props.item.table, guardapolvosUpdated.filter(guardapolvo => guardapolvo.table === props.item.table)))

                        await searchProdsService.clearCache();

                        Swal.fire({title:'Guardapolvo eliminado correctamente!', icon:'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then((result)=>{
                            if (result.isConfirmed) {
                                props.onHide();
                                props.handleProductEdited();
                            }
                        })
                    }
                    catch (error) { 
                        console.error('Error:', error)
                        Swal.fire({ title: 'Error', text: 'No se pudo eliminar el guardapolvo', icon:'error',confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
                        if(error.response.data.error === 'token expired'){ navigate('/login') } 
                    }      
                }
            })
    }

    const styleContainer = {display:'flex', justifyContent:'space-around', gap:'5px'}
    const styleChilds = { width:'50%' }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Una vez agregado un descuento, el precio actual se mantiene (aparece tachado), pero el precio que se muestra a los clientes es el del descuento.
          Para sacar el descuento aplicado, hay que darle un nuevo valor de 0
        </Tooltip>
    )

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modificar {props.item.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Mostrar al publico"
                            name="show"
                            checked={formData.show !== undefined ? formData.show : props.item.show}
                            onChange={(e) => handleInputChange({
                                target: { name: "show", value: e.target.checked }
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="controlInput1">
                        <Form.Label><strong>Nombre actual:</strong> {props.item.name}</Form.Label>
                        <Form.Control type="text" name="name" placeholder="nuevo nombre" value={formData.name} onChange={handleInputChange} />
                    </Form.Group>
                    <div style={styleContainer}>
                        <Form.Group className="mb-3" controlId="controlInput2" style={{width:'50%'}}>
                            <Form.Label><strong>Precio actual:</strong> $ {props.item.price}</Form.Label>
                            <Form.Control type="text" name="price" placeholder="nuevo precio" value={formData.price} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="controlInput3" style={{width:'50%'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Form.Label><strong>Descuento actual:</strong> $ {props.item.discountPrice || props.item.discountPrice > 0 ? props.item.discountPrice : '0'}</Form.Label>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <div><i className="bi bi-info-circle" style={{marginRight:'auto', width:'100%'}}></i></div>
                                </OverlayTrigger>
                            </div>
                            <Form.Control type="text" name="discountPrice" placeholder="nuevo descuento" value={formData.discountPrice} onChange={handleInputChange} />
                        </Form.Group>
                    </div>
                    {props.item.table === 'stock' 
                        ? <InputsForStock amount={props.item.amount} size={props.item.size} formData={formData} handleInputChange={handleInputChange} />                          
                        : null 
                    }
                    {/* <Form.Group className="mb-3" controlId="controlInput3">
                        <Form.Label><strong>Categoria</strong></Form.Label>                        
                        <Form.Select name="category" value={formData.category} onChange={handleInputChange}>
                            <option value="">Selecciona una categoría</option>
                            <option value="guardapolvo">Guardapolvo</option>
                            <option value="accesorios">Accesorios</option>
                        </Form.Select>
                    </Form.Group> */}
                    {
                        props.item.category === 'accesorios' &&
                        <Form.Group className="mb-3" controlId="controlInput3">
                            <Form.Label><strong>Tipo</strong></Form.Label>                        
                            <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                                <option value="">Selecciona un tipo</option>
                                <option value="totebag">Tote Bag</option>
                            </Form.Select>
                        </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><strong>Descripcion actual:</strong></Form.Label>
                        {
                            props.item.category === 'guardapolvo' ? 
                            <>
                            <div style={styleContainer}>
                                <div style={styleChilds}><strong>Base:</strong> {props.item.description !== undefined ? props.item.description.base : null }<Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nueva base" name="base" onChange={handleInputChange} value={formData.description.base} /></div>
                                <div style={styleChilds}><strong>Detalle:</strong> {props.item.description !== undefined ? props.item.description.detalle : null }<Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo detalle" name="detalle" onChange={handleInputChange} value={formData.description.detalle} /></div>
                            </div>
                            <div style={styleContainer}>
                                <div style={styleChilds}><strong>Vivos:</strong> {props.item.description ? props.item.description.vivos : null}<Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo vivo" name="vivos" onChange={handleInputChange} value={formData.description.vivos} /></div>
                                <div style={styleChilds}><strong>Bolsillos:</strong> {props.item.description ? props.item.description.bolsillos : null}<Form.Control style={{marginBottom:'5px'}} type="text" placeholder="nuevo bolsillos" name="bolsillos" onChange={handleInputChange} value={formData.description.bolsillos} /></div>
                            </div>
                            </> : null
                        }
                        <Form.Control as="textarea" placeholder="nueva descripcion" name="general" onChange={handleInputChange} value={formData.description.general} rows={4} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label><strong>Imagen Frente</strong></Form.Label>                    
                            <Form.Control type="file" name="imageFront" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label><strong>Imagen Dorso</strong></Form.Label>                    
                            <Form.Control type="file" name="imageBack" onChange={handleFileChange} />
                    </Form.Group>
                    {
                        props.item.table === 'stock' ? 
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Label><strong>Imagen Talles</strong></Form.Label>                    
                             <Form.Control type="file" name="imageSizes" onChange={handleFileChange} /> 
                        </Form.Group>
                        : null
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={deleteItem} style={{marginRight:'auto'}}>Eliminar</Button>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                <Button variant="dark" onClick={handleSubmit}>Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal