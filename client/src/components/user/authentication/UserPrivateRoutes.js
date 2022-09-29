//For routes that users cannot access

import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const UserPrivateRoute = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to='/user/dashboard' />;
};

export default UserPrivateRoute;