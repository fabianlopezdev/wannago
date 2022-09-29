import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { initialWannaGo } from './data';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import WannaGoStats from './pages/WannaGoStatsPage';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/userPages/LoginPage';
import UserDashboardPage from './pages/userPages/UserDashboardPage';
import SignUp from './pages/userPages/SignUpPage';
import GuestsLinkPage from './pages/GuestsLinkPage';
import CreatedWannaGoPage from './pages/CreatedWannaGoPage';
import DeleteUser from './pages/userPages/DeleteUserPage';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';
import UpdateProfile from './pages/userPages/UpdateProfilePage';
import ForgotPassword from './pages/userPages/ForgotPasswordPage';
import './App.css';
import VerticalStepperPage from './pages/VerticalStepperPage';

function App() {
  const [wannaGo, setwannaGo] = useState(initialWannaGo);
  const [justCreatedWG, setJustCreatedWG] = useState(false)
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
              <HomePage/>
            }
          ></Route>
          <Route
            exact
            path='/wannaGo/VerticalStepperPage'
            element={
              <VerticalStepperPage
                wannaGo={wannaGo}
                setwannaGo={setwannaGo}
                justCreatedWG={justCreatedWG}
                setJustCreatedWG={setJustCreatedWG}
              ></VerticalStepperPage>
            }
          ></Route>
          <Route
            exact
            path='/wannago/:id'
            element={<CreatedWannaGoPage />}
          ></Route>
          <Route
            exact
            path='/wannago/guest-link/:id'
            element={<GuestsLinkPage />}
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
                <UserDashboardPage
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
  );
};

export default App;








