import { useEffect, useState } from 'react';
import WannaGoCard from '../../components/wannago/WannagoCard';
import { getWannagoByDateCreated } from '../../utils/apis/wannagoApiServices/getWannaGos';

import { useNavigate, useParam, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Alert } from 'bootstrap';
import './wannagoStats.css';

const WannagoStats = () => {
  const location = useLocation();
  const wannago = location.state.data;

  return (
    <>
      <div className='mainStatsContainer'>
        <div className='statsTop'></div>
      </div>
      <div className='wgStatsContainer'>
        <div className='wgPart'>
          <div className='seenBy'>
            Seen by <strong>{wannago.openedTimes}</strong> people
          </div>
          <div className='seen'>
            <WannaGoCard wannago={wannago} />
          </div>
        </div>
        <div className='statsPartContainer'>
          <div className='statsPart'>
            <div className='numsBox'>
              {wannago.ppl_going ? (
                <h1 className='num'>{Object.keys(wannago.ppl_going).length}</h1>
              ) : (
                <h1 className='num'>0</h1>
              )}
              <div>people wannaGo</div>
            </div>
            <div className='numsBox'>
              <h1 className='num'>{wannago.suggestionBoxCounter || 0}</h1>
              <div>people may go</div>
            </div>
            <div className='numsBox'>
              <h1 className='num'>{wannago.rejectCounter || 0}</h1>
              <div>people can't go</div>
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

