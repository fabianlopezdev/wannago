//Internal dependencies
import { dateFormatter } from '../utils/helperFunctions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deleteWannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';

const WannaGoCard = ({ wannaGo }) => {
  const [copied, setCopied] = useState('Copy');
  const dateTime = dateFormatter(wannaGo.when);
  const handleClick = () => {
    navigator.clipboard.writeText(wannaGo.guestLink);
    setCopied('Copied')
  }

  const handleDelete = async () => {
    console.log('I am here')
    console.log('this wannaGo', this.props.WannaGo)
    // await deleteWannaGo(this.wannaGo)
  }
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
      {/* <div>
        <h4>Guest Link:</h4>
        {wannaGo.guestLink && (<div><a
          href='http://localhost:3001/wannago/guest-link/id=6332ff751b7dcf3f491aa7d5'
          target='blank'
        >
          {wannaGo.guestLink}
        </a>
        <button onClick={handleClick}>{copied}</button></div>)}
      </div>
      <div>
        <button onClick={handleDelete}>Delete WannaGo</button>
      </div> */}
    </div>
  );
};

export default WannaGoCard;



