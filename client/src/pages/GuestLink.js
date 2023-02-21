//External dependencies
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'bootstrap';

//Internal dependencies
import WannaGoCardSimple from '../components/wannago/WannagoCard';
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
import { getWannagoByDateCreated } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putLinkClickedCounter } from '../utils/apis/wannagoApiServices/putWannaGos';
import { useQuery } from 'react-query';
import { Logo } from '../components/navbar/NavBarButtons';
import './guestLink.css';
import { Helmet } from 'react-helmet-async';
import favicon from '../assets/favicon.png';

const GuestLink = () => {
  const { id } = useParams();

  const {
    data: wannago,
    isError,
    isLoading,
  } = useQuery('guestLink', () => getWannagoByDateCreated(id), {
    onSuccess: (data) => putLinkClickedCounter(id, ++data.openedTimes),
    staleTime: Infinity,
  });

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
            hostName={wannago.hostName}
          />
        );
      case 'yes':
        return (
          <YesOption
            id={id}
            goingCounter={wannago.goingCounter}
            hostName={wannago.hostName}
          />
        );
      case 'maybe':
        return (
          <MaybeOption
            id={id}
            suggestionBoxCounter={wannago.suggestionBoxCounter}
            hostName={wannago.hostName}
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
      <Helmet>
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content={wannago.guesLink}
        />
        <meta
          property='og:title'
          content={`${wannago.hostName} wants to know if you wannago`}
        />
        <meta
          property='og:description'
          content='Chek out the plan'
        />
        <meta
          property='og:image'
          itemprop='image'
          content={favicon.jpg}
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

