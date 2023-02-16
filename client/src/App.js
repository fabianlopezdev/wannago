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

  const [bottomNavBar, setBottomNavBar] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) setBottomNavBar(true);
      else setBottomNavBar(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <main>
        <header className='topNavBar'>{!bottomNavBar && <NavBar />}</header>
        <div className={!bottomNavBar ? 'mainContainer' : null}>
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
        </div>
        {bottomNavBar && (
          <footer className='bottomNavbar'>
            <NavBarBottom />
          </footer>
        )}
      </main>
    </>
  );
}

export default App;

