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

import './NavBar.css';

const NavBar = () => {
  //Hooks
  const { currentUser, logOut } = useAuth();
  const location = useLocation();

  return (
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
  );
};

export default NavBar;

