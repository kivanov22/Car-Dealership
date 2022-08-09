import { Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children;
};

export default PrivateRoute;
