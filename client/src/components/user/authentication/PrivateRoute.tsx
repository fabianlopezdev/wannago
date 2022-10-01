//For routes that non-users cannot access

import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;