//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

//Internal dependencies
import WannaGoCard from './WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';

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
      <WannaGoCard wannaGo={wannaGo}></WannaGoCard>
      <div className='see'>
        <h2>Ask if they wannaGo!</h2>
        <h4>Share this link:</h4>
        <a
          target='blank'
          href={`http://localhost:3000/wannaGo/id=${id}`}
        >
          &nbsp;http://localhost:3000/wannaGo/id={id}
        </a>
        <h6>To save the plan and keep track of who is going, log in please.</h6>

        {!currentUser ? (
          <div className='btns-container'>
            <button
              className='button cancel'
              onClick={() => navigate('/signup')}
            >
              Log In
            </button>
            <button
              className='button cancel'
              onClick={() => navigate('/login')}
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



