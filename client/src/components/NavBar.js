import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  HomeButton,
  DashBoardButton,
} from './NavBarButtons';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  const { currentUser, logOut } = useAuth();

  return (
    <nav className=''>
      <div>
        {currentUser ? (
          <>
            <LogoutButton logOut={logOut} />
            <DashBoardButton />
          </>
        ) : (
          <LogInButton />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

