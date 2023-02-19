//External dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { Helmet } from 'react-helmet-async';

//Internal dependencies
import WannaGoCardSimple from '../components/wannago/WannaGoCard';
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
import {
  getWannagoByDateCreated,
  getWannaGoById,
} from '../utils/apis/wannagoApiServices/getWannaGos';
import { putOpenedTimes } from '../utils/apis/wannagoApiServices/putWannaGos';
import { useQuery } from 'react-query';
import { Logo } from '../components/navbar/NavBarButtons';
import './guestLink.css';
import favicon from '../assets/favicon.png';

const GuestLink = () => {
  const { id } = useParams();
  console.log('this is the dateCreated', id);
  const {
    data: wannago,
    isError,
    isLoading,
  } = useQuery('guestLink', () => getWannagoByDateCreated(id), {
    onSuccess: (data) => putOpenedTimes(id, ++data.openedTimes),
    staleTime: Infinity,
  });
  console.log('this is wannago', wannago);
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
            rejectCounter={wannago.rejectCounter}
            ownerName={wannago.hostName}
          />
        );
      case 'yes':
        return (
          <YesOption
            id={id}
            goingCounter={wannago.goingCounter}
            ownerName={wannago.hostName}
          />
        );
      case 'maybe':
        return (
          <MaybeOption
            id={id}
            suggestionBoxCounter={wannago.suggestionBoxCounter}
            ownerName={wannago.hostName}
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
      console.log('helooo');

  return (
    <>
      <Helmet>
        <meta
          property='og:site_name'
          content={`Wannago`}
        />
        <meta
          property='og:title'
          content={`${wannago.hostName} wants to know if you wannaGo`}
        />
        <meta
          property='og:description'
          content="Check out this event and let us know if you're coming!"
        />
        <meta
          property='og:url'
          content={wannago.guestLink}
        />
        <meta
          property='og:image'
          content={favicon}
        />
      </Helmet>
      {window.innerWidth < 767 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </div>
      )}
      <div className='pageContainer'>
        {!option && (
          <>
            <h2 style={{ marginLeft: '1rem', marginRight: '1rem' }}>
              {wannago.hostName} wants to know if you wannaGo
            </h2>
          </>
        )}
        <WannaGoCardSimple wannago={wannago} />

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



