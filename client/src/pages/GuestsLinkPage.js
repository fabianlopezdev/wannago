//External dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'bootstrap';

//Internal dependencies
import WannaGoCard from '../components/WannaGoCard';
import {
  YesOption,
  NoOption,
  MaybeOption,
} from '../components/guestLinkPageOptions';
import {
  YesButton,
  NoButton,
  MaybeButton,
} from '../components/guestLinkPageOptions/OptionButtons';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putOpenedTimes } from '../utils/apis/wannagoApiServices/putWannaGos';
import { useQuery } from 'react-query';

import './GuestLinkPage.css';

const GuestLink = () => {
  const { id } = useParams();
  console.log('this is the id', id);
  const { data, isError, isLoading } = useQuery('guestLink', () =>
    getWannaGoById(id)
  );
  // const [wannaGo, setWannaGo] = useState({});
  const [option, setOption] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry we could not load the page. The link may be broken
      </Alert>
    );

  try {
    putOpenedTimes(id, ++data.openedTimes);
  } catch (error) {
    console.error(`Error in putOpenedTimes function. Error: ${error}`);
  }

  const handleOption = (opt) => {
    switch (opt) {
      case 'no':
        return (
          <NoOption
            id={id}
            rejectCounter={data.rejectCounter}
            ownerName={data.ownerName}
          />
        );
      case 'yes':
        return (
          <YesOption
            id={id}
            goingCounter={data.goingCounter}
            ownerName={data.ownerName}
          />
        );
      case 'maybe':
        return (
          <MaybeOption
            id={id}
            suggestionBoxCounter={data.suggestionBoxCounter}
            ownerName={data.ownerName}
          />
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
        {data.ownerName} wants to know if you wannaGo
      </h2>
      <WannaGoCard wannaGo={data} />
      {!option ? (
        <div className='buttons'>
          <NoButton handleClick={handleClick} />
          <YesButton handleClick={handleClick} />
          <MaybeButton handleClick={handleClick} />
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

