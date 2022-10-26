//External dependencies
import { useEffect, useState } from 'react';

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
  aggregateSuccessRatio,
  aggregateEngagement,
  aggregatePplGoing,
  aggregateRejections,
  aggregateSuggestions,
  aggregateOpenedTimes,
  getActiveWGsAndSort,
} from '../../utils/helperFunctions';
import { useQuery } from 'react-query';
import { CLIENT_PORT, URL } from '../../utils/config';

import WannaGoCard from '../../components/WannaGoCard';

import '../../components/guestLinkPageOptions/MaybeOption.css';

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
  console.log('wannagos to render', wannaGosOfUser)
  
  if (justCreatedWG) {
    console.log('wannagoID', wannaGo._id);
    putOwnerToWannaGo(wannaGo._id, userToRender._id);
    setJustCreatedWG(false);
    return;
  }
  if (userToRender.isLoading || wannaGosOfUser.isLoading) return <p>Loading...</p>;
  if (userToRender.isError || wannaGosOfUser.isError) return <p>Error</p>;


  const totalWGs = wannaGosOfUser.data.length;
  const totalPplGoing = aggregatePplGoing(wannaGosOfUser.data);
  const totalRejections = aggregateRejections(wannaGosOfUser.data);
  const totalSuggestions = aggregateSuggestions(wannaGosOfUser.data);
  const activeWGsTotal = getNumOfActiveWannaGos(wannaGosOfUser.data);
  const olderWGsTotal = getNumOfOlderWannaGos(wannaGosOfUser.data);
  const linksOpenedTotal = aggregateOpenedTimes(wannaGosOfUser.data);
  const totalEngagement = aggregateEngagement(wannaGosOfUser.data);
  const totalSuccessRatio = aggregateSuccessRatio(wannaGosOfUser.data);

  return (
    <>
      <h2 className='welcome'>Welcome {userToRender.data.name}!</h2>
      <div className='testingGrid'>
        <div className='insideGrid'>
          <h4>Success Ratio</h4>
          <div>
            {Math.floor((totalPplGoing / linksOpenedTotal) * 100) || 0}%
          </div>
        </div>
        <div className='insideGrid'>
          <h4>Engagement</h4>
          <div>
            {Math.floor(
              ((totalPplGoing + totalRejections + totalSuggestions) /
                linksOpenedTotal) *
                100
            ) || 0}
            %
          </div>
        </div>
        <div className='insideGrid'>
          <div>{linksOpenedTotal}</div>
          <h4>Links Clicked</h4>
        </div>
        <div className='insideGrid'>
          <div>{activeWGsTotal || 0}</div>
          <h4>Active WannaGos</h4>
        </div>
        <div className='insideGrid'>
          <div>{totalPplGoing}</div>
          <h4>People going to your WannaGos</h4>
        </div>
        <div className='insideGrid'>
          <div>{totalRejections}</div>
          <h4>People that can't go</h4>
        </div>
        <div className='insideGrid'>
          <h4>You have</h4>
          <div>{totalSuggestions}</div>
          <h4>suggestions in total</h4>
        </div>
        <div className='insideGrid'>
          <div>{olderWGsTotal || 0}</div>
          <h4>WannaGos are expired</h4>
        </div>

        <div className='insideGrid'>
          <h4>You've created a</h4>
          <div>{totalWGs || 0}</div>
          <h4>WannaGos</h4>
        </div>
      </div>
      <h2 className='justCreatedWannaGo'>These are your wannagos:</h2>
      <div className='holdWannaGos'>
        {getActiveWGsAndSort(wannaGosOfUser.data).map((wannaGo) => {
          return (
            <a
              target='blank'
              href={`${URL}${CLIENT_PORT}/user/wannago/stats/${wannaGo._id}`}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              key={wannaGo._id}
            >
              <WannaGoCard
                // key={wannaGo._id}
                wannaGo={wannaGo}
                // userName={user.name}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default UserDashboard;

