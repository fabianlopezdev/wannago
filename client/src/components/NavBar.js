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
              <Link to={'/user/update-profile'}> Update Profile </Link>
              <DashBoardButton/>
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

