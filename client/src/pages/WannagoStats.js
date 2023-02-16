import { useEffect, useState } from 'react';
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';

import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Alert } from 'bootstrap';
import './wannagoStats.css';

const WannaGoStats = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery('wannagos', () =>
    getWannaGoById(id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div className='mainStatsContainer'>
        <div className='statsTop'></div>
      </div>
      <div className='wgStatsContainer'>
        <div className='wgPart'>
          <div className='seenBy'>
            Seen by <strong>{data.openedTimes}</strong> people
          </div>
          <div className='seen'>

          <WannaGoCard wannaGo={data} />
          </div>
        </div>
        <div className='statsPartContainer'>
          <div className='statsPart'>
            <div className='numsBox'>
              {data.ppl_going ? <h1 className='num'>{Object.keys(data.ppl_going).length}</h1> : <h1 className='num'>0</h1>}
              <div>people wannaGo</div>
            </div>
            <div className='numsBox'>
              <h1 className='num'>{data.suggestionBoxCounter || 0}</h1>
              <div>people may go</div>
            </div>
            <div className='numsBox'>
              <h1 className='num'>{data.rejectCounter || 0}</h1>
              <div>people can't go</div>
            </div>
          </div>
          <div className='goingAndSuggestions'>
            {data.ppl_going && <div className='goingContainer'>
              <h1 className='goingandsuggestiontitle'>People Going</h1>
              {Object.keys(data.ppl_going).map((key) => {
                return (
                  <div className='going'>{`${key} ${data.ppl_going[key]}`}</div>
                );
              })}
            </div>}
            {data.suggestion_box && <div className='suggestionContainer'>
              <h1 className='goingandsuggestiontitle'>Suggestions</h1>
              {Object.keys(data.suggestion_box).map((key) => {
                return (
                  <>
                    <div className='msg'>
                      <h5>{`${key} said`}</h5>
                      <div>{data.suggestion_box[key]}</div>
                    </div>
                  </>
                );
              })}
            </div>}
          </div>
        </div>
      </div>

      <div className='statsBottom'></div>
      <div />
    </>
  );
};

export default WannaGoStats;

