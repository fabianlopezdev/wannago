//External dependencies
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

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
import WannaGoCardDashboard from '../WannaGoCardDashboard';
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
  const [ totalWannaGos, setTotalWannaGos]= useState();
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
      console.log('inside useeeer', user);
      await putOwnerToWannaGo(wannaGo._id, userToRender._id);
      const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
      setAllUserWGs(allUserWannaGos);
      setJustCreatedWG(false);
      return;
    }
    const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
    setAllUserWGs(allUserWannaGos);
    setTotalWannaGos(allUserWannaGos.length + 1)
    setTotalPplGoing(aggregatePplGoing(allUserWannaGos));
    setTotalRejections(aggregateRejections(allUserWannaGos));
    setTotalSuggestions(aggregateSuggestions(allUserWannaGos));
    setNumOfActiveWannaGos(getNumOfActiveWannaGos(allUserWannaGos));
    setNumOfOlderWannaGos(getNumOfOlderWannaGos(allUserWannaGos));
    setNumOfTimesLinksOpened(aggregateOpenedTimes(allUserWannaGos));
    setTotalEngagement(aggregateEngagement(allUserWannaGos));
    setTotalSuccessRatio(aggregateSuccessRatio(allUserWannaGos));
    console.log('this is all userWannago', allUserWannaGos);
    console.log('this is setted, ', allUserWGs);
  };

  return (
    <>
      <h2>{user.name} You are here</h2>
      <div className='testing-grid'>
        <div>
          <p>Number of times your links were opened</p>
          <div>{numOfTimesLinksOpened}</div>
        </div>
        <div>
          <p>Total of people going to your WannaGos</p>
          <div>{totalWannaGos}</div>
        </div>
        <div>
          <p>Total of active WannaGos</p>
          <div>{numOfActiveWannaGos}</div>
        </div>
        <div>
          <p>Engagement</p>
          <div>{totalEngagement}</div>
        </div>
        <div>
          <p>Success Ratio</p>
          <div>{totalSuccessRatio}</div>
        </div>
        <div>
          <p>Total of expired WannaGos</p>
          <div>{numOfOlderWannaGos}</div>
        </div>
        <div>
          <p>Total of people going to your WannaGos</p>
          <div>{totalPplGoing}</div>
        </div>
        <div>
          <p>People that can't go to your WannaGos</p>
          <div>{totalRejections}</div>
        </div>
        <div>
          <p>Total of people that have suggestions</p>
          <div>{totalSuggestions}</div>
        </div>
      </div>
      <h2>These are your wannagos:</h2>
      <div>
        {allUserWGs &&
          allUserWGs.map((wannaGo) => {
            return (
              <a
                href={`${URL}${CLIENT_PORT}/user/wannago/stats/id=${wannaGo._id}`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}

              >
                <WannaGoCardDashboard
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































