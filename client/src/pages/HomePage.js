//External dependencies

//Internal dependencies
import { useNavigate } from 'react-router-dom';

import logo from '../finalWannaGoLogo.png';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wannaGo/VerticalStepperPage');
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

