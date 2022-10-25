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
  const [totalPplGoing, setTotalPplGoing] = useState(0);
  const [totalRejections, setTotalRejections] = useState(0);
  const [totalSuggestions, setTotalSuggestions] = useState(0);
  const [totalWannaGos, setTotalWannaGos] = useState();
  const [numOfActiveWannaGos, setNumOfActiveWannaGos] = useState();
  const [numOfOlderWannaGos, setNumOfOlderWannaGos] = useState();
  const [numOfTimesLinksOpened, setNumOfTimesLinksOpened] = useState();
  const [totalEngagement, setTotalEngagement] = useState();
  const [totalSuccessRatio, setTotalSuccessRatio] = useState();
  const [allUserWGs, setAllUserWGs] = useState();

  
  const { currentUser } = useAuth();
  useEffect(() => {
    handlePromise();
  }, []);

  const handlePromise = async () => {
    const userToRender = await getUserById(currentUser.uid);
    setUser(userToRender);

    if (justCreatedWG) {
      console.log('wannagoID', wannaGo._id);
      await putOwnerToWannaGo(wannaGo._id, userToRender._id);
      const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
      setAllUserWGs(allUserWannaGos);
      setJustCreatedWG(false);
      return;
    }
    const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
    setAllUserWGs(allUserWannaGos);
    setTotalWannaGos(allUserWannaGos.length);
    setTotalPplGoing(aggregatePplGoing(allUserWannaGos));
    setTotalRejections(aggregateRejections(allUserWannaGos));
    setTotalSuggestions(aggregateSuggestions(allUserWannaGos));
    setNumOfActiveWannaGos(getNumOfActiveWannaGos(allUserWannaGos));
    setNumOfOlderWannaGos(getNumOfOlderWannaGos(allUserWannaGos));
    setNumOfTimesLinksOpened(aggregateOpenedTimes(allUserWannaGos));
    setTotalEngagement(aggregateEngagement(allUserWannaGos)-100);
    setTotalSuccessRatio(Math.floor(aggregateSuccessRatio(allUserWannaGos)));
    console.log('this is all userWannago', allUserWannaGos);
    console.log('this is setted, ', allUserWGs);
  };

  return (
    <>
      <h2 className='welcome'>Welcome {user.name}!</h2>
      <div className='testingGrid'>
        <div className='insideGrid'>
          <h4>Success Ratio</h4>
          <div>
            {Math.floor((totalPplGoing / numOfTimesLinksOpened) * 100) || 0}%
          </div>
        </div>
        <div className='insideGrid'>
          <h4>Engagement</h4>
          <div>
            {Math.floor(
              ((totalPplGoing + totalRejections + totalSuggestions) /
                numOfTimesLinksOpened) *
                100
            ) || 0}
            %
          </div>
        </div>
        <div className='insideGrid'>
          <div>{numOfTimesLinksOpened}</div>
          <h4>Links Clicked</h4>
        </div>
        <div className='insideGrid'>
          <div>{numOfActiveWannaGos || 0}</div>
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
          <div>{numOfOlderWannaGos || 0}</div>
          <h4>WannaGos are expired</h4>
        </div>

        <div className='insideGrid'>
          <h4>You've created a</h4>
          <div>{totalWannaGos || 0}</div>
          <h4>WannaGos</h4>
        </div>
      </div>
      <h2 className='justCreatedWannaGo'>These are your wannagos:</h2>
      <div className='holdWannaGos'>
        {allUserWGs &&
          getActiveWGsAndSort(allUserWGs).map((wannaGo) => {
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









