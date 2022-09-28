//External dependencies
import { useState } from 'react';

//Internal dependencies
import VerticalStepper from './VerticalStepper';
import {useNavigate} from 'react-router-dom'

import logo from '../finalWannaGoLogo.png';


const MainPage = ({ wannaGo, setwannaGo, justCreatedWG, setJustCreatedWG }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wannaGo/VerticalStepper')
  };

  return (
  <>
      <div className='main'>
        <img
          className='img'
          src={logo}
          alt='logo'
          ></img>
        <h1 className='title-main'>Create a plan. Share it!</h1>
        <button
          onClick={handleClick}
          className='button'
          >
          Plan it!
        </button>

      </div>
          </>
     
 
  );
};

export default MainPage;




