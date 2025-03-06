
import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import '../../../assets/styles/admin/stockAdministration.css'
import '../../../assets/styles/admin/administration.css'

import { formatNumber } from '../../product/common/functions'
import { useNavigate } from 'react-router-dom'
import purchasedProductsService from '../../../services/purchasedProduct'
import searchProdsService from '../../../services/searchProds'
import Swal from 'sweetalert2'

const PurchaseHistoryModal = (props) => {
    const navigate = useNavigate()
    const [cartData, setCartData] = useState([])
    const [clientData, setClientData] = useState({
        fullName: props.item.clientData.fullName,
        email: '',
        dni: '',
        phone: '',
        province: '',
        city: '',
        address: '',
        zipCode: '',
        paymentMethod: '',
        shipMethod: '',
        sucursal: '',
    })

    useEffect(() => {
        if(props.show){
            setClientData(props.item.clientData)
            setCartData(props.item.cartPurchased)
        }
    }, [props.show])

    const handleSaleConfirmedStatus = async (state) => {
        try {
            await purchasedProductsService.update(props.item.id, {saleConfirmed: state})
            await searchProdsService.clearCache();
            
            Swal.fire({title:'Modificado correctamente!', text:`Modificaste el estado de: ${props.item.operationCode}`, icon:'success', confirmButtonText:'Aceptar', confirmButtonColor:'#000'})
            .then((result) => {
                if (result.isConfirmed) {
                    props.resetProducts();
                    props.onHide();
                }
            })
        } catch (error) {
            console.log(error)
            Swal.fire({title:'No se pduo modificar', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText:'Aceptar', confirmButtonColor:'#000'})
        }
        
    }

    const checkTable = (item) => {
        let table = ''
        if(item.table === 'stock') table = 'Stock'
        else if(item.table === 'primaria') table = 'Primaria'
        else if(item.table === 'nivel_inicial') table = 'Nivel Inicial'

        return table
    }

    const handleModalImage = (img) => {
        Swal.fire({ imageUrl: img, showConfirmButton: false })
    }

    const redirectToProduct = (item) => {
        // navigate(`/${item.table}/${item.id}`)
        const url = `/products?id=${item.id}`;
        window.open(url, '_blank');
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
                    Detalle de operacion: {props.item.operationCode}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Informacion del cliente</strong></Accordion.Header>
                        <Accordion.Body>
                            <div><strong>Nombre:</strong> {clientData.fullName}</div>
                            <div><strong>Mail:</strong> {clientData.email}</div>
                            <div><strong>DNI:</strong> {clientData.dni}</div>
                            <div><strong>Telefono:</strong> {clientData.phone}</div>
                            <div><strong>Provincia:</strong> {clientData.province}</div>
                            <div><strong>Ciudad:</strong> {clientData.city}</div>
                            <div><strong>Direccion:</strong> {clientData.address}</div>
                            <div><strong>Codigo Postal:</strong> {clientData.zipCode}</div>
                            <div><strong>Metodo de pago:</strong> {clientData.paymentMethod}</div>
                            <div><strong>Metodo de envio:</strong> {clientData.shipMethod}</div>
                            <div><strong>Sucursal:</strong> {clientData.sucursal !== '' ? clientData.sucursal : 'ninguna'}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Informacion productos comprados</strong></Accordion.Header>
                        <Accordion.Body>
                            <Table hover variant="light" className='tabla-de-productos'>
                                <thead>
                                    <tr className='tr-tabla-productos'>
                                        <th>Nombre</th><th>Precio</th><th>Talle</th><th>Cantidad</th><th>Tipo</th><th>IMG</th>
                                    </tr>
                                </thead>
                                {cartData.map((item, i) => 
                                    <tbody key={i}>
                                        <tr className='tr-tabla-productos' onClick={() => redirectToProduct(item)} style={{ cursor: 'pointer' }}>
                                            <td>{item.name}</td>
                                            <td>$ {(item.discountPrice || item.discountPrice > 0 ? item.discountPrice : item.price)}</td>
                                            <td>{item.size}</td> 
                                            <td>{item.amountToBuy}</td>
                                            <td>{checkTable(item)}</td>
                                            <td><img src={item.img} alt={item.description.general} className="small-img-admin"></img></td>
                                        </tr>
                                    </tbody>
                                )}
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Estado comprobante</strong></Accordion.Header>
                        <Accordion.Body>
                        <div style={{padding:'10px'}}>
                            Estado actual:
                            {
                                props.item.saleConfirmed 
                                ? <i className="bi bi-check-lg" style={{color:'green', marginLeft:'10px'}}></i>
                                : <i className="bi bi-x-lg" style={{color:'red', marginLeft:'10px'}}></i>
                            }
                        </div>
                        <button className='btn btn-success' onClick={() => handleSaleConfirmedStatus(true)} style={{marginRight:'10px'}}>Confirmar que se subio el comprobante</button>
                        <button className='btn btn-danger' onClick={() => handleSaleConfirmedStatus(false)}>Indicar que no se subio el comprobante</button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div style={{padding:'20px'}}>
                    <div><strong>Total:</strong> ${formatNumber(props.item.totalPricePurchased || 0)}</div>
                    <div><strong>Fecha:</strong> {props.item.time}</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PurchaseHistoryModal