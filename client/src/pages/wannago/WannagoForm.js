//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import { getWannaGoByParams } from '../../utils/apis/wannagoApiServices/getWannaGos';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';
import { getUserById } from '../../utils/apis/userApiServices/userApi';
import './wannagoForm.css';
import { Logo } from '../../components/navbar/NavBarButtons';
import NewWannago from './NewWannago2';
import StepperForm from '../../components/wannago/StepperForm';

export default function WannagoForm({ wannago, setWannago}) {
  //Hooks
  const [error, setError] = useState();
  const [isCreated, setIsCreated] = useState(false);

  // let navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(()=>{setWannago({})},[])
  // console.log('this is current user', currentUser);
 
  // const saveWannaGo = async () => {
  //   try {
  //     //If user creates a wannago while logged in.
  //     if (!wannago.host) {
  //       const user = await getUserById(currentUser.uid);
  //       wannago.ownerName = user.name;
  //     }
  //     await postWannago(wannago);
  //     const postedWannaGo = await getWannaGoByParams(
  //       wannago.what,
  //       wannago.when
  //     );
  //     // console.log('this is posted wannago', postedWannaGo);
  //     setWannago(postedWannaGo);
  //     setIsNewWannago(true);
  //     const { _id } = postedWannaGo;
  //     navigate(`/${_id}`);
  //   } catch (e) {
  //     setError('Sorry we could not create the wannago. Please try in a while.');
  //     console.log(
  //       `Error communicating with backend to postAWannago or to retrieve the just posted wannago. Error: ${e}`
  //     );
  //   }
  // };

  return (
    <>
      {!currentUser && window.innerWidth < 767 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Logo currentUser={currentUser} />
          </div>
        </>
      )}
      {isCreated || (
        <StepperForm
          wannago={wannago}
          setIsCreated={setIsCreated}
          setWannago={setWannago}
        />
      )}
      {isCreated && <NewWannago wannago={wannago} setWannago={setWannago}  />}
    </>
  );
}

