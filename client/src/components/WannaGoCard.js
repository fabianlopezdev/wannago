//Internal dependencies
import { dateFormatter } from '../utils/helperFunctions';
import './WannaGoCard.css';
import {
  IoTrashOutline,
  IoShareOutline,
  IoArrowRedoOutline,
} from 'react-icons/io5';
import { deleteWannaGo } from '../utils/apis/wannagoApiServices/deleteWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';

const WannaGoCard = ({ wannaGo, refetch }) => {
  const dateTime = dateFormatter(wannaGo.when);
  console.log('this is wannagooo', wannaGo);
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
              <strong>{wannaGo.what}</strong>
            </h2>
          </div>
          <div className='description'>
            {`${dateTime.time} - ${dateTime.wannaGoFormat}`}
          </div>
          <div className='description'>{wannaGo.where}</div>
        </div>
        <div className='options'>
          <div className='charts'>
            <IoShareOutline size={25} />
          </div>
          <div
            className='charts'
            onClick={() => {
              deleteWannaGo(wannaGo._id);
              refetch();
            }}
          >
            <IoTrashOutline size={25} />
          </div>
          <div className='charts'>
            <a
              href={`${URL}${CLIENT_PORT}/user/wannago/stats/${wannaGo._id}`}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <IoArrowRedoOutline size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WannaGoCard;





