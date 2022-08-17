import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext.js';
import * as authService from "../../../services/authService.js";

const Logout = () =>{
    const navigate = useNavigate();
    const {user,userLogout} = useContext(AuthContext);
    

    useEffect(() =>{
        authService.logout(user.token)
        .then(()=> {
            userLogout(user.token);
            navigate('/');
        })
        .catch(()=> {
            navigate('/');
        });
    });



    return null;
}


export default Logout;
