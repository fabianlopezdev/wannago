import { useState } from 'react';
import VerticalStepper from './VerticalStepper';
import NavBar from './NavBar';
import logo from '../logo.jpg';

const MainPage = ({wannaGo, setwannaGo}) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className='main'>
        <img src={logo}></img>
        <h1 className='title'>Create a plan. Share it!</h1>
        <button
          onClick={handleClick}
          className='button'
        >
          Plan it!
        </button>
      </div>
      <div className='stepper'>
        {showForm ? (
          <VerticalStepper
            wannaGo={wannaGo}
            setwannaGo={setwannaGo}
          ></VerticalStepper>
        ) : null}
      </div>
    </div>
  );
};

export default MainPage;


