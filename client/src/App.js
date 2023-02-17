//External dependencies
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/navbar/NavBar';
import WannagoStats from './pages/WannagoStats.js';
import { Dashboard } from './pages/userPages';

import './App.css';
import WannagoForm from './pages/WannagoForm';
import NavBarBottom from './components/navbar/NavBarBottom';
import { statelessRoutes } from './statelessRoutes';

function App() {
  const [wannago, setWannago] = useState(initialWannaGo);
  const [isNewWannago, setIsNewWannago] = useState(false);

  return (
    <>
      <header className='topNavBar'>
        <NavBar />
      </header>
      <main className='mainContainer'>
        <Routes>
          {statelessRoutes}
          <Route
            path='new-wannago'
            element={
              <WannagoForm
                wannago={wannago}
                setWannago={setWannago}
                setIsNewWannago={setIsNewWannago}
              />
            }
          />
          <Route
            path='dashboard'
            element={
              <Dashboard
                wannago={wannago}
                isNewWannago={isNewWannago}
                setIsNewWannago={setIsNewWannago}
              />
            }
          />
          <Route
            path='wannago-stats/:id'
            element={<WannagoStats wannago={wannago} />}
          />
        </Routes>
      </main>

      <footer className='bottomNavbar'>
        <NavBarBottom />
      </footer>
    </>
  );
}

export default App;

