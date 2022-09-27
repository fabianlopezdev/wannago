//Internal dependencies
import { dateFormatter } from '../utils/helperFunctions';

const WannaGoCard = ({ wannaGo }) => {
  const dateTime = dateFormatter(wannaGo.when);
 
  return (
    <div className='everything'>
      <div>
        <h4>
          <h3>What:</h3> <strong> {wannaGo.what}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <h3>Where:</h3> <strong> {wannaGo.where}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <h3>When:</h3>
          <strong>
            {dateTime.wannaGoFormat} {dateTime.time}
          </strong>
        </h4>
      </div>
    </div>
  );
};

export default WannaGoCard;



