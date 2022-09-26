//For routes that users cannot access

//External dependencies
import { Outlet, Navigate } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../../../contexts/AuthContext';

const UserPrivateRoute = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to='/user/dashboard' />;
};

export default UserPrivateRoute;

