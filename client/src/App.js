//External dependencies
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { SignUp, Login } from './pages/user';
//Internal dependencies
import NavBar from './components/navbar/TopNavBar';
import WannagoStats from './pages/wannago/WannagoStats.js';
import Dashboard from './pages/user/Dashboard';
import LandingPage from './pages/LandingPage';
import WannagoForm from './pages/wannago/WannagoForm';
import NavBarBottom from './components/navbar/BottomNavBar';
import { statelessRoutes } from './statelessRoutes';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [wannago, setWannago] = useState({});
  const [isCreated, setIsCreated] = useState(false);

  return (
    <>
      <HelmetProvider>
        <header className='topNavBar'>
          <NavBar
            setIsCreated={setIsCreated}
            setWannago={setWannago}
          />
        </header>

        <main className='mainContainer'>
          <Routes>
            <Route
              path='/'
              element={<LandingPage setWannago={setWannago} />}
            />
            {statelessRoutes}
            <Route
              path='new-wannago'
              element={
                <WannagoForm
                  isCreated={isCreated}
                  setIsCreated={setIsCreated}
                  wannago={wannago}
                  setWannago={setWannago}
                />
              }
            />
            <Route
              path='sign-up'
              element={
                <>
                  <Container>
                    <SignUp
                      wannago={wannago}
                      setWannago={setWannago}
                    />
                  </Container>
                </>
              }
            />
            <Route
              path='log-in'
              element={
                <>
                  <Container>
                    <Login
                      wannago={wannago}
                      setWannago={setWannago}
                    />
                  </Container>
                </>
              }
            />
            <Route
              path='dashboard'
              element={<Dashboard wannago={wannago} />}
            />
            <Route
              path='wannago-stats'
              element={<WannagoStats/>}
            />
          </Routes>
        </main>

        <footer className='bottomNavbar'>
          <NavBarBottom />
        </footer>
      </HelmetProvider>
    </>
  );
}

export default App;

