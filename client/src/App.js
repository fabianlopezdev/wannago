//External dependencies
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/navbar/NavBar';
import LandingPage from './pages/LandingPage';
import WannaGoStats from './pages/WannaGoStatsPage';
import {
  UserDashboardPage,
  SignUpPage,
  DeleteUserPage,
  UpdateProfilePage,
  ForgotPasswordPage,
  LoginPage,
} from './pages/userPages';
import GuestsLinkPage from './pages/GuestsLinkPage';
import CreatedWannaGoPage from './pages/CreatedWannaGoPage';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';

import './App.css';
import StepperFormPage from './pages/StepperFormPage';
import NavBarBottom from './components/navbar/NavBarBottom';

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
            exact
            path='/'
            element={<LandingPage />}
          />
          <Route
            exact
            path='/wannaGo/StepperFormPage'
            element={
              <StepperFormPage
                wannaGo={wannaGo}
                setwannaGo={setwannaGo}
                justCreatedWG={justCreatedWG}
                setJustCreatedWG={setJustCreatedWG}
              />
            }
            />
          <Route
            exact
            path='/wannago/:id'
            element={<CreatedWannaGoPage />}
            />
          <Route
            exact
            path='/wannago/guest-link/:id'
            element={<GuestsLinkPage />}
            />
          <Route element={<UserPrivateRoute />}>
            <Route
              exact
              path='/user/signup'
              element={
                <>
                  <Container>
                  
                      <SignUpPage />
              
                  </Container>
                </>
              }
            />
            <Route
              exact
              path='/user/login'
              element={
                <>
                  <Container>
                      <LoginPage />
                  
                  </Container>
                </>
              }
            />
            <Route
              exact
              path='/user/forgot-password'
              element={
                <>
                  <Container>
            
                      <ForgotPasswordPage />
                   
                  </Container>
                </>
              }
            />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/user/dashboard'
              element={
                <UserDashboardPage
                  user={user}
                  setUser={setUser}
                  wannaGo={wannaGo}
                  justCreatedWG={justCreatedWG}
                  setJustCreatedWG={setJustCreatedWG}
                />
              }
            />
            <Route
              exact
              path='user/wannaGo/stats/:id'
              element={<WannaGoStats wannaGo={wannaGo} />}
            />
            <Route
              exact
              path='/user/update-profile'
              element={<UpdateProfilePage />}
            />
            <Route
              exact
              path='/user/delete-account'
              element={<DeleteUserPage />}
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


