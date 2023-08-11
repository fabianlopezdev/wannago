//External dependencies
import { useLocation, Link } from 'react-router-dom';
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogOutButton,
  Profile,
} from './NavBarButtons';
import { useNavigate } from 'react-router-dom';
import './navBar.css';

const TopNavBar = ({setIsCreated}) => {
  //Hooks
  const { currentUser, logOut } = useAuth();
  const location = useLocation();
   const navigate = useNavigate();
  const handleCreateClick = () => {

    setIsCreated(false);
    navigate('new-wannago')
  }
  // console.log(location)
  return (
    <nav>
      {location.pathname !== '/' && (
        <div className='nav-container'>
          <Link
            to={currentUser ? '/dashboard' : '/'}
            style={{ textDecoration: 'none' }}
            title='Go to Dashboard'
          >
            <p className='logo'>Wannago?</p>
          </Link>
          {currentUser ? (
            <>
              {location.pathname !== 'new-wannago' && (
                <Link to={'new-wannago'}>
                  <button
                    title='Make a new WannaGo'
                    className='create-wannago-button'
                    onClick={handleCreateClick}
                  >
                    Create
                  </button>
                </Link>
              )}
              <div className='user-sign-in-buttons'>
                <Profile />
                <LogOutButton />
              </div>
            </>
          ) : location.pathname === '/' ? (
            <>
              <div className='landing-page-buttons'>
                <LogOutButton />
              </div>
            </>
          ) : (
            <>
              {/* <Logo currentUser={currentUser} /> */}
              <div className='user-sign-in-buttons'>
                <LogInButton logOut={logOut} />
                <SignUpButton />
              </div>
            </>
          )}
        </div>
      )}
      {location.pathname === '/' && (
        <div className='landing-page-buttons'>
          <LogInButton logOut={logOut} />
          <SignUpButton />
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;































