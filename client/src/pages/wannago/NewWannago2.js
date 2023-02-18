//External dependencies
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
//Internal dependencies
import WannaGoCard from '../../components/wannago/WannaGoCard';

import { putOwnerToWannaGo } from '../../utils/apis/userApiServices/userApi';
import { useAuth } from '../../contexts/AuthContext';


import '../../components/wannago/WannaGoCard.css';
import './newWannago.css';

import SocialButtons from '../../components/wannago/SocialButtons';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';
import { guestLinkGenerator } from '../../utils/helperFunctions';

const NewWannago = ({ wannago, setWannago }) => {
  // const { id } = useParams();
  // // const guestLink = guestLinkGenerator(id);
  const { currentUser } = useAuth();
  // console.log('name', currentUser.displayName);
  
  useEffect(()=>{
    // console.log('helooooooo')
    if (currentUser) {
      const dateStamp = Date.now()
      let newWannago = {
        ...wannago,
        hostId: currentUser.uid,
        hostName: currentUser.displayName,
        dateCreated: dateStamp,
        guestLink: guestLinkGenerator(dateStamp)
      };
      setWannago(newWannago);
      setTimeout(console.log('wannago', wannago), 10000);
      try {
       postWannago(newWannago)
      } catch (e) {
        console.log(
          `Error communicating with backend to postAWannago or to retrieve the just posted wannago. Error: ${e}`
        );
      }
    }
  }, [])
  

  return (
    <>
      <div className='justCreatedWannaGo'>
        <h1>{wannago.hostName},</h1>
        <h1>What a Plan!</h1>
        <WannaGoCard wannaGo={wannago} />
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









