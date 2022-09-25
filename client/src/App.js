import { useState } from 'react';
import PlanCreated from './components/PlanCreated';
import GuestsLinks from './components/linkForGuests/GuestsLinks';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DeleteUser from './components/DeleteUser';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './components/UpdateProfile';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import './App.css';

import Loading from './components/Loading';

import { initialWannaGo } from './data';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
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
            element={<PlanCreated></PlanCreated>}
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
            element={<DeleteUser/>}
          ></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;




