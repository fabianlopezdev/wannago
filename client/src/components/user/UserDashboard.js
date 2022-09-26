//External dependencies
import { useEffect, useState } from 'react';

//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  putOwnerToWannaGo,
  getUserById,
} from '../../utils/apis/userApiServices/userApi';
import { getAllWannaGosOfUser } from '../../utils/apis/wannagoApiServices/getWannaGos';
import WannaGoCard from '../WannaGoCard';

const UserDashboard = ({
  user,
  setUser,
  wannaGo,
  justCreatedWG,
  setJustCreatedWG,
}) => {
  const [allUserWGs, setAllUserWGs] = useState();
  const { currentUser } = useAuth();
  useEffect(() => {
    handlePromise();
  }, []);

  const handlePromise = async () => {
    const userToRender = await getUserById(currentUser.uid);
    setUser(userToRender);

    if (justCreatedWG) {
      console.log('inside useeeer', user);
      await putOwnerToWannaGo(wannaGo._id, userToRender._id);
      const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
      setAllUserWGs(allUserWannaGos);
      setJustCreatedWG(false);
      return;
    }
    const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
    setAllUserWGs(allUserWannaGos);
    console.log('this is all userWannago', allUserWannaGos);
    console.log('this is setted, ', allUserWGs);
  };

  return (
    <>
      <h2>{user.name} You are here</h2>
      <h2>These are your wannagos:</h2>
      <div>
        {allUserWGs &&
          allUserWGs.map((wannaGo) => {
            return (
              <WannaGoCard
                key={wannaGo._id}
                wannaGo={wannaGo}
              />
            );
          })}
      </div>
    </>
  );
};

export default UserDashboard;

