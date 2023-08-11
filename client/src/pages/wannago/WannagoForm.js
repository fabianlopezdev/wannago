//External dependencies
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';

import './wannagoForm.css';

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
          <Link
            to={currentUser ? '/dashboard' : '/'}
            style={{ textDecoration: 'none' }}
            title='Go to Dashboard'
          >
            <p className='logo' style={{textAlign: 'center', marginTop: '1rem'}}>Wannago?</p>
          </Link>
        </>
      )}
      {isCreated || (
        <section className='form-container'>
          <StepperForm
            wannago={wannago}
            setIsCreated={setIsCreated}
            setWannago={setWannago}
          />
        </section>
      )}
      {isCreated && <NewWannago wannago={wannago} />}
    </>
  );
}




