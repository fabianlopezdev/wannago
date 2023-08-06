//Internal dependencies
import { dateFormatter } from '../../utils/helperFunctions';
import './wannagoCard.css';

const WannaGoCardSimple = ({ wannago}) => {
  
  const dateTime = dateFormatter(wannago.when);
  

  return (
    <article className='card-container'>
      <aside className='date-aside'>
        <h2>
          <strong>{dateTime.day}</strong>
        </h2>
        <h4>{dateTime.month}</h4>
      </aside>
      <div className='info-and-options-container-simple'>
        <div className='info-container'>
          <header>
            <h2 className='title'>{wannago.what}</h2>
          </header>
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
    </article>
  );
};

export default WannaGoCardSimple;








