// External dependencies
import { Alert } from 'bootstrap';
import { useEffect } from 'react';

// Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import { getUserWannagos } from '../../utils/apis/wannagoApiServices/getWannagos';
import {
  activeWannagosCount,
  olderWannagosCount,
  aggregateAttending,
  aggregateRejections,
  aggregateSuggestions,
  aggregateLinksClicked,
  activeSortedWannagos,
} from '../../utils/helperFunctions';
import { useQuery } from 'react-query';
import {
  DonutChart,
  RadialChart,
  TotalWannaGosChart,
} from '../../components/charts';
import WannaGoCard from '../../components/wannago/WannagoCard';

import '../../components/wannagoLinkPage/options.css';
import './dashboard.css';

const Dashboard = ({ wannago, setIsCreated }) => {
  const { currentUser, userToken } = useAuth();

  const queryEnabled = currentUser !== null;

  useEffect(() => {
    setIsCreated(false);
  }, [setIsCreated]);

  const {
    data: userWannagos,
    isLoading,
    isError,
  } = useQuery(
    ['wannagos', currentUser],
    () => getUserWannagos(currentUser.uid, userToken),
    {
      enabled: queryEnabled, // enable query only when currentUser is set
    }
  );

  console.log('userWannagos', userWannagos);
  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry, something went wrong. Please try refreshing the page.
      </Alert>
    );

  if (!userWannagos || userWannagos.length === 0) {
    return (
      <main className='user-dashboard-page'>
        {currentUser && (
          <>
            <h1 className='title-text'>Welcome {currentUser.displayName}!</h1>
            <p className='p-text'>
              You don't have wannagos yet. Create one to see it here.
            </p>
          </>
        )}
      </main>
    );
  }

  const activeAndSortedWannagos = activeSortedWannagos(userWannagos);
  const totalPplGoing = aggregateAttending(userWannagos);
  const totalRejections = aggregateRejections(userWannagos);
  const totalSuggestions = aggregateSuggestions(userWannagos);
  const activeWGsTotal = activeWannagosCount(userWannagos);
  const olderWGsTotal = olderWannagosCount(userWannagos);
  const linksOpenedTotal = aggregateLinksClicked(userWannagos);
  const totalEngagement =
    Math.floor(
      ((totalPplGoing + totalRejections + totalSuggestions) / linksOpenedTotal) * 100
    ) || 0;
  const totalSuccessRatio =
    Math.floor((totalPplGoing / linksOpenedTotal) * 100) || 0;

  return (
    <main className='user-dashboard-page'>
      {currentUser && (
        <>
          <h1 className='title-text'>Welcome {currentUser.displayName}!</h1>
          <article className='stats-container'>
            <div className='individual-stat-container'>
              <DonutChart
                going={totalPplGoing}
                maybe={totalSuggestions}
                notGoing={totalRejections}
              />
            </div>
            <div className='individual-stat-container'>
              <RadialChart
                engagement={totalEngagement}
                successRatio={totalSuccessRatio}
              />
            </div>
            <div className='individual-stat-container'>
              <TotalWannaGosChart
                active={userWannagos.length}
                older={olderWGsTotal}
              />
            </div>
          </article>
          <div className='wannago-cards-container'>
            {activeAndSortedWannagos.map((wannago) => (
              <WannaGoCard key={wannago.dateCreated} wannago={wannago} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
