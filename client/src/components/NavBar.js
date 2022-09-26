//External dependencies
import { useLocation } from 'react-router-dom';

//Internal dependencies
import { useAuth } from '../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  LandingButton,
} from './NavBarButtons';

import '../css/NavBar.css';

const NavBar = () => {
  //Hooks
  const { currentUser, logOut } = useAuth();
  const location = useLocation();

  return (
    <nav className='nav-container'>
      <div>
        {currentUser ? (
          <div className='nav-btns-container'>
            <LandingButton />
            <div>
              <LogoutButton logOut={logOut} />
            </div>
          </div>
        ) : location.pathname === '/' ? (
          <>
            <LogInButton />
            <SignUpButton />
          </>
        ) : (
          <div className='nav-btns-container'>
            <LandingButton />
            <div>
              <LogInButton logOut={logOut} />
              <SignUpButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

