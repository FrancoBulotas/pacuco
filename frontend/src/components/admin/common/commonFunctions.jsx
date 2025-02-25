
import '../../../assets/styles/admin/htmlNoAcces.css'

export const checkUserIsLogged = (userLogged) => {
    if(userLogged.username) {
        const user = userLogged.username.replace(/^"|"$/g, '')
        if(user) {
            if(user === 'Admin' || user === 'aldi' || user === 'adry') {
                return true
            }
        }
    }
    return false
}

export const reloadPage = seconds => {
    setTimeout(() => {
        window.location.reload()
    }, seconds*1000)
}

export const htmlForNoAccess = (navigate) => {
    return(
        <div>
            <div className="access-denied-container">
                <div className="access-denied-content">
                    <h1 className="access-denied-title">Acceso Denegado</h1>
                    <p className="access-denied-message">
                    No tienes permisos para acceder a esta página.
                    </p>
                    <button className="access-denied-button" onClick={() => navigate('/')}>
                    Volver al Inicio
                    </button>
                    <button className="access-button" onClick={() => navigate('/login')}>
                    Iniciar Sesión
                    </button>
                </div>
            </div>
            {/* {setTimeout(() => {
                navigate('/login')
            }, 3000)} */}
        </div>
    )
}
