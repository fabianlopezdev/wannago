import { useState } from 'react';
import PlanCreated from './components/PlanCreated';
import GuestsLinks from './components/linkForGuests/GuestsLinks';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';

import { initialWannaGo } from './data';
function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

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

      <Route
        exact
        path='/profile'
        element={<Profile></Profile>}
      ></Route>
    </Routes>
  );
}

export default App;


