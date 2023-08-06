//External dependencies
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

//Internal dependencies
import WannaGoCardSimple from '../components/wannago/WannagoCardSimple';
import {
  YesOption,
  NoOption,
  MaybeOption,
} from '../components/wannagoLinkPage';
import {
  YesButton,
  NoButton,
  MaybeButton,
} from '../components/wannagoLinkPage/OptionButtons';
import { getWannagoByDateCreated } from '../utils/apis/wannagoApiServices/getWannagos';
import { putTrackClick } from '../utils/apis/wannagoApiServices/putWannagos';
import { useQuery } from 'react-query';


import './wannagoLinkPage.css';
const GuestLink = () => {
  const { id } = useParams();
  console.log('id', id);
  // const { userToken } = useAuth();
  const {
    data: wannago,
    isError,
    isLoading,
  } = useQuery('link', () => getWannagoByDateCreated(id), {
    onSuccess: (data) => putTrackClick(id, ++data.clickCount, data.hostId),
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
            rejectionsCount={wannago.rejectionsCount}
            hostName={wannago.hostName}
            hostId={wannago.hostId}
          />
        );
      case 'yes':
        return (
          <YesOption
            id={id}
            attendeesCount={wannago.attendeesCount}
            hostName={wannago.hostName}
            hostId={wannago.hostId}
          />
        );
      case 'maybe':
        return (
          <MaybeOption
            id={id}
            suggestionsCount={wannago.suggestionsCount}
            hostName={wannago.hostName}
            hostId={wannago.hostId}
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
        <Link
          to={'/'}
          style={{ textDecoration: 'none' }}
          title='Go to Dashboard'
        >
          <p
            className='logo'
            style={{ textAlign: 'center', marginBlock: '1rem' }}
          >
            Wannago?
          </p>
        </Link>
      )}
      <section className='page-container'>
        {!option && (
          <>
            <h2 >{wannago.hostName} has a plan.</h2>
            <h2 >Do you wannaGo?</h2>
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
      </section>
    </>
  );
};

export default GuestLink;


