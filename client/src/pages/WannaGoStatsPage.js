import { useEffect, useState } from 'react';
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import {
  getEngagementOfWannaGo,
  getSuccessRatioOfWannaGo,
} from '../utils/helperFunctions';
import { deleteWannaGo } from '../utils/apis/wannagoApiServices/deleteWannaGos';
import { useNavigate, useParams } from 'react-router-dom';
import {useQuery} from 'react-query'

const WannaGoStats = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState('Copy');
  const navigate = useNavigate();

  const { data, isLoading, isError} = useQuery('wannagos', () => getWannaGoById(id));

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>


  const onClickCopyLink = () => {
    navigator.clipboard.writeText(data.guestLink);
    setCopied('Copied');
  };

  const handleDelete = async () => {
    await deleteWannaGo(id);
    navigate('/user/dashboard');
  };

  return (
    <>
      <WannaGoCard wannaGo={data} />
      <div>
        <h4 className='justCreatedWannaGoSedondPart'>Guest Link:</h4>
        {
          <div className='justCreatedWannaGo'>
            <a
              href={data.guestLink}
              target='blank'
            >
              {data.guestLink}
            </a>
            <button
              className='buttonCopy'
              onClick={onClickCopyLink}
            >
              {copied}
            </button>
            <div className='buttonDelete'>
              <button
                className='button'
                onClick={handleDelete}
              >
                Delete It!
              </button>
              <br />
            </div>
          </div>
        }
      </div>
      <br />
      <h4 className='justCreatedWannaGo'>See how well the WannaGo is doing</h4>
      <br />
      <div className='testingGrid'>
        <div className='insideGrid'>
          <h4>Number of times the link was opened</h4>
          {data.openedTimes}
        </div>
        <div className='insideGrid'>
          <h4>People Going</h4>
          {data.goingCounter}
        </div>
        <div className='insideGrid'>
          <h4>People that can't go</h4>
          {data.rejectCounter}
        </div>
        <div className='insideGrid'>
          <h4>Number of suggestions made</h4>
          {data.suggestionBoxCounter}
        </div>
        <div className='insideGrid'>
          <h4>Engagement</h4>
          {getEngagementOfWannaGo(data)}
        </div>
        <div className='insideGrid'>
          <h4>Success Ratio</h4>
          {getSuccessRatioOfWannaGo(data)}
        </div>
      </div>
    </>
  );
};

export default WannaGoStats;

