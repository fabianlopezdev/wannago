//External dependencies
import { Link, useNavigate } from 'react-router-dom';

//Internal dependencies
import logo from '../../assets/finalWannaGoLogo.png';
import {
  IoPersonAddOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoHomeOutline,
  IoMenuOutline,
} from 'react-icons/io5';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { useAuth } from '../../contexts/AuthContext';
export const DashBoardButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/dashboard'}
    >
      <IoHomeOutline
        size={50}
        style={{ color: 'rgb(242, 205, 211)' }}
        title='Go to Dashboard'
      />
    </Link>
  );
};

export const LogoutIcon = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth()

  const onClickLogOut = async () => {
    await logOut();
    navigate('/');
  };
  return (
    <IoLogOutOutline
      size={50}
      style={{ color: 'gray', cursor: 'pointer' }}
      onClick={onClickLogOut}
      title='Log Out'
    />
  );
};

export const LogOutButton = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const onClickLogOut = async () => {
    await logOut();
    navigate('/');
  };
  return (
    <button
      className='logOutButton'
      onClick={onClickLogOut}
    >
      <IoLogOutOutline size={50} />
    </button>
  );
};

export const Profile = () => {
  return (
    <Link to={'/user/update-profile'}>
      <button className='signUpButton'>Profile</button>
    </Link>
  );
};
export const SignUpIcon = () => {
  return (
    <Link to={'/user/signup'}>
      <IoPersonAddOutline
        size={50}
        style={{ color: 'rgb(242, 205, 211)' }}
        title='Sign Up'
      />
    </Link>
  );
};
export const SignUpButton = () => {
  return (
    <Link to={'/user/signup'}>
      <button className='signUpButton'>Sign Up</button>
    </Link>
  );
};
export const LogInIcon = () => {
  return (
    <Link to={'/user/login'}>
      <IoLogInOutline
        size={50}
        style={{ color: 'rgb(242, 205, 211)' }}
        title='Log In'
      />
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link to={'/user/login'}>
      <button className='logInButton'>Log In</button>
    </Link>
  );
};
export const Logo = () => {
  return (
    <Link to={'/user/dashboard'}>
      <img
        className='Logo'
        src={logo}
        alt='logo'
      ></img>
    </Link>
  );
};





