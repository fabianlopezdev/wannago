//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

//Internal dependencies
import WannaGoCard from './WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { URL, PORT } from '../utils/config';
import '../css/WannaGoCard.css';

const PlanCreated = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannago/id');
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [wannaGo, setwannaGo] = useState({});

  useEffect(() => {
    promiseHandler();
  }, []);

  const promiseHandler = async () => {
    const queriedWannaGo = await getWannaGoById(id);
    setwannaGo(queriedWannaGo);
  };

  return (
    <>
      <h1 className='see'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo}/>
      <div className='see'>
        <h2>Ask if they wannaGo!</h2>
        <h4>Share this link:</h4>
        <Link to={`/wannago/guest-link/id=${id}`}>
          {URL}3001/wannago/guest-link/id={id}
          {/*port needs to be the same as the one in the client not the backend*/}
        </Link>
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

