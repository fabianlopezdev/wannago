//External dependencies
import { useEffect, useState } from 'react';
import { Alert } from 'bootstrap';
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import { getUserWannagos } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  activeWannagosNumber,
  olderWannagosNumber,
  // aggregateSuccessRatio,
  // aggregateEngagement,
  aggregateAttending,
  aggregateRejections,
  aggregateSuggestions,
  aggregateLinksOpened,
  activeSortedWannagos,
} from '../../utils/helperFunctions';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CLIENT_PORT, URL } from '../../utils/config';
import {
  DonutChart,
  RadialChart,
  TotalWannaGosChart,
} from '../../components/charts';
import WannaGoCard from '../../components/wannago/WannagoCard';

import '../../components/guestLinkPageOptions/Options.css';
import './dashboard.css';

const Dashboard = ({ wannago }) => {
  const { currentUser } = useAuth();

  const queryEnabled = currentUser !== null;

  const {
    data: userWannagos,
    isLoading,
    isError,
  } = useQuery(
    ['wannagos', currentUser],
    () => getUserWannagos(currentUser.uid),
    {
      enabled: queryEnabled, // enable query only when currentUser is set
    }
  );

  // console.log('userWannagos',userWannagos)

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry, something went wrong. Please try refreshing the page.
      </Alert>
    );
  //     console.log('wannagos', wannagos)
  // const totalWGs = wannagos.length;
  // const totalPplGoing = aggregatePplGoing(wannagos);
  // const totalRejections = aggregateRejections(wannagos);
  // const totalSuggestions = aggregateSuggestions(wannagos);
  // const activeWGsTotal = getNumOfactiveSortedWannagos(wannagos);
  // const olderWGsTotal = getNumOfOlderWannaGos(wannagos);
  // const linksOpenedTotal = aggregateOpenedTimes(wannagos);
  // const totalEngagement =
  //   Math.floor(
  //     ((totalPplGoing + totalRejections + totalSuggestions) /
  //       linksOpenedTotal) *
  //       100
  //   ) || 0;
  // const totalSuccessRatio =
  //   Math.floor((totalPplGoing / linksOpenedTotal) * 100) || 0;

  return (
    <>
      <div className='mainUserDashBoard'>
        {currentUser && (
          <>
            <h2 className='welcome'>Welcome {currentUser.displayName}!</h2>
            {/* <div className='statsGrid'>
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
            </div> */}
            <h2 className='title'>These are your wannagos:</h2>
            <div className='wgCardsGrid'>
              {activeSortedWannagos(userWannagos).map((wannago) => {
                return (
                    <WannaGoCard key={wannago.dateCreated}
                      wannago={wannago}
                    />
                );
              })}
            </div>{' '}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;


