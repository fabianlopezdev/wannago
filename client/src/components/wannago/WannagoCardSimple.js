//Internal dependencies
import { dateFormatter } from '../../utils/helperFunctions';
import './wannagoCard.css';

const WannaGoCardSimple = ({ wannago}) => {
  
  const dateTime = dateFormatter(wannago.when);
  

  return (
    <div className='wgCardContainerSimple'>
      <div className='wgWhen'>
        <h2>
          <strong>{dateTime.day}</strong>
        </h2>
        <h4>{dateTime.month}</h4>
      </div>
      <div className='wgDescription'>
        <div className='wannaGoCardInfoContainerSimple'>
          <div>
            <h2 className='title'>
              {wannago.what}
            </h2>
          </div>
          <div className='description-simple'>
            <p className='text'>
              <strong>On</strong> {dateTime.wannaGoFormat} 
            </p>
              <p className='text'>
              <strong>At </strong> 
              {dateTime.time}
              </p>
            <p className='text'>
              <strong>At </strong>
              {wannago.where}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WannaGoCardSimple;





