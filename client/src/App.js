//External dependencies
import { useState } from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
=======
import PlanCreated from './components/PlanCreated';
import GuestsLinks from './components/linkForGuests/GuestsLinks';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65

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
import WannaGoStats from './components/WannaGoStats';
import DeleteUser from './components/user/authentication/DeleteUser';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';
import UpdateProfile from './components/user/authentication/UpdateProfile';
import ForgotPassword from './components/user/authentication/ForgotPassword';

import './App.css';
import VerticalStepper from './components/VerticalStepper';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const [justCreatedWG, setJustCreatedWG] = useState(false)
  const [user, setUser] = useState({});

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
<<<<<<< HEAD
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
                justCreatedWG={justCreatedWG}
                setJustCreatedWG={setJustCreatedWG}
              ></MainPage>
            }
          ></Route>
          <Route
            exact
            path='/wannaGo/VerticalStepper'
            element={
              <VerticalStepper
                wannaGo={wannaGo}
                setwannaGo={setwannaGo}
                justCreatedWG={justCreatedWG}
                setJustCreatedWG={setJustCreatedWG}
              ></VerticalStepper>
            }
          ></Route>
          <Route
            exact
            path='/wannago/:id'
            element={<JustCreatedWannago />}
          ></Route>
          <Route
            exact
            path='/wannago/guest-link/:id'
            element={<GuestsLinks />}
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
                  wannaGo={wannaGo}
                  justCreatedWG={justCreatedWG}
                  setJustCreatedWG={setJustCreatedWG}
                />
              }
            ></Route>
            <Route
              exact
              path='user/wannaGo/stats/:id'
              element={<WannaGoStats wannaGo={wannaGo} />}
            ></Route>
            {/* <Route element={<PrivateRoute />}> */}
            <Route
              exact
              path='/user/update-profile'
              element={<UpdateProfile />}
            ></Route>
            {/* </Route> */}
            <Route
              exact
              path='/user/delete-account'
              element={<DeleteUser />}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
=======
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
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65
  );
}

export default App;


<<<<<<< HEAD






=======
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65
