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

export default function WannagoForm({ wannago, setWannago, setIsCreated, isCreated}) {
  //Hooks
  const [error, setError] = useState();

  // let navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(()=>{
    setWannago({})
  },[])
  

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
      {isCreated && <NewWannago wannago={wannago} />}
    </>
  );
}

