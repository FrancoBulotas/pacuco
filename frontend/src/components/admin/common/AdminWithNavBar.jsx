
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { checkUserIsLogged } from '../common/commonFunctions'
import { setUser } from '../../../reducers/loginReducer'
import  loginService  from '../../../services/login'

import AdminNavBar from './NavBar'
import Swal from 'sweetalert2'

// esto creeria que se puede sacar, tengo que ver

const AdminWithNavBar = ({ component }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogged = useSelector(state => state.login)
    const oneHour = 3600000

    // chequeamos que la sesion del usuario no haya expirado, al cargar la pagina
    useEffect(() => {
      validateUserActiveSession()
    }, [])

    // cada 8hs cerramos sesion
    useEffect(() => {
        const intervalId = setInterval(() => {
            signOut()
          }, oneHour*8)
          // Cleanup: detener el intervalo cuando el componente se desmonta
          return () => clearInterval(intervalId)
    }, [])

    // chequeamos que el usuario este logueado, cada 30 min
    useEffect(() => {
        const intervalId = setInterval(async () => {
          validateUserActiveSession()
        }, oneHour/2)

        // Cleanup: detener el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId)
    }, []);

    const validateUserActiveSession = async () => {
      try {
        const res = await loginService.checkActiveSession(userLogged.token)
        console.log(res)           
      } catch(e){
        console.error(e)
        if(e.response.status !== 200){
          signOut()
        }
      }
    }

    const signOut = () => {
        Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
        .then(() => {
            dispatch(setUser(null))
            navigate('/login')
        })
    }

    return (
        <div className='d-flex'>
            <div style={{width:'100%'}}>
                {component}
            </div>
        </div>
    )
}

export default AdminWithNavBar