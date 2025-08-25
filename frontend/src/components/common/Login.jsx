
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import loginService from '../../services/login'
import guardapolvosServices from '../../services/guardapolvos'
import { setUser } from '../../reducers/loginReducer'
import Alert from 'react-bootstrap/Alert'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [username, setUsername] = useState('')   
    const [password, setPassword] = useState('') 
    const [alertStatus, setAlertStatus] = useState({display : 'none', text : ''})
    const [showPassword, setShowPassword] = useState(false);

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

    const handleLogin = async (event) => {    
        event.preventDefault()  

        try {      
            const user = await loginService.login({        
                username, password,      
            })    
        
            setAlertStatus({display:'none', text:''})    
            dispatch(setUser(user))
            navigate('/administracion')
            setUsername('')      
            setPassword('')    
        } 
            catch (exception) {  
            console.log(exception)    
            setAlertStatus({display:'block', text:'Usuario y/o contraseña incorrecto'})    
        }      
    }

    const toggleShowPassword = () => setShowPassword(prev => !prev);

    return (
        <div className='auth-main-container'>
            <div className='auth-container'>
                <div className='auth-div'>
                    <h3 style={{display:'flex', justifyContent:'center'}}>Iniciar sesión</h3>
                    <Alert key='danger' variant='danger' style={{display:`${alertStatus.display}`}}>
                    {alertStatus.text}
                    </Alert>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={username}
                                onChange={({ target }) => setUsername(target.value)}  
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>

                            {/* input group para el ojo */}
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={password !== undefined ? password : ''}
                                    onChange={({ target }) => setPassword(target.value)}
                                    
                                />
                                <button
                                    type="button"
                                    onClick={toggleShowPassword}
                                    className="eye-button"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ?  <IoMdEyeOff /> : <IoMdEye />}
                                </button>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-dark">Ingresar</button>
                        <a href="/register" className="btn ">Registrarse</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login