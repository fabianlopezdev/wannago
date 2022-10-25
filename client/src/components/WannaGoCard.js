//Internal dependencies
import { dateFormatter } from '../utils/helperFunctions';
import './WannaGoCard.css';

const WannaGoCard = ({ wannaGo }) => {
  const dateTime = dateFormatter(wannaGo.when);
  return (
    <div className='wannaGoCardContainer'>
      <div>
          <h5>What:</h5>{' '}
          <strong className='description'> {wannaGo.what}</strong>
      </div>
      <div>
          <h5>Where:</h5>{' '}
          <strong className='description'> {wannaGo.where}</strong>
      </div>
      <div>
          <h5>When:</h5>
          <strong className='description'>
            {dateTime.wannaGoFormat}, At {dateTime.time}
          </strong>
      </div>
    </div>
  );
};


export default WannaGoCard;





