import { useEffect, useState } from 'react';
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import {
  getEngagementOfWannaGo,
  getSuccessRatioOfWannaGo,
} from '../utils/helperFunctions';
import { deleteWannaGo } from '../utils/apis/wannagoApiServices/deleteWannaGos';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const WannaGoStats = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/user/wannago/stats/id');
  console.log('this is id', id);

  const [wannaGo, setWannaGo] = useState({});
  const [copied, setCopied] = useState('Copy');
  const navigate = useNavigate();

  useEffect(() => {
    promiseHandler();
  }, []);

  const promiseHandler = async () => {
    try {
      const queriedWannaGo = await getWannaGoById(id);
      setWannaGo(queriedWannaGo);
    } catch (e) {
      console.log(
        `Error in the promiseHandler func of GuestLinks.js. Error: ${e}`
      );
    }
  };
  const handleClick = () => {
    navigator.clipboard.writeText(wannaGo.guestLink);
    setCopied('Copied');
  };

  const handleDelete = () => {
    console.log('id', id);
    console.log('this wannaGo');
    deleteWannaGo(id);
    navigate('/user/dashboard');
  };

  return (
    <>
      <WannaGoCard wannaGo={wannaGo} />
      <div>
        <h4 className='justCreatedWannaGoSedondPart'>Guest Link:</h4>
        {wannaGo.guestLink && (
          <div className='justCreatedWannaGo'>
            <a
              href={wannaGo.guestLink}
              target='blank'
            >
              {wannaGo.guestLink}
            </a>
            <button
              className='buttonCopy'
              onClick={handleClick}
            >
              {copied}
            </button>
            <div clasaName='buttonDelete'>
              <button
                className='button'
                onClick={handleDelete}
              >
                Delete It!
              </button>
              <br />
            </div>
          </div>
        )}
      </div>
      <br />
      <h4 className='justCreatedWannaGo'>See how well the WannaGo is doing</h4>
      <br />
      <div className='testingGrid'>
        <div className='insideGrid'>
          <h4>Number of times the link was opened</h4>
          {wannaGo.openedTimes}
        </div>
        <div className='insideGrid'>
          <h4>People Going</h4>
          {wannaGo.goingCounter}
        </div>
        <div className='insideGrid'>
          <h4>People that can't go</h4>
          {wannaGo.rejectCounter}
        </div>
        <div className='insideGrid'>
          <h4>Number of suggestions made</h4>
          {wannaGo.suggestionBoxCounter}
        </div>
        <div className='insideGrid'>
          <h4>Engagement</h4>
          {getEngagementOfWannaGo(wannaGo)}%
        </div>
        <div className='insideGrid'>
          <h4>Success Ratio</h4>
          {Math.floor(getSuccessRatioOfWannaGo(wannaGo))}%
        </div>
      </div>
    </>
  );
};

export default WannaGoStats;







