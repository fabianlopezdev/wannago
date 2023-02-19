//External dependencies
import { useEffect } from 'react';
//Internal dependencies
import { useNavigate } from 'react-router-dom';

import logo from '../assets/finalWannaGoLogo.png';

const LandingPage = ({setWannago}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setWannago({})
    navigate('new-wannago');
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

export default LandingPage;

