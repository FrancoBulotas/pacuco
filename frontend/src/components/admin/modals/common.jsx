
import Form from 'react-bootstrap/Form'

// Agrega los inputs a los modals en caso de que sea de la tabla stock
export const InputsForStock = ({ amount, size, formData, handleInputChange }) => {
    
    const styleContainer = {display:'flex', justifyContent:'space-around', gap:'5px'}
    const styleChilds = { width:'50%' }

    return(
        <div style={styleContainer}> 
            <Form.Group className="mb-3" controlId="controlInput2" style={styleChilds}>
                <Form.Label><strong>Cantidad{amount !== '' ? ':' : '' } </strong>{amount}</Form.Label>
                <Form.Control
                    type="text"
                    name="amount"
                    placeholder="nueva cantidad"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput2" style={styleChilds}>
                <Form.Label><strong>Talle{amount !== '' ? ':' : '' } </strong>{size}</Form.Label>
                <Form.Control
                    type="text"
                    name="size"
                    placeholder="nuevo talle"
                    value={formData.size}
                    onChange={handleInputChange}
                />
            </Form.Group>
        </div>
    )
}

import Swal from 'sweetalert2'
import guardapolvosService from '../../../services/guardapolvos'
import { useDispatch } from 'react-redux'

import { reloadPage } from '../common/commonFunctions' 
import { setToken } from '../../../services/token'

/**
 ** Elimina un guardapolvo de la lista.
 ** Recibe el id y el usuario logueado para validar que tenga permisos.
*/
// export const deleteProduct = (item, userLogged, guardapolvos, dispatch) => {

//     Swal.fire({ title: 'Estas segura que queres eliminar el guardapolvo?', icon:'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar',})
//     .then(async (result) => {
//         if (result.isConfirmed) {
//             try { 
//                 const token = setToken(userLogged.token)
//                 // await guardapolvosService.deleteGuardapolvo(item.id, token) 

//                 // genero la lista de todos los guardapolvos eliminando el guardapolvo pasado por parametro
//                 const guardapolvosUpdated = guardapolvos.filter(guardapolvo => guardapolvo.id !== item.id)
//                 dispatch(initializeGuardapolvosByTable(item.table, guardapolvosUpdated.filter(guardapolvo => guardapolvo.table === item.table)))

//                 Swal.fire({title:'Guardapolvo eliminado correctamente!', icon:'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
//                 .then((result)=>{
//                     // if (result.isConfirmed) {
//                     //     // reloadPage(0.5)
//                     //     return true
//                     // }
//                 })
//             }
//             catch (error) { 
//                 console.error('Error:', error)
//                 Swal.fire({ title: 'Error', text: 'No se pudo eliminar el guardapolvo', icon:'error',confirmButtonText: 'Aceptar', confirmButtonColor: '#000', })
//                 if(error.response.data.error === 'token expired'){ navigate('/login') } 
//             }      
//         }
//     })
// }