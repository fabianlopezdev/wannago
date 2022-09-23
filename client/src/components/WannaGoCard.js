import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import '../css/WannaGoCard.css';
import { getWannaGoById } from '../utils/apiServices';
const dayjs = require('dayjs');

const WannaGoCard = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/card/id');

  const [wannaGo, setwannaGo] = useState({});

  useEffect(async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  },[]);

  // console.log(getTheWanna())
  console.log(wannaGo);
  const dateTime = dayjs(wannaGo.when);
  const day = dateTime.format('DD');
  const month = dateTime.format('MMMM');
  const year = dateTime.format('YYYY');
  const time = dateTime.format('hh:mmA');

  return (
    <>
      <h1 className='see'>What a Plan!</h1>

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
            On {month} {day}, {year}
          </h1>
          <h1>At {time}</h1>
        </div>
      </div>
      <h1 className='see'>Ask if they wannaGo!</h1>
      <h1 className='see'>{}</h1>
    </>
  );
};

export default WannaGoCard;

