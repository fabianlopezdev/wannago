//External dependencies
import { useEffect } from 'react';

//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';

import './wannagoForm.css';
import { Logo } from '../../components/navbar/NavBarButtons';
import NewWannago from './NewWannago';
import StepperForm from '../../components/wannago/StepperForm';

export default function WannagoForm({ wannago, setWannago, setIsCreated, isCreated}) {
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

