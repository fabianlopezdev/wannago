//External dependencies
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Internal dependencies
import LandingPage from './pages/LandingPage';
import {
  SignUp,
  DeleteUser,
  UpdateProfile,
  ForgotPassword,
  Login,
} from './pages/user';
import GuestsLink from './pages/GuestLink';
import NewWannago from './pages/wannago/NewWannago';
import PrivateRoute from './components/user/authentication/PrivateRoute';
import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';

export const statelessRoutes = [
  <Route>
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
        path='update-profile'
        element={<UpdateProfile />}
      />
      <Route
        path='delete-account'
        element={<DeleteUser />}
      />
    </Route>
  </Route>,
];
