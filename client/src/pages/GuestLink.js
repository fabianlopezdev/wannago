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
import {Logo} from '../components/navbar/NavBarButtons'
import './guestLink.css';

const GuestLink = () => {
  const { id } = useParams();
  console.log('this is the id', id);
  const { data, isError, isLoading } = useQuery('guestLink', () => getWannaGoById(id), {
    onSuccess: (data) => putOpenedTimes(id, ++data.openedTimes),
    staleTime: Infinity,
  }
  );
  console.log('this is data', data)
  // const [wannaGo, setWannaGo] = useState({});
  const [option, setOption] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry we could not load the page. The link may be broken
      </Alert>
    );

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
      {window.innerWidth < 767 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </div>
      )}
      <div className='pageContainer'>
        {!option && (
          <>
            <h2 style={{ marginLeft: '1rem', marginRight: '1rem' }}>
              {data.ownerName} wants to know if you wannaGo
            </h2>
          </>
        )}
        <WannaGoCard wannaGo={data} />

        {!option ? (
          <div className='buttons'>
            <NoButton handleClick={handleClick} />
            <YesButton handleClick={handleClick} />
            <MaybeButton handleClick={handleClick} />
          </div>
        ) : (
          <div className=''>{option && handleOption(option)}</div>
        )}
      </div>
    </>
  );
};

export default GuestLink;



