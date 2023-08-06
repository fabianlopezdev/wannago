import { useEffect, useState } from 'react';
import WannaGoCard from '../../components/wannago/WannagoCard';
import { getWannagoByDateCreated } from '../../utils/apis/wannagoApiServices/getWannagos';

import { useNavigate, useParam, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Alert } from 'bootstrap';
import './wannagoStats.css';

const WannagoStats = () => {
  const location = useLocation();
  const dateCreated = location.state.data.dateCreated;

  const {
    status,
    data: wannago,
    error,
  } = useQuery(
    ['wannago', dateCreated],
    () => getWannagoByDateCreated(dateCreated),
    { keepPreviousData: true }
  );

  if (status === 'loading') {
    return <div>Loading...</div>; // display a loading message while the data is being fetched
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>; // display an error message if the fetch failed
  }

  let peopleGoingCount;
  let peopleSuggestingCount;
  let peopleNotGoingCount;
  let peopleGoing;
  let suggestions;

  if (wannago) {
    console.log('there is a wannago');
    peopleGoing = wannago.ppl_going ? Object.keys(wannago.ppl_going) : null;
    suggestions = wannago.suggestion_box
      ? Object.keys(wannago.suggestion_box)
      : null;
   peopleGoingCount = wannago.ppl_going
     ? Object.keys(wannago.ppl_going).length
     : 0;
    peopleSuggestingCount = wannago.suggestionBoxCounter;
    peopleNotGoingCount = wannago.rejectCounter;
  }

  return (
    <>
      <aside className='sidebar-info'>
        <p className='seen-by'>
          {wannago.openedTimes === 0 ? (
            'No one has seen it yet'
          ) : wannago.openedTimes === 1 ? (
            <>
              {' '}
              Seen by <strong>{wannago.openedTimes}</strong> person
            </>
          ) : (
            <>
              {' '}
              Seen by <strong>{wannago.openedTimes}</strong> people
            </>
          )}
        </p>

        <WannaGoCard wannago={wannago} />
      </aside>
      <section className='info-container'>
        <article className='stats-container'>
          <div className='counters-box-info'>
            {peopleGoingCount === 1 ? (
              <>
                <h6 className='counter-description'>A person wannaGo:</h6>
                <p className='counter'>1</p>
              </>
            ) : (
              <>
                <h6 className='counter-description'>People that wannaGo:</h6>
                <p className='counter'>{peopleGoingCount}</p>
              </>
            )}
          </div>
          <div className='counters-box-info'>
            {peopleSuggestingCount === 1 ? (
              <>
                <h6 className='counter-description'>A person may wannaGo:</h6>
                <p className='counter'>1</p>
              </>
            ) : (
              <>
                <h6 className='counter-description'>
                  People that may wannaGo:
                </h6>
                <p className='counter'>{peopleSuggestingCount}</p>
              </>
            )}
          </div>
          <div className='counters-box-info'>
            {peopleNotGoingCount === 1 ? (
              <>
                <h6 className='counter-description'>
                  A person don't wannaGo/cannotGo:
                </h6>
                <p className='counter'>1</p>
              </>
            ) : (
              <>
                <h6 className='counter-description'>
                  People that don't wannaGo/cannotGo:
                </h6>
                <p className='counter'>{peopleNotGoingCount}</p>
              </>
            )}
          </div>
        </article>
        <article className='detail-info-container'>
          {wannago.ppl_going && (
            <div className='people-going-container'>
              <h1 className='titles'>People Attending</h1>
              {peopleGoing.map((key) => {
                return (
                  <p key={key} className='people-going'>{`${key} ${wannago.ppl_going[key]}`}</p>
                );
              })}
            </div>
          )}
          {wannago.suggestion_box && (
            <div className='suggestions-container'>
              <h1 className='titles'>Suggestions</h1>
              {suggestions.map((key) => {
                return (
                  <>
                    <div key={key} className='message'>
                      <h5>{`${key} said:`}</h5>
                      <p>{wannago.suggestion_box[key]}</p>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default WannagoStats;


