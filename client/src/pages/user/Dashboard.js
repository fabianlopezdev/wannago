//External dependencies
import { Alert } from 'bootstrap';
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import { getUserWannagos } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  activeWannagosCount,
  olderWannagosCount,
  aggregateAttending,
  aggregateRejections,
  aggregateSuggestions,
  aggregateLinksClicked,
  activeSortedWannagos,
} from '../../utils/helperFunctions';
import { useQuery} from 'react-query';
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

    console.log('userWannagos', userWannagos)
  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry, something went wrong. Please try refreshing the page.
      </Alert>
    );
  

  const activeAndSortedWannagos = activeSortedWannagos(userWannagos);
  const totalActiveWannagos = activeAndSortedWannagos.length;
  const totalPplGoing = aggregateAttending(userWannagos);
  const totalRejections = aggregateRejections(userWannagos);
  const totalSuggestions = aggregateSuggestions(userWannagos);
  const activeWGsTotal = activeWannagosCount(userWannagos);
  const olderWGsTotal = olderWannagosCount(userWannagos);
  const linksOpenedTotal = aggregateLinksClicked(userWannagos);
  const totalEngagement =
    Math.floor(
      ((totalPplGoing + totalRejections + totalSuggestions) /
        linksOpenedTotal) *
        100
    ) || 0;
  const totalSuccessRatio =
    Math.floor((totalPplGoing / linksOpenedTotal) * 100) || 0;

    console.log('activeWGsTotal', totalActiveWannagos)
  return (
    <>
      <main className='user-dashboard-page'>
        {currentUser && (
          <>
            <h1 className='title-text'>Welcome {currentUser.displayName}!</h1>
            {totalActiveWannagos === 0 && (
              <p className='p-text'>You don't have wannagos yet. Create one to see it here.</p>
            )}
            {totalActiveWannagos > 0 && (
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
                    active={totalActiveWannagos}
                    older={olderWGsTotal}
                  />
                </div>
              </article>
            )}
            {totalActiveWannagos === 0 && null}
            {totalActiveWannagos === 1 && (
              <>
                <h2 className='title-text'>This is your wannago:</h2>
                <div className='wannago-cards-container'>
                  {activeAndSortedWannagos.map((wannago) => {
                    return (
                      <WannaGoCard
                        key={wannago.dateCreated}
                        wannago={wannago}
                      />
                    );
                  })}
                </div>{' '}
              </>
            )}

            {totalActiveWannagos > 1 && (
              <>
                <h2 className='title-text'>These are your wannagos:</h2>
                <div className='wannago-cards-container'>
                  {activeAndSortedWannagos.map((wannago) => {
                    return (
                      <WannaGoCard
                        key={wannago.dateCreated}
                        wannago={wannago}
                      />
                    );
                  })}
                </div>{' '}
              </>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Dashboard;
















