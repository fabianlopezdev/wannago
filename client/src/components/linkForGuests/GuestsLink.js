//External dependencies
import { useEffect, useState } from 'react';

//Internal dependencies
import WannaGoCard from '../WannaGoCard';
import YesOption from './YesOption';
import NoOption from './NoOption';
import MaybeOption from './MaybeOption';
import { YesButton, NoButton, MaybeButton } from './OptionButtons';
import { getWannaGoById } from '../../utils/apis/wannagoApiServices/getWannaGos';

import '../../css/GuestLinks.css';
import { putOpenedTimes } from '../../utils/apis/wannagoApiServices/putWannaGos';

const GuestLink = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannago/guest-link/id');

  const [wannaGo, setWannaGo] = useState({});
  const [option, setOption] = useState(null);

  useEffect(() => {
    promiseHandler();
  }, []);

  const promiseHandler = async () => {
    try {
      const queriedWannaGo = await getWannaGoById(id);
      await putOpenedTimes(id, ++queriedWannaGo.openedTimes);
      setWannaGo(queriedWannaGo);
    } catch (e) {
      console.log(
        `Error in the promiseHandler func of GuestLinks.js. Error: ${e}`
      );
    }
  };

  const handleClick = (e) => {
    if (e.target.innerText === 'I wannaGo!') setOption('yes');
    if (e.target.innerText === `I can't`) setOption('no');
    if (e.target.innerText === 'Maybe') setOption('maybe');
  };

  return (
    <>
      <h1 className='see'>{wannaGo.ownerName} wants to know if you wannaGo</h1>
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
      {!option ? (
        <div className='buttons'>
          <NoButton handleClick={handleClick}></NoButton>
          <YesButton handleClick={handleClick}></YesButton>
          <MaybeButton handleClick={handleClick}></MaybeButton>
        </div>
      ) : (
        <div className='see'>
          {option === 'no' && <NoOption></NoOption>}
          {option === 'yes' && <YesOption id={id}></YesOption>}
          {option === 'maybe' && <MaybeOption id={id}></MaybeOption>}
          {option === null && null}
        </div>
      )}
    </>
  );
};

export default GuestLink;

