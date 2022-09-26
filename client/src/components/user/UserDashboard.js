//External dependencies
import { useEffect } from 'react';

//Internal dependencies
import { getUserById } from '../../utils/apis/userApiServices/userApi';
import { useAuth } from '../../contexts/AuthContext';

const UserDashboard = ({user, setUser}) => {
  const { currentUser } = useAuth();
  useEffect(() => {
    handlePromise();
  }, []);

  const handlePromise = async () => {
    const userToRender = await getUserById(currentUser.uid)
    setUser(userToRender)
  };

  return (
    <>
      <h2>{user.name} You are here</h2>
    </>
  );
};

export default UserDashboard;

