import { useEffect, useState } from 'react';
import '../css/WannaGoCard.css';
import { getWannaGoById } from '../utils/apiServices';
import WannaGoCard from './WannaGoCard';

const GuestLink = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannaGo/id');

  const [wannaGo, setwannaGo] = useState({});

  useEffect(async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  }, []);

  return (
    <>
      <h1 className='see'>Fabi wants to know if you wannaGo</h1>
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
    </>
  );
};

export default GuestLink;

