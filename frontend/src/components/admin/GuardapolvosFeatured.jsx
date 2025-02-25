
import { checkUserIsLogged, htmlForNoAccess } from './common/commonFunctions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CheckPermissionsAdministration from './common/CheckPermissionsAdministration'
import emailService from '../../services/emails'

const GuardapolvosFeatured = () => {
    
    return (
        <div></div>

        // <div>
        //     <table className='tabla-de-productoss'>
        //             <thead>               
        //                 <tr className='tr-tabla-productos'>
        //                     <th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Talle</th><th>Frente</th><th>Dorso</th><th>Editar</th>
        //                 </tr> 
        //             </thead>
        //             {getCurrentProducts().map((item, i) =>         
        //                 <tbody key={i}>
        //                     <tr className='tr-tabla-productos'>
        //                         <td>{item.name}</td>
        //                         <td>$ {item.price}</td>
        //                         { table === 'stock' ? <td>{item.amount}</td> : '' }
        //                         { table === 'stock' ? <td>{item.size}</td> : '' }
        //                         {/* <td className='td-description'>
        //                             <div className='description-content'>
        //                             {item.description.general}
        //                             </div>
        //                         </td> */}
        //                         <td><img src={item.img} onClick={() => handleModalImage(item.img)} alt={item.description.general} className="small-img-admin" style={{ cursor: 'pointer' }}></img></td>
        //                         <td><img src={item.img2} onClick={() => handleModalImage(item.img2)} alt={item.description.general} className="small-img-admin" style={{ cursor: 'pointer'}}></img></td>
        //                         <td onClick={() => showEditModal(item, table)} style={{ cursor: 'pointer'}}><i className="bi bi-pencil-square"></i></td>
        //                     </tr>
        //                 </tbody>
        //             )}
        //         </table>
        // </div>
    )
}

export default GuardapolvosFeatured