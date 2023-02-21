//External dependencies
import { useEffect } from 'react';

//Internal dependencies
import WannaGoCard from '../../components/wannago/WannagoCard';
import WannaGoCardSimple from '../../components/wannago/WannagoCardSimple';

import { useAuth } from '../../contexts/AuthContext';

// import '../../components/wannago/WannaGoCard.css';
import './newWannago.css';

import ShareOptions from '../../components/wannago/ShareOptions';
import PlanSharingPrompt from '../../components/wannago/PlanSharingPrompt';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';

const NewWannago = ({ wannago, setWannago }) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    // If no user, no need to post the wannago in the DB
    currentUser && postWannago(currentUser, wannago, setWannago);
  }, []);

  return (
    <>
      <div className='justCreatedWannaGo'>
        <h1>{wannago.hostName},</h1>
        <h1>What a Plan!</h1>
        {currentUser ? (
          <WannaGoCard
            wannago={wannago}
            setWannago={setWannago}
          />
        ) : (
          <WannaGoCardSimple wannago={wannago} />
        )}
        <div className='secondPart'>
          {!currentUser ? (
            <PlanSharingPrompt />
          ) : (
            <ShareOptions wannago={wannago} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewWannago;

