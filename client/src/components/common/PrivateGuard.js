import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';

const PrivateGuard = ({children}) => {
    const { isAuthenticated } = useContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateGuard;
