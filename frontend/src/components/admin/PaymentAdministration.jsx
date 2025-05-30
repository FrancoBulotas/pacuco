
import { setToken } from '../../services/token'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { reloadPage } from './common/commonFunctions'
import { setNewPaymentMethods } from '../../reducers/paymentMethodsReducer'

import imageService from '../../services/imageUpload'
import Swal from 'sweetalert2'
import { CreditCard, Building2, FileText, MapPin, Truck, Check } from "lucide-react"

import DataForMP from '../admin/payment/dataForMP';
import DataForTransferencia from '../admin/payment/DataForTransferencia';
import DataForBancoFrances from '../admin/payment/DataForBancoFrances';
import DataForSucursal from '../admin/payment/DataForSucursal';
import DataForDomicilio from '../admin/payment/DataForDomicilio';

import '../../assets/styles/admin/paymentAdministration.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/admin/paymentAdministration.scss'

const PaymentAdministration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paymentMethodsFromState = useSelector(state => state.paymentMethods) 
    const userLogged = useSelector(state => state.login);
    const [selectedMethod, setSelectedMethod] = useState("transferencia-bancaria");
    const [newValues, setNewValues] = useState({
        transferencia: {
            cbu: '',
            aliasCbu: '',
            titularCuentaCbu: '',
            savedProfiles: ''
        },
        mercadoPago: {
            currentUser: '',
            currentUserPublicKey: ''
        },
        bancoFrances: {
            imgQr: ''
        },
        priceShipmentSucursal: '',
        priceShipmentDomicilio: '',
    })

    const paymentMethods = [
        // {
        //     id: "mercado-pago",
        //     name: "Mercado Pago",
        //     icon: CreditCard,
        //     description: "Pagos digitales",
        // },
        {
            id: "transferencia-bancaria",
            name: "Transferencia Bancaria",
            icon: Building2,
            description: "Transferencia directa",
        },
        {
            id: "banco-frances",
            name: "Banco Francés",
            icon: FileText,
            description: "Banco Francés para pagos",
        },
        {
            id: "envio-sucursal",
            name: "Envío a Sucursal",
            icon: MapPin,
            description: "Retiro en sucursal",
        },
        {
            id: "envio-domicilio",
            name: "Envío a Domicilio",
            icon: Truck,
            description: "Entrega a domicilio",
        },
    ]

    const handleInputChange = (name, value) => {
        setNewValues({
            ...newValues,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e?.preventDefault()  
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        const data = {
            transferencia: {
                cbu: newValues.transferencia.cbu !== '' ?  newValues.transferencia.cbu :  paymentMethodsFromState.transferencia.cbu,
                aliasCbu: newValues.transferencia.aliasCbu !== '' ?  newValues.transferencia.aliasCbu :  paymentMethodsFromState.transferencia.aliasCbu,
                titularCuentaCbu: newValues.transferencia.titularCuentaCbu !== '' ?  newValues.transferencia.titularCuentaCbu :  paymentMethodsFromState.transferencia.titularCuentaCbu,
                savedProfiles: newValues.transferencia.savedProfiles !== '' ?  newValues.transferencia.savedProfiles :  paymentMethodsFromState.transferencia.savedProfiles

            },
            mercadoPago: {
                currentUser: newValues.mercadoPago.currentUser !== '' ?  newValues.mercadoPago.currentUser :  paymentMethodsFromState.mercadoPago.currentUser,
                currentUserPublicKey: newValues.mercadoPago.currentUserPublicKey !== '' ?  newValues.mercadoPago.currentUserPublicKey :  paymentMethodsFromState.mercadoPago.currentUserPublicKey,
            },
            bancoFrances: {
                imgQr: newValues.bancoFrances.imgQr !== '' ?  `https://pacucostorage.blob.core.windows.net/guardapolvos-dev/${uniqueSuffix}-${newValues.bancoFrances.imgQr.name}` :  paymentMethodsFromState.bancoFrances.imgQr,
            },
            priceShipmentSucursal: newValues.priceShipmentSucursal !== '' ?  newValues.priceShipmentSucursal :  paymentMethodsFromState.priceShipmentSucursal,
            priceShipmentDomicilio: newValues.priceShipmentDomicilio !== '' ?  newValues.priceShipmentDomicilio :  paymentMethodsFromState.priceShipmentDomicilio,
        }

        let imageFile = { image: newValues.bancoFrances.imgQr !== "" ? newValues.bancoFrances.imgQr : false }
             
        console.log(data)

        try {
            const token = setToken(userLogged.token);
            if (imageFile.image !== false) {
                const formData = new FormData();
                formData.append('images', imageFile.image);
                formData.append('blobName', uniqueSuffix);
                formData.append('containerName', 'common');

                try { 
                    await imageService.upload(formData, token);
                }
                catch (error) {
                    console.log(error)
                    if (error.response.data.error === 'token expired') { 
                        Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then((result) => {
                            if(result.isConfirmed){ navigate('/login') }
                        })
                    } else {
                        Swal.fire({title:'Error al subir imagen', text:'Intentalo de nuevo mas tarde!', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                        .then(() => { return })
                    }
                }
            }   
            dispatch(setNewPaymentMethods(paymentMethodsFromState._id || paymentMethodsFromState.id, data));
            setNewValues({
                transferencia: {
                    cbu: '',
                    aliasCbu: '',
                    titularCuentaCbu: '',
                    savedProfiles: ''
                },
                mercadoPago: {
                    currentUser: '',
                    currentUserPublicKey: ''
                },
                bancoFrances: {
                    imgQr: ''
                },
                priceShipmentSucursal: '',
                priceShipmentDomicilio: '',
            });
            e?.stopPropagation()
        } catch (error) {
            console.log(error);
            Swal.fire({title:'Error al modificar los datos.', text:'Intentalo de nuevo mas tarde!', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',}).then(() => { return })
        }
    }

    const checkWhichPaymentMethodToShow = () => {
        switch (selectedMethod) {
            case "mercado-pago":
                return <DataForMP formData={newValues} currentData={paymentMethodsFromState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            case "transferencia-bancaria":
                return <DataForTransferencia formData={newValues} currentData={paymentMethodsFromState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            case "banco-frances":
                return <DataForBancoFrances formData={newValues} currentData={paymentMethodsFromState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            case "envio-sucursal":
                return <DataForSucursal formData={newValues} currentData={paymentMethodsFromState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            case "envio-domicilio":
                return <DataForDomicilio formData={newValues} currentData={paymentMethodsFromState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            default:
                return null
        }
    }

    return (
    paymentMethodsFromState && (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-700 mb-2">Modificar Medios de Pago</h1>
                <p className="text-gray-600">Gestiona los métodos de pago donde recibirás los pagos</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Payment Methods Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Métodos de Pago</h2>
                    <div className="space-y-3">
                        {paymentMethods.map((method) => {
                        const IconComponent = method.icon
                        const isSelected = selectedMethod === method.id

                        return (
                            <button
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                                isSelected
                                ? "border-pink-500 bg-pink-50"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                            }`}
                            >
                            <div className="flex items-center space-x-3">
                                <div
                                className={`p-2 rounded-lg ${
                                    isSelected ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-600"
                                }`}
                                >
                                <IconComponent size={20} />
                                </div>
                                <div className="flex-1">
                                <div className={`font-medium ${isSelected ? "text-pink-900" : "text-gray-900"}`}>
                                    {method.name}
                                </div>
                                <div className={`text-sm ${isSelected ? "text-pink-700" : "text-gray-500"}`}>
                                    {method.description}
                                </div>
                                </div>
                                {isSelected && <Check size={20} className="text-pink-500" />}
                            </div>
                            </button>
                        )
                        })}
                    </div>
                    </div>
                </div>

                {/* Main Content */}
                {checkWhichPaymentMethodToShow()}
                </div>
            </div>
        </div>
    )
    )
}

export default PaymentAdministration