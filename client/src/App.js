import { useState } from 'react';
import PlanCreated from './components/PlanCreated';
import GuestsLinks from './components/GuestsLinks';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

import { initialWannaGo } from './data';
function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <MainPage
            wannaGo={wannaGo}
            setwannaGo={setwannaGo}
          ></MainPage>
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

