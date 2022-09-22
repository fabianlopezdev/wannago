import '../css/WannaGoCard.css';
const dayjs = require('dayjs');

const WannaGoCard = ({ newWannaGo }) => {
  const dateTime = dayjs(newWannaGo.when)
  const day = dateTime.format('DD')
  const month = dateTime.format('MMMM');
  const year = dateTime.format('YYYY');
  const time = dateTime.format('hh:mmA');

  return (
    <>
      <h1 className='see'>What a Plan!</h1>

      <div className='everything'>
        <div>
          {/* <h1>THis is my event</h1> */}
          <h1>{newWannaGo.what}</h1>
        </div>
        <div>
          {/* <h1>THis is my event</h1> */}
          <h1>At {newWannaGo.where}</h1>
        </div>
        {/* <h1>THis is my event</h1> */}
        <div>
          <h1>
            On {month} {day}, {year}
          </h1>
          <h1>At {time}</h1>
        </div>
      </div>
      <h1 className='see'>Ask if they wannaGo!</h1>
      {
        
      }
    </>
  );
};

export default WannaGoCard;












