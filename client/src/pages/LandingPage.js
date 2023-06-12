//External dependencies
import { useNavigate } from 'react-router-dom';

//Internal dependencies
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
        <div class='action-container'>

        <h1 className='title-main'>Create a plan. Share it!</h1>
        <div>

        <button
          onClick={handleClick}
          className='button'
          >
          Start!
        </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default LandingPage;

