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
    setwannaGo(queriedWannaGo);
  };
  const handleClick = () => {
    navigator.clipboard.writeText(
      guestLink
    );
    setCopied('Copied');
  };
  return (
    <>
      <h1 className='see'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo} />
      <div className='see'>
        <h2>Ask if they wannaGo!</h2>
        <h4>Share this link:</h4>
        <div>
          <a href={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}>
            {guestLink}
            {/*port needs to be the same as the one in the client not the backend*/}
          </a>
          <button onClick={handleClick}>{copied}</button>
        </div>
        <h6>
          To save the plan and keep track of who is going,
          <Link to='/user/login'> log in </Link> or
          <Link to='/user/signup'> sign up </Link> please.
        </h6>

        {!currentUser ? (
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
        ) : null}
      </div>
    </>
  );
};

export default PlanCreated;








