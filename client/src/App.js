import { useState, useEffect } from 'react';
import { getWannaGos, postAwannaGo } from './utils/apiServices';
import logo from './logo.jpg';
import initialWannaGo from './data';
import WannaGoCard from './components/WannaGoCard';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import VerticalStepper from './components/VerticalStepper';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [newWannaGo, setNewWannaGo] = useState(initialWannaGo);
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
                  newWannaGo={newWannaGo}
                  setNewWannaGo={setNewWannaGo}
                  showCard={showCard}
                  setShowCard={setShowCard}
                ></VerticalStepper>
              ) : null}
            </div>
          </div>
        }
      ></Route>
      <Route exact path='/card/:id' element={<WannaGoCard newWannaGo={newWannaGo}></WannaGoCard>}></Route>
    </Routes>
  );
}

export default App;

