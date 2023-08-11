//External dependencies
import { useLocation, Link,  } from 'react-router-dom';
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogoutIcon,
} from './NavBarButtons';

import { IoIosAddCircleOutline } from 'react-icons/io';
import {  IoHomeOutline } from 'react-icons/io5';


import { FiUser } from 'react-icons/fi';
import './navBar.css';

const BottomNavBar = () => {
  //Hooks
  const { currentUser, logOut } = useAuth();
 
  const location = useLocation();

  // console.log(location);
  return (
    <nav>
      {location.pathname !== '/' && (
        <div className='nav-container-bottom'>
          {currentUser ? (
            <>
              {location.pathname !== '/dashboard' && (
                <Link to={'/dashboard'}>
                  <IoHomeOutline
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              {location.pathname !== '/new-wannago' && (
                <Link to={'/new-wannago'}>
                  <IoIosAddCircleOutline
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              {location.pathname !== '/update-profile' && (
                <Link to={'/update-profile'}>
                  <FiUser
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              <LogoutIcon />
            </>
          ) : (
            <>
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

export default BottomNavBar;

