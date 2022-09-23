import { useEffect, useState } from 'react';
import '../css/WannaGoCard.css';
import { getWannaGoById } from '../utils/apiServices';
import WannaGoCard from './WannaGoCard';

const PlanCreated = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/card/id');

  const [wannaGo, setwannaGo] = useState({});

  useEffect(async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  }, []);

  return (
    <>
      <h1 className='see'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
      <h1 className='see'>Ask if they wannaGo!</h1>
      <h3 className='see'>
        Share this link:
        <a target='blank' href={`http://localhost:3000/wannaGo/id=${id}`}>
          &nbsp;http://localhost:3000/wannaGo/id={id}
        </a>
      </h3>
    </>
  );
};

export default PlanCreated;





