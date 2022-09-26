//External dependencies
import { Outlet, Navigate } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../../../contexts/AuthContext';

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;

