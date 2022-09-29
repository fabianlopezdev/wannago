//External dependencies
import { useEffect, useState } from 'react';

//Internal dependencies
import WannaGoCard from '../components/WannaGoCard';
import YesOption from '../components/guestLinkPageOptions/YesOption';
import NoOption from '../components/guestLinkPageOptions/NoOption';
import MaybeOption from '../components/guestLinkPageOptions/MaybeOption';
import {
  YesButton,
  NoButton,
  MaybeButton,
} from '../components/guestLinkPageOptions/OptionButtons';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putOpenedTimes } from '../utils/apis/wannagoApiServices/putWannaGos';

import '../css/GuestLinkPage.css';


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

  const handleOption = (opt) => {
    switch (opt) {
      case 'no':
        return (
          <NoOption
            id={id}
            rejectCounter={wannaGo.rejectCounter}
            ownerName={wannaGo.ownerName}
          ></NoOption>
        );
      case 'yes':
        return (
          <YesOption
            id={id}
            goingCounter={wannaGo.goingCounter}
            ownerName={wannaGo.ownerName}
          ></YesOption>
        );
      case 'maybe':
        return (
          <MaybeOption
            id={id}
            suggestionBoxCounter={wannaGo.suggestionBoxCounter}
            ownerName={wannaGo.ownerName}
          ></MaybeOption>
        );
      default:
        break;
    }
  };
  const handleClick = (e) => {
    switch (e.target.innerText) {
      case 'I wannaGo!':
        setOption('yes');
        break;
      case `I can't`:
        setOption('no');
        break;
      case 'Maybe':
        setOption('maybe');
        break;
      default:
        break;
    }
    return;
  };

  return (
    <>
      <h2 className='justCreatedWannaGo'>
        {wannaGo.ownerName} wants to know if you wannaGo
      </h2>
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
      {!option ? (
        <div className='buttons'>
          <NoButton handleClick={handleClick}></NoButton>
          <YesButton handleClick={handleClick}></YesButton>
          <MaybeButton handleClick={handleClick}></MaybeButton>
        </div>
      ) : (
        <div className='justCreatedWannaGo'>
          {option && handleOption(option)}
        </div>
      )}
    </>
  );
};

export default GuestLink;




