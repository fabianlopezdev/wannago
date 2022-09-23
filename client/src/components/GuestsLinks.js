import { useEffect, useState } from 'react';
import '../css/WannaGoCard.css';
import { getWannaGoById } from '../utils/apiServices';
const {dateFormatter} = require('../utils/helperFunctions')

const WannaGoCard = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannaGo/id');

  const [wannaGo, setwannaGo] = useState({});

  useEffect(async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  },[]);
  
  const dateTime = dateFormatter(wannaGo.when)

  return (
    <>
      <h1 className='see'>Fabi wants to know if you wannaGo</h1>

      <div className='everything'>
        <div>
          {/* <h1>THis is my event</h1> */}
          <h1>{wannaGo.what}</h1>
        </div>
        <div>
          {/* <h1>THis is my event</h1> */}
          <h1>At {wannaGo.where}</h1>
        </div>
        {/* <h1>THis is my event</h1> */}
        <div>
          <h1>
            On {dateTime.month} {dateTime.day}, {dateTime.year}
          </h1>
          <h1>At {dateTime.time}</h1>
        </div>
      </div>
      {/* <h1 className='see'>Ask if they wannaGo!</h1>
      <h1 className='see'>{}</h1> */}
    </>
  );
};

export default WannaGoCard;

