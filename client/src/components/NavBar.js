import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  DashBoardButton,
  LandingButton,
} from './NavBarButtons';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  const { currentUser, logOut } = useAuth();

  const location = useLocation();
  return (
    <nav className='nav-container'>
      <div>
        {currentUser && (
          <div className='nav-btns-container'>
            <LandingButton />
            <div>
              <LogoutButton logOut={logOut} />
              <DashBoardButton />
            </div>
          </div>
        )}
        {!currentUser && location.pathname === '/' ? (
          <>
            <LogInButton />
            <SignUpButton />
          </>
        ) : (
          <div className='nav-btns-container'>
            <LandingButton />
            <div>
              <LogoutButton logOut={logOut} />
              <DashBoardButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;


