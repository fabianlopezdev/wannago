//External dependencies
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/navbar/NavBar';
import LandingPage from './pages/LandingPage';
import WannagoStats from './pages/WannagoStats.js';
import {
  Dashboard,
  SignUp,
  DeleteUser,
  UpdateProfile,
  ForgotPassword,
  Login,
} from './pages/userPages';
import GuestsLink from './pages/GuestLink';
import NewWannago from './pages/NewWannago';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';

import './App.css';
import WannagoForm from './pages/WannagoForm';
import NavBarBottom from './components/navbar/NavBarBottom';
import AllRoutes from './routes';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const [justCreatedWG, setJustCreatedWG] = useState(false);
  const [user, setUser] = useState({});
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
            <Route
              path='/'
              element={<LandingPage />}
            />
            <Route
              path='new-wannago'
              element={
                <WannagoForm
                  wannaGo={wannaGo}
                  setwannaGo={setwannaGo}
                  justCreatedWG={justCreatedWG}
                  setJustCreatedWG={setJustCreatedWG}
                />
              }
            />
            <Route
              path=':id'
              element={<NewWannago />}
            />
            <Route
              path='guest-link/:id'
              element={<GuestsLink />}
            />
            <Route element={<UserPrivateRoute />}>
              <Route
                path='sign-up'
                element={
                  <>
                    <Container>
                      <SignUp />
                    </Container>
                  </>
                }
              />
              <Route
                path='log-in'
                element={
                  <>
                    <Container>
                      <Login />
                    </Container>
                  </>
                }
              />
              <Route
                path='forgot-password'
                element={
                  <>
                    <Container>
                      <ForgotPassword />
                    </Container>
                  </>
                }
              />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route
                path='dashboard'
                element={
                  <Dashboard
                    user={user}
                    setUser={setUser}
                    wannaGo={wannaGo}
                    justCreatedWG={justCreatedWG}
                    setJustCreatedWG={setJustCreatedWG}
                  />
                }
              />
              <Route
                path='wannaGo-stats/:id'
                element={<WannagoStats wannaGo={wannaGo} />}
              />
              <Route
                path='update-profile'
                element={<UpdateProfile />}
              />
              <Route
                path='delete-account'
                element={<DeleteUser />}
              />
            </Route>
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

