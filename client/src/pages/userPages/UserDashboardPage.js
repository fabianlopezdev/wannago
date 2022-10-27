//External dependencies
import { useEffect, useState } from 'react';
import { Alert } from 'bootstrap';
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  putOwnerToWannaGo,
  getUserById,
} from '../../utils/apis/userApiServices/userApi';
import { getAllWannaGosOfUser } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  getNumOfActiveWannaGos,
  getNumOfOlderWannaGos,
  // aggregateSuccessRatio,
  // aggregateEngagement,
  aggregatePplGoing,
  aggregateRejections,
  aggregateSuggestions,
  aggregateOpenedTimes,
  getActiveWGsAndSort,
} from '../../utils/helperFunctions';
import { useQuery } from 'react-query';
import { CLIENT_PORT, URL } from '../../utils/config';
import {
  DonutChart,
  RadialChart,
  TotalWannaGosChart,
} from '../../components/charts';
import WannaGoCard from '../../components/WannaGoCard';

import '../../components/guestLinkPageOptions/MaybeOption.css';
import './UserDashboard.css';

const UserDashboard = ({
  user,
  setUser,
  wannaGo,
  justCreatedWG,
  setJustCreatedWG,
}) => {
  const { currentUser } = useAuth();
  const userToRender = useQuery('user', () => getUserById(currentUser.uid));
  const wannaGosOfUser = useQuery('wannagos', () =>
    getAllWannaGosOfUser(currentUser.uid)
  );
  // const [wannaGos, set] = useState(true)
  console.log('wannagos to render', wannaGosOfUser);

  if (justCreatedWG) {
    console.log('wannagoID', wannaGo._id);
    putOwnerToWannaGo(wannaGo._id, userToRender._id);
    setJustCreatedWG(false);
    return;
  }
  if (userToRender.isLoading || wannaGosOfUser.isLoading)
    return <p>Loading...</p>;
  if (userToRender.isError || wannaGosOfUser.isError)
    return (
      <Alert variant='danger'>
        Sorry, something went wrong. Please try refreshing the page.
      </Alert>
    );

  const totalWGs = wannaGosOfUser.data.length;
  const totalPplGoing = aggregatePplGoing(wannaGosOfUser.data);
  const totalRejections = aggregateRejections(wannaGosOfUser.data);
  const totalSuggestions = aggregateSuggestions(wannaGosOfUser.data);
  const activeWGsTotal = getNumOfActiveWannaGos(wannaGosOfUser.data);
  const olderWGsTotal = getNumOfOlderWannaGos(wannaGosOfUser.data);
  const linksOpenedTotal = aggregateOpenedTimes(wannaGosOfUser.data);
  const totalEngagement =
    Math.floor(
      ((totalPplGoing + totalRejections + totalSuggestions) /
        linksOpenedTotal) *
        100
    ) || 0;
  const totalSuccessRatio =
    Math.floor((totalPplGoing / linksOpenedTotal) * 100) || 0;

  return (
    <>
      {wannaGosOfUser.isSuccess && (
        <>
          <h2 className='welcome'>Welcome {userToRender.data.name}!</h2>
          <div className='testingGrid'>
            <div className='insideGrid'>
              <DonutChart
                going={totalPplGoing}
                maybe={totalSuggestions}
                notGoing={totalRejections}
              />
             
            </div>
            <div className='insideGrid'>
              <RadialChart
                engagement={totalEngagement}
                successRatio={totalSuccessRatio}
              />
           
            </div>
            <div className='insideGrid'>
              <TotalWannaGosChart
                active={activeWGsTotal}
                older={olderWGsTotal}
              />
            </div>
          </div>
          <div className='justCreatedWannaGo'>
            <h2>These are your wannagos:</h2>
            {getActiveWGsAndSort(wannaGosOfUser.data).map((wannaGo) => {
              return (
                <div
                  className=''
                  target='blank'
                 
                  
                  key={wannaGo._id}
                >
                  <WannaGoCard
                    // key={wannaGo._id}
                    wannaGo={wannaGo}
                    refetch={wannaGosOfUser.refetch}
                    // userName={user.name}
                  />
                </div>
              );
            })}
          </div>{' '}
        </>
      )}
    </>
  );
};

export default UserDashboard;



