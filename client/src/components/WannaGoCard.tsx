import { dateFormatter } from '../utils/helperFunctions';

type Props = { wannaGo: any}

const WannaGoCard = ({ wannaGo } : Props) => {
  const dateTime = dateFormatter(wannaGo.when);
  return (
    <div className='wannaGoCardContainer'>
      <div>
        <h4>
          <h3>What:</h3>{' '}
          <strong className='description'> {wannaGo.what}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <h3>Where:</h3>{' '}
          <strong className='description'> {wannaGo.where}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <h3>When:</h3>
          <strong className='description'>
            {dateTime.wannaGoFormat}, At {dateTime.time}
          </strong>
        </h4>
      </div>
    </div>
  );
};

export default WannaGoCard;
