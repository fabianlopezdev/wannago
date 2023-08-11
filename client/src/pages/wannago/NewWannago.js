//External dependencies
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

//Internal dependencies
import WannaGoCard from '../../components/wannago/WannagoCard';
import WannaGoCardSimple from '../../components/wannago/WannagoCardSimple';

import { useAuth } from '../../contexts/AuthContext';

// import '../../components/wannago/WannaGoCard.css';
import './newWannago.css';

import ShareOptions from '../../components/wannago/ShareOptions';
import PlanSharingPrompt from '../../components/wannago/PlanSharingPrompt';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';

const NewWannago = ({ wannago, setWannago, setIsCreated }) => {
  const { currentUser, userToken } = useAuth();
    const queryClient = useQueryClient();

  const [postedWannago, setPostedWannago] = useState(null);


  const mutation = useMutation(() => postWannago(currentUser, wannago, userToken), {
    onSuccess: async (response) => {
      const data = await response.json();
      queryClient.invalidateQueries('wannagos');
      console.log('data', data);
      setPostedWannago(data);
    },
  });

  
  useEffect(() => {
    if (currentUser) {
      mutation.mutate();
    }
  }, [currentUser]);

  // handle mutation status...
  if (mutation.isLoading) {
    return 'Submitting...';
  }

  if (mutation.isError) {
    return `Submission failed: ${mutation.error.message}`;
  }

  return (
    <>
      <section className='created-wannago'>
        {currentUser && postedWannago ? (
          <h1>{postedWannago.hostName},</h1>
        ) : null}
        <h1>What a Plan!</h1>
        {currentUser && postedWannago ? (
          <WannaGoCard
            wannago={postedWannago}
            setWannago={setWannago}
          />
        ) : (
          <WannaGoCardSimple wannago={wannago} />
        )}
        <div className='user-options'>
          {!currentUser ? (
            <PlanSharingPrompt />
          ) : postedWannago ? (
            <ShareOptions wannago={postedWannago} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default NewWannago;











