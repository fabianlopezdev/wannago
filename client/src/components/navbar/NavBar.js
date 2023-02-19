//External dependencies
import { useLocation, Link } from 'react-router-dom';
import {useState} from 'react'
//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogoutIcon,
  Logo,
  LogOutButton,
  Profile,
  DashBoardButton,
} from './NavBarButtons';
import { useNavigate } from 'react-router-dom';
import { IoAddSharp } from 'react-icons/io5';
import './NavBar.css';

const NavBar = ({setIsCreated}) => {
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
        <div className='navContainer'>
          {currentUser ? (
            <>
              <Logo currentUser={currentUser}/>
              {location.pathname !== 'new-wannago' && (
                <Link to={'new-wannago'}>
                  <button
                    title='Make a new WannaGo'
                    className='createButton'
                    onClick={handleCreateClick}
                  >
                    Create
                  </button>
                </Link>
              )}
              <div className='userSigningButtons'>
                <Profile />
                <LogOutButton />
              </div>
            </>
          ) : location.pathname === '/' ? (
            <>
              <div className='landingPageButtons'>
                <LogOutButton />
              </div>
            </>
          ) : (
            <>
              <Logo currentUser={currentUser} />
              <div className='userSigningButtons'>
                <LogInButton logOut={logOut} />
                <SignUpButton />
              </div>
            </>
          )}
        </div>
      )}
      {location.pathname === '/' && (
        <div className='landingPageButton'>
          <LogInButton logOut={logOut} />
          <SignUpButton />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
























