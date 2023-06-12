import { useEffect, useState } from 'react';
import WannaGoCard from '../../components/wannago/WannagoCard';
import { getWannagoByDateCreated } from '../../utils/apis/wannagoApiServices/getWannaGos';

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
   if (wannago) {
    peopleGoingCount = Object.keys(wannago.ppl_going).length;
    peopleSuggestingCount = wannago.suggestionBoxCounter;
    peopleNotGoingCount = wannago.rejectCounter;

   }

  return (
    <>
      <div className='mainStatsContainer'>
        <div className='statsTop'></div>
      </div>
      <div className='wgStatsContainer'>
        <div className='wgPart'>
          <div className='seenBy'>
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
          </div>
          <div className='seen'>
            <WannaGoCard wannago={wannago} />
          </div>
        </div>
        <div className='statsPartContainer'>
          <div className='statsPart'>
            <div className='numsBox'>
              {peopleGoingCount === 1 ? (
                <>
                  <div>A person wannaGo:</div>
                  <h1 className='num'>1</h1>
                </>
              ) : (
                <>
                  <div>People that wannaGo:</div>
                  <h1 className='num'>
                    {Object.keys(wannago.ppl_going).length}
                  </h1>
                </>
              )}
            </div>
            <div className='numsBox'>
              {peopleSuggestingCount === 1 ? (
                <>
                  <div>A person may wannaGo:</div>
                  <h1 className='num'>1</h1>
                </>
              ) : (
                <>
                  <div>People that may wannaGo:</div>
                  <h1 className='num'>{peopleSuggestingCount}</h1>
                </>
              )}
            </div>
            <div className='numsBox'>
              {peopleNotGoingCount === 1 ? (
                <>
                  <div>A person don't wannaGo/cannotGo:</div>
                  <h1 className='num'>1</h1>
                </>
              ) : (
                <>
                  <div>People that don't wannaGo/cannotGo:</div>
                  <h1 className='num'>{peopleNotGoingCount}</h1>
                </>
              )}
            </div>
          </div>
          <div className='goingAndSuggestions'>
            {wannago.ppl_going && (
              <div className='goingContainer'>
                <h1 className='goingandsuggestiontitle'>People Going</h1>
                {Object.keys(wannago.ppl_going).map((key) => {
                  return (
                    <div className='going'>{`${key} ${wannago.ppl_going[key]}`}</div>
                  );
                })}
              </div>
            )}
            {wannago.suggestion_box && (
              <div className='suggestionContainer'>
                <h1 className='goingandsuggestiontitle'>Suggestions</h1>
                {Object.keys(wannago.suggestion_box).map((key) => {
                  return (
                    <>
                      <div className='msg'>
                        <h5>{`${key} said`}</h5>
                        <div>{wannago.suggestion_box[key]}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='statsBottom'></div>
      <div />
    </>
  );
};

export default WannagoStats;















