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

  let attendesCount;
  let suggestionsCount;
  let rejectionsCount;
  let attendees;
  let suggestions;

  if (wannago) {
    console.log('there is a wannago', wannago);
    attendees = wannago.attendeesCount ? Object.keys(wannago.attendees) : null;
    suggestions = wannago.suggestions
      ? Object.keys(wannago.suggestions)
      : null;
   attendesCount = wannago.attendeesCount
     ? wannago.attendeesCount
     : 0;
    suggestionsCount = wannago.suggestionsCount;
    rejectionsCount = wannago.rejectionsCount;
  }

  return (
    <>
      <aside className='sidebar-info'>
        <p className='seen-by'>
          {wannago.clickCount === 0 ? (
            'No one has seen it yet'
          ) : wannago.clickCount === 1 ? (
            <>
              {' '}
              Seen by <strong>{wannago.clickCount}</strong> person
            </>
          ) : (
            <>
              {' '}
              Seen by <strong>{wannago.clickCount}</strong> people
            </>
          )}
        </p>

        <WannaGoCard wannago={wannago} />
      </aside>
      <section className='info-container'>
        <article className='stats-container'>
          <div className='counters-box-info'>
            {attendesCount === 1 ? (
              <>
                <h6 className='counter-description'>A person wannaGo:</h6>
                <p className='counter'>1</p>
              </>
            ) : (
              <>
                <h6 className='counter-description'>People that wannaGo:</h6>
                <p className='counter'>{attendesCount}</p>
              </>
            )}
          </div>
          <div className='counters-box-info'>
            {suggestionsCount === 1 ? (
              <>
                <h6 className='counter-description'>A person may wannaGo:</h6>
                <p className='counter'>1</p>
              </>
            ) : (
              <>
                <h6 className='counter-description'>
                  People that may wannaGo:
                </h6>
                <p className='counter'>{suggestionsCount}</p>
              </>
            )}
          </div>
          <div className='counters-box-info'>
            {rejectionsCount === 1 ? (
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
                <p className='counter'>{rejectionsCount}</p>
              </>
            )}
          </div>
        </article>
        <article className='detail-info-container'>
          {wannago.attendeesCount && (
            <div className='people-going-container'>
              <h1 className='titles'>People Attending</h1>
              {attendees.map((attendee) => {
                console.log('attendee', attendee);
                return (
                  <p key={attendee} className='people-going'>{`${attendee} ${wannago.attendees[attendee]}`}</p>
                );
              })}
            </div>
          )}
          {wannago.suggestions && (
            <div className='suggestions-container'>
              <h1 className='titles'>Suggestions</h1>
              {suggestions.map((key) => {
                return (
                  <>
                    <div key={key} className='message'>
                      <h5>{`${key} said:`}</h5>
                      <p>{wannago.suggestions[key]}</p>
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


