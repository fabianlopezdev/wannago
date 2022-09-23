import {dateFormatter} from '../utils/helperFunctions'

const WannaGoCard = ({wannaGo}) => {
  const dateTime = dateFormatter(wannaGo.when);
  return (
  <div className='everything'>
    <div>
      <h1>{wannaGo.what}</h1>
    </div>
    <div>
      <h1>At {wannaGo.where}</h1>
    </div>
    <div>
      <h1>
        On {dateTime.month} {dateTime.day}, {dateTime.year}
      </h1>
      <h1>At {dateTime.time}</h1>
    </div>
  </div>
  )
};



export default WannaGoCard;