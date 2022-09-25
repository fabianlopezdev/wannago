import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  DashBoardButton,
} from './NavBarButtons';
import { useAuth } from '../contexts/AuthContext';

import '../css/NavBar.css';

const NavBar = () => {
  const { currentUser, logOut } = useAuth();

  return (
    <nav className='nav-container'>
      <div>
        {currentUser ? (
          <>
            <LogoutButton logOut={logOut} />
            <DashBoardButton />
          </>
        ) : (
          <>
            <LogInButton />
            <SignUpButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;


