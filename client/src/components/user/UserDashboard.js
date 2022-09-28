//External dependencies
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  putOwnerToWannaGo,
  getUserById,
} from '../../utils/apis/userApiServices/userApi';
import { getAllWannaGosOfUser } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  getTotalWannaGosCreated,
  getActiveWannaGos,
  getOlderWannaGos,
  getNumOfActiveWannaGos,
  getNumOfOlderWannaGos,
  getEngagementOfWannaGo,
  getSuccessRatioOfWannaGo,
  aggregateSuccessRatio,
  aggregateEngagement,
  aggregatePplGoing,
  aggregateRejections,
  aggregateSuggestions,
  aggregateOpenedTimes,
} from '../../utils/helperFunctions';
import WannaGoCard from '../WannaGoCard';
import { CLIENT_PORT, URL } from '../../utils/config';
import '../../css/MaybeOption.css';

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
  const [activeWannaGos, setActiveWannaGos] = useState();
  const [olderWannaGos, setOlderWannaGos] = useState();
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
    setTotalWannaGos(allUserWannaGos.length + 1);
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
          <div>{totalSuccessRatio}%</div>
        </div>
        <div className='insideGrid'>
          <h4>Engagement</h4>
          <div>{totalEngagement}%</div>
        </div>
        <div className='insideGrid'>
          <h4>Number of times your links were opened</h4>
          <div>{numOfTimesLinksOpened}</div>
        </div>
        <div className='insideGrid'>
          <h4>Total of active WannaGos</h4>
          <div>{numOfActiveWannaGos}</div>
        </div>
        <div className='insideGrid'>
          <h4>Total of people going to your WannaGos</h4>
          <div>{totalPplGoing}</div>
        </div>
        <div className='insideGrid'>
          <h4>People that can't go to your WannaGos</h4>
          <div>{totalRejections}</div>
        </div>
        <div className='insideGrid'>
          <h4>Total of people that have suggestions</h4>
          <div>{totalSuggestions}</div>
        </div>
        <div className='insideGrid'>
          <h4>Total of expired WannaGos</h4>
          <div>{numOfOlderWannaGos}</div>
        </div>

        <div className='insideGrid'>
          <h4>Total of people going to your WannaGos</h4>
          <div>{totalWannaGos}</div>
        </div>
      </div>
      <h2 className='justCreatedWannaGo'>These are your wannagos:</h2>
      <div className='holdWannaGos'>
        {allUserWGs &&
          allUserWGs
            .sort((a, b) => {return new Date(a.date) - new Date(b.date)})
            .map((wannaGo) => {
              return (
                <a
                  target='blank'
                  href={`${URL}${CLIENT_PORT}/user/wannago/stats/id=${wannaGo._id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <WannaGoCard
                    key={wannaGo._id}
                    wannaGo={wannaGo}
                  />
                </a>
              );
            })}
      </div>
    </>
  );
};

export default UserDashboard;


