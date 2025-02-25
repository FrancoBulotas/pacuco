

import { checkUserIsLogged, htmlForNoAccess } from './common/commonFunctions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CheckPermissionsAdministration from './common/CheckPermissionsAdministration'
import usersService from '../../services/users'
import { useEffect, useState } from 'react'

const UsersAdministration = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await usersService.getAll();
        setUsers(res);
    }

    // console.log(users);

    return (
        <div>

        </div>
    )
}

export default UsersAdministration