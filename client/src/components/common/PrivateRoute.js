import { Navigate } from "react-router-dom";
import * as auth from '../common/userLocalStorage.js';

const PrivateRoute = ({children}) =>{

    const email =auth.getUserEmail();
    
   
      return email ? children : <Navigate to="/login" />
    
}

export default PrivateRoute;