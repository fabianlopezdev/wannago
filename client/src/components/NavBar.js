<<<<<<< HEAD
//External dependencies
import { useLocation, Link } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  LandingButton,
  DashBoardButton,
} from './NavBarButtons';

import '../css/NavBar.css';
=======
import React from 'react';
import AuthNav from './AuthNav';
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65

const NavBar = () => {
  //Hooks
  const { currentUser, logOut } = useAuth();
  const location = useLocation();

  return (
<<<<<<< HEAD
    <nav className='navContainer'>
      {currentUser ? (
        <div className='navButtonsContainer'>
          <LandingButton />
          <div>
            <Link to={'/user/update-profile'}> Update Profile </Link>
            <DashBoardButton />
            <LogoutButton logOut={logOut} />
          </div>
        </div>
      ) : location.pathname === '/' ? (
        <>
          <div className='landingPageIcons'>
            <LogInButton />
            <SignUpButton />
          </div>
        </>
      ) : (
        <>
          <LandingButton />
          <div className='landingPageIcons'>
            <LogInButton logOut={logOut} />
            <SignUpButton />
          </div>
        </>
      )}
    </nav>
=======
      <nav className=''>
        <div>
          <AuthNav />
        </div>
      </nav>
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65
  );
};

export default NavBar;

