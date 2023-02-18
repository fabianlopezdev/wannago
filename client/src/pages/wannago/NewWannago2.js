//External dependencies
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
//Internal dependencies
import WannaGoCard from '../../components/wannago/WannaGoCard';
import WannaGoCardSimple from '../../components/wannago/WannaGoCardSimple';

import { useAuth } from '../../contexts/AuthContext';


import '../../components/wannago/WannaGoCard.css';
import './newWannago.css';

import SocialButtons from '../../components/wannago/SocialButtons';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';


const NewWannago = ({ wannago, setWannago }) => {
  const { currentUser } = useAuth();

   useEffect(() => {
     // If no user, no need to post the wannago in the DB
     console.log('userr', currentUser);
     currentUser && postWannago(currentUser, wannago, setWannago);
   }, []);

  return (
    <>
      <div className='justCreatedWannaGo'>
        <h1>{wannago.hostName},</h1>
        <h1>What a Plan!</h1>
        {currentUser ? <WannaGoCard wannago={wannago} setWannago={setWannago} /> : <WannaGoCardSimple wannago={wannago} />}
        <div className='secondPart'>
          {!currentUser ? (
            <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <h2>Get your plans engaged!</h2>
              <p>
                Share the wannaGo with friends and family and see who can go:
                <Link to='/log-in'> Log in </Link> or
                <Link to='/sign-up'> sign up </Link>
              </p>
            </div>
          ) : (
            <SocialButtons guestLink={wannago.guestLink} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewWannago;











