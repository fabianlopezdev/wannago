// //External dependencies
// import { Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';

// //Internal dependencies
// import LandingPage from './pages/LandingPage';
// import WannaGoStats from './pages/WannagoStats.js';
// import {
//   Dashboard,
//   SignUpPage,
//   DeleteUserPage,
//   UpdateProfilePage,
//   ForgotPasswordPage,
//   LoginPage,
// } from './pages/userPages';
// import GuestsLinkPage from './pages/GuestLink';
// import CreatedWannaGoPage from './pages/NewWannago';
// import PrivateRoute from './components/user/authentication/PrivateRoute';
// import UserPrivateRoute from './components/user/authentication/UserPrivateRoutes';

// import './App.css';
// import StepperFormPage from './pages/WannagoForm';

// const AllRoutes = ({
//   wannaGo,
//   setwannaGo,
//   justCreatedWG,
//   setJustCreatedWG,
//   user,
//   setUser,
// }) => (
//   <>
//     <Route
//       exact
//       path='/'
//       element={<LandingPage />}
//     />
//     <Route
//       exact
//       path='/wannaGo/StepperFormPage'
//       element={
//         <StepperFormPage
//           wannaGo={wannaGo}
//           setwannaGo={setwannaGo}
//           justCreatedWG={justCreatedWG}
//           setJustCreatedWG={setJustCreatedWG}
//         />
//       }
//     />
//     <Route
//       exact
//       path='/wannago/:id'
//       element={<CreatedWannaGoPage />}
//     />
//     <Route
//       exact
//       path='/wannago/guest-link/:id'
//       element={<GuestsLinkPage />}
//     />
//     <Route element={<UserPrivateRoute />}>
//       <Route
//         exact
//         path='/user/signup'
//         element={
//           <>
//             <Container>
//               <SignUpPage />
//             </Container>
//           </>
//         }
//       />
//       <Route
//         exact
//         path='/user/login'
//         element={
//           <>
//             <Container>
//               <LoginPage />
//             </Container>
//           </>
//         }
//       />
//       <Route
//         exact
//         path='/user/forgot-password'
//         element={
//           <>
//             <Container>
//               <ForgotPasswordPage />
//             </Container>
//           </>
//         }
//       />
//     </Route>
//     <Route element={<PrivateRoute />}>
//       <Route
//         exact
//         path='/user/dashboard'
//         element={
//           <UserDashboardPage
//             user={user}
//             setUser={setUser}
//             wannaGo={wannaGo}
//             justCreatedWG={justCreatedWG}
//             setJustCreatedWG={setJustCreatedWG}
//           />
//         }
//       />
//       <Route
//         exact
//         path='user/wannaGo/stats/:id'
//         element={<WannaGoStats wannaGo={wannaGo} />}
//       />
//       <Route
//         exact
//         path='/user/update-profile'
//         element={<UpdateProfilePage />}
//       />
//       <Route
//         exact
//         path='/user/delete-account'
//         element={<DeleteUserPage />}
//       />
//     </Route>
//   </>
// );

// export default AllRoutes;

