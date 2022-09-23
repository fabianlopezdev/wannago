import { useState} from 'react';
import logo from './logo.jpg';
import PlanCreated from './components/PlanCreated';
import GuestsLinks from './components/GuestsLinks';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import VerticalStepper from './components/VerticalStepper';

import { initialWannaGo } from './data';
function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
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
                  showCard={showCard}
                  setShowCard={setShowCard}
                ></VerticalStepper>
              ) : null}
            </div>
          </div>
        }
      ></Route>
      <Route
        exact
        path='/card/:id'
        element={<PlanCreated></PlanCreated>}
      ></Route>
      <Route
        exact
        path='/wannaGo/:id'
        element={<GuestsLinks></GuestsLinks>}
      ></Route>
    </Routes>
  );
}

export default App;



