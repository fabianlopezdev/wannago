//External dependencies
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
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
import VerticalStepperPage from './pages/VerticalStepperPage';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const [justCreatedWG, setJustCreatedWG] = useState(false);
  const [user, setUser] = useState({});


  return (
    <>
      <NavBar></NavBar>
        <Routes>
          <Route
            exact
            path='/'
            element={<HomePage />}
          />
          <Route
            exact
            path='/wannaGo/VerticalStepperPage'
            element={
              <VerticalStepperPage
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
                  <Container className='signup-container'>
                    <div className='signup-div'>
                      <SignUpPage />
                    </div>
                  </Container>
                </>
              }
            />
            <Route
              exact
              path='/user/login'
              element={
                <>
                  <Container className='signup-container'>
                    <div className='signup-div'>
                      <LoginPage />
                    </div>
                  </Container>
                </>
              }
            />
            <Route
              exact
              path='/user/forgot-password'
              element={
                <>
                  <Container className='signup-container'>
                    <div className='signup-div'>
                      <ForgotPasswordPage />
                    </div>
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
    </>
  );
}

export default App;

