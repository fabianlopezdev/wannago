//External dependencies
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  SignUp,
  DeleteUser,
  UpdateProfile,
  ForgotPassword,
  Login,
} from './pages/user';
//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/navbar/NavBar';
import WannagoStats from './pages/wannago/WannagoStats.js';
import Dashboard  from './pages/user/Dashboard';
import LandingPage  from './pages/LandingPage'
import WannagoForm from './pages/wannago/WannagoForm';
import NavBarBottom from './components/navbar/NavBarBottom';
import { statelessRoutes } from './statelessRoutes';
import './App.css';

function App() {
  const [wannago, setWannago] = useState({});
  // const [isNewWannago, setIsNewWannago] = useState(false);

  return (
    <>
      <header className='topNavBar'>
        <NavBar />
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








