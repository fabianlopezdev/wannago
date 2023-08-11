//External dependencies
import { Link, useNavigate } from 'react-router-dom';

//Internal dependencies
import logo from '../../assets/finalWannaGoLogo.png';
import {
  IoPersonAddOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoHomeOutline,
} from 'react-icons/io5';

import { useAuth } from '../../contexts/AuthContext';
export const DashBoardButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/dashboard'}
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
      className='log-out-button'
      onClick={onClickLogOut}
    >
      <IoLogOutOutline size={50} />
    </button>
  );
};

export const Profile = () => {
  return (
    <Link to={'update-profile'}>
      <button className='sign-up-button'>Profile</button>
    </Link>
  );
};
export const SignUpIcon = () => {
  return (
    <Link to={'sign-up'}>
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
    <Link to={'sign-up'}>
      <button className='sign-up-button'>Sign Up</button>
    </Link>
  );
};
export const LogInIcon = () => {
  return (
    <Link to={'log-in'}>
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
    <Link to={'log-in'}>
      <button className='log-in-button'>Log In</button>
    </Link>
  );
};
export const Logo = ({currentUser}) => {
  // console.log('currentUSer', currentUser)
  return (
    <Link to={currentUser ? '/dashboard' : '/'}>
      <img
        className='Logo'
        src={logo}
        alt='logo'
      ></img>
    </Link>
  );
};





