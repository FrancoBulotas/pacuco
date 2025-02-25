

import { checkUserIsLogged, htmlForNoAccess } from './commonFunctions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


const CheckPermissionsAdministration = ({component}) => {
    
    const navigate = useNavigate()
    const userLogged = useSelector(state => state.login)

    return (
        <div>
            {checkUserIsLogged(userLogged) ? 
            <div>
                {component}
            </div>
            :
                htmlForNoAccess(navigate)
            }
        </div>
    )
}

export default CheckPermissionsAdministration