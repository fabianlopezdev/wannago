//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

//Internal dependencies
import WannaGoCard from './WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putGuestLink } from '../utils/apis/wannagoApiServices/putWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';
import '../css/WannaGoCard.css';
import { putOwnerToWannaGo } from '../utils/apis/userApiServices/userApi';

const PlanCreated = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannago/id');
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [wannaGo, setwannaGo] = useState({});
  const [copied, setCopied] = useState('Copy');

  useEffect(() => {
    promiseHandler();
  }, []);

  const guestLink = `${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`;

  const promiseHandler = async () => {
    const queriedWannaGo = await getWannaGoById(id);
    await putGuestLink(id, guestLink);
    if (currentUser) putOwnerToWannaGo(queriedWannaGo._id, currentUser);
    setwannaGo(queriedWannaGo);
  };
  const handleClick = () => {
    navigator.clipboard.writeText(guestLink);
    setCopied('Copied');
  };
  return (
    <>
      <h1 className='justCreatedWannaGo'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo} />
      <div className='justCreatedWannaGoSedondPart'>
        <h4>Ask if they wannaGo!</h4>
        <h4>Share this link:</h4>
        <div>
          <a
            className='guestLink'
            target='blank'
            href={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
          >
            {guestLink}
            {/*port needs to be the same as the one in the client not the backend*/}
          </a>
          <button
            className='buttonCopy'
            onClick={handleClick}
          >
            {copied}
          </button>
        </div>
        {!currentUser
          ? (<h6 className='highlight'>
              To save the plan and keep track of who is going,
              <Link to='/user/login'> log in </Link> or
              <Link to='/user/signup'> sign up </Link> please.
            </h6>)(
              <div className='btns-container'>
                <button
                  className='button cancel'
                  onClick={() => navigate('/user/signup')}
                >
                  Log In
                </button>
                <button
                  className='button cancel'
                  onClick={() => navigate('/user/login')}
                >
                  Sign Up
                </button>
              </div>
            )
          : null}
      </div>
    </>
  );
};

export default PlanCreated;

