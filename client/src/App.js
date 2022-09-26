//External dependencies
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Dashboard from './components/user/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/user/authentication/Login';
import SignUp from './components/user/authentication/SignUp';
import GuestsLinks from './components/linkForGuests/GuestsLink';
import JustCreatedWannago from './components/JustCreatedWannago';
import DeleteUser from './components/user/authentication/DeleteUser';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UpdateProfile from './components/user/authentication/UpdateProfile';
import ForgotPassword from './components/user/authentication/ForgotPassword';

import './App.css';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);

  return (
    <>
      <AuthProvider>
        <NavBar></NavBar>
        <Routes>
          <Route
            exact
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
            element={<JustCreatedWannago></JustCreatedWannago>}
          ></Route>
          <Route
            exact
            path='/wannaGo/:id'
            element={<GuestsLinks></GuestsLinks>}
          ></Route>
          <Route
            exact
            path='/signup'
            element={
              <>
                <Container className='signup-container'>
                  <div className='signup-div'>
                    <SignUp />
                  </div>
                </Container>
              </>
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={
              <>
                <Container className='signup-container'>
                  <div className='signup-div'>
                    <Login />
                  </div>
                </Container>
              </>
            }
          ></Route>
          <Route
            exact
            path='/forgot-password'
            element={
              <>
                <Container className='signup-container'>
                  <div className='signup-div'>
                    <ForgotPassword />
                  </div>
                </Container>
              </>
            }
          ></Route>
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/dashboard'
              element={<Dashboard></Dashboard>}
            ></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/update-profile'
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          </Route>
          <Route
            exact
            path='/delete-user'
            element={<DeleteUser />}
          ></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

