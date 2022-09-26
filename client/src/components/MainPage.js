//External dependencies
import { useState } from 'react';

//Internal dependencies
import VerticalStepper from './VerticalStepper';

import logo from '../logo.jpg';

const MainPage = ({ wannaGo, setwannaGo, justCreatedWG, setJustCreatedWG }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className='main'>
        <img
          src={logo}
          alt='logo'
        ></img>
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
            justCreatedWG={justCreatedWG}
            setJustCreatedWG={setJustCreatedWG}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MainPage;


