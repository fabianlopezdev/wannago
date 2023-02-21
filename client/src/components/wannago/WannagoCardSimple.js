//Internal dependencies
import { dateFormatter } from '../../utils/helperFunctions';
import './wannagoCard.css';

const WannaGoCardSimple = ({ wannago}) => {
  
  const dateTime = dateFormatter(wannago.when);
  

  return (
    <div className='wgCardContainer'>
      <div className='wgWhen'>
        <h2>
          <strong>{dateTime.day}</strong>
        </h2>
        <h4>{dateTime.month}</h4>
      </div>
      <div className='wgDescription'>
        <div className='wannaGoCardInfoContainer'>
          <div>
            <h2 className='title'>
              <strong>{wannago.what}</strong>
            </h2>
          </div>
          <div className='description'>
            {`${dateTime.time} - ${dateTime.wannaGoFormat}`}
            <div>{wannago.where}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WannaGoCardSimple;

