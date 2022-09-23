import { useEffect, useState } from 'react';
import '../css/GuestLinks.css';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import WannaGoCard from './WannaGoCard';
import YesOption from './YesOption';
import NoOption from './NoOption';
import MaybeOption from './MaybeOption';

const GuestLink = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannaGo/id');

  const [wannaGo, setwannaGo] = useState({});
  const [optionYes, setoptionYes] = useState(false);
  const [optionNo, setoptionNo] = useState(false);
  const [optionMaybe, setoptionMaybe] = useState(false);

  useEffect(async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  }, []);

  const handleYes = () => {
    setoptionNo(false);
    setoptionMaybe(false);

    setoptionYes(true)
  };

  const handleNo = () => {
    setoptionMaybe(false);
    setoptionYes(false)

    setoptionNo(true);
  }

  const handleMaybe = () => {
    setoptionYes(false);
    setoptionNo(false);

    setoptionMaybe(true);
  };

  const handleOptions = () => {

  }
  return (
    <>
      <h1 className='see'>Fabi wants to know if you wannaGo</h1>
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
      <div className='buttons'>
        <button
          className='button'
          onClick={handleNo}
        >
          I can't
        </button>
        <button
          className='button important'
          onClick={handleYes}
        >
          I wannaGo!
        </button>
        <button
          className='button'
          onClick={handleMaybe}
        >
          Maybe
        </button>
      </div>
      <div className='see'>
        {optionYes ? <YesOption id={id}></YesOption> : optionNo ? <NoOption></NoOption> : optionMaybe ? <MaybeOption></MaybeOption> : null}
      </div>
    </>
  );
};

export default GuestLink;


















