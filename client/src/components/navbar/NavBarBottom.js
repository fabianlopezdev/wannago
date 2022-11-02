//External dependencies
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoLogOutOutline, IoHomeOutline } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { FiUser } from 'react-icons/fi';
import './NavBar.css';

const NavBar = () => {
  //Hooks
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <nav>
      {location.pathname !== '/' && (
        <div className='navContainerBottom'>
          {currentUser ? (
            <>
              {location.pathname !== '/user/dashboard' && (
                <Link to={'/user/dashboard'}>
                  <IoHomeOutline
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              {location.pathname !== '/wannaGo/StepperFormPage' && (
                <Link to={'/wannaGo/StepperFormPage'}>
                  <IoIosAddCircleOutline
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              {location.pathname !== '/user/update-profile' && (
                <Link to={'/user/update-profile'}>
                  <FiUser
                    size={45}
                    style={{ color: 'gray' }}
                  />
                </Link>
              )}
              <LogoutIcon />
            </>
          ) : 
            (
              location.pathname === '/user/login' ||
              location.pathname === '/user/signup'
            ) ? 
            <Logo/> :
            (
              <>
                <div className='userSigningButtons'>
                  <LogInButton logOut={logOut} />
                  <SignUpButton />
                </div>
              </>
            )
          }
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


