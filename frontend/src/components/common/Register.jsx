
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import userService from '../../services/users'
import { setUser } from '../../reducers/loginReducer'
import Alert from 'react-bootstrap/Alert'

const Register = () => {
    const [username, setUsername] = useState('')   
    const [password, setPassword] = useState('') 
    const [passwordRepeated, setPasswordRepetead] = useState('') 
    const [alertStatus, setAlertStatus] = useState({display : 'none', text : ''})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (alertStatus.display === 'block') {
            const timer = setTimeout(() => {
                setAlertStatus({ display: 'none', text: '' });
            }, 2500);
    
            return () => clearTimeout(timer); 
        }
    }, [alertStatus]);

    const handleRegister = async (event) => {    
        event.preventDefault()  

        if(password != passwordRepeated) {
            setAlertStatus({display:'block', text:'Las contraseñas deben coincidir'})   
            return
        }

        try {      
            await userService.create({ username, password })    
        
            setAlertStatus({display:'none', text:''})    
            navigate('/login')
            setUsername('')      
            setPassword('')    
            setPasswordRepetead('')    
        } catch (exception) {  
            console.log(exception)    
            setAlertStatus({display:'block', text:'Usuario y/o contraseña incorrecto'})    
        }      
    }

    return (
        <div className='auth-main-container'>
            <div className='auth-container'>
                <div className='auth-div'>
                    <h3 style={{display:'flex', justifyContent:'center'}}>Registrarse</h3>
                    <Alert key='danger' variant='danger' style={{display:`${alertStatus.display}`}}>
                    {alertStatus.text}
                    </Alert>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label">Nombre de usuario</label>
                            <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}  
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ingresar contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password !== undefined ? password : ''}
                            onChange={({ target }) => setPassword(target.value)} 
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ingresar contraseña nuevamente</label>
                            <input type="password" className="form-control" id="exampleInputPassword2"
                            value={passwordRepeated !== undefined ? passwordRepeated : ''}
                            onChange={({ target }) => setPasswordRepetead(target.value)} 
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-dark">Registrarse</button>
                        <a href='/login' className="btn" style={{textDecoration:'underline'}}>Iniciar sesión</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register