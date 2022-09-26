//External dependencies
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import { initialWannaGo } from './data';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/user/authentication/Login';
import UserDashboard from './components/user/UserDashboard';
import SignUp from './components/user/authentication/SignUp';
import GuestsLinks from './components/linkForGuests/GuestsLink';
import JustCreatedWannago from './components/JustCreatedWannago';
import DeleteUser from './components/user/authentication/DeleteUser';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';
import UpdateProfile from './components/user/authentication/UpdateProfile';
import ForgotPassword from './components/user/authentication/ForgotPassword';

import './App.css';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const [user, setUser] = useState({});

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
            path='/wannago/:id'
            element={<JustCreatedWannago></JustCreatedWannago>}
          ></Route>
          <Route
            exact
            path='/wannago/link/:id'
            element={<GuestsLinks></GuestsLinks>}
          ></Route>
          <Route element={<UserPrivateRoute />}>
            <Route
              exact
              path='/user/signup'
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
              path='/user/login'
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
              path='/user/forgot-password'
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
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/user/dashboard'
              element={
                <UserDashboard
                  user={user}
                  setUser={setUser}
                ></UserDashboard>
              }
            ></Route>
            {/* <Route element={<PrivateRoute />}> */}
            <Route
              exact
              path='/user/update-profile'
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
            {/* </Route> */}
            <Route
              exact
              path='/user/delete-user'
              element={<DeleteUser />}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;



