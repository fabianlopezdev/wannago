//External dependencies
import { Link, useNavigate } from 'react-router-dom';

//Internal dependencies
import homeSoft from '../assets/home-icon-soft.png';
import logo from '../finalWannaGoLogo.png';
// import { CiLogin, CiLogout } from 'react-icons/ci';
import {
  IoPersonAddOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoHomeOutline,
} from 'react-icons/io5';
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
      {/* <img
        title='Go to Dashboard'
        className='icons dashboard'
        src={homeSoft}
        alt='dashboard icon'
      ></img> */}
    </Link>
  );
};

export const LogoutButton = ({ logOut }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await logOut();
    navigate('/');
  };
  return (
    <IoLogOutOutline
      size={50}
      style={{ color: 'rgb(242, 205, 211)' }}
      onClick={handleClick}
      title='Log Out'
    />
    // <img
    //   title='Log Out'
    //   className='icons logout'
    //   src={logoutSoft}
    //   onClick={handleClick}
    //   alt='logout icon'
    // ></img>
  );
};

export const SignUpButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/signup'}
    >
      <IoPersonAddOutline
        size={50}
        style={{ color: 'rgb(242, 205, 211)' }}
        title='Sign Up'
      />
      {/* <img
        title='Sign Up'
        className='icons signup'
        src={signUpSoft}
        alt='signup icon'
      /> */}
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/login'}
    >
      <IoLogInOutline
        size={50}
        style={{ color: 'rgb(242, 205, 211)' }}
        title='Log In'
      />
      {/* <img
        title='Log In'
        className='icons login'
        src={loginSoft}
        alt='login icon'
      ></img> */}
    </Link>
  );
};

export const LandingButton = () => {
  return (
    <Link
      className='iconLinkLanding'
      to={'/'}
    >
      <img
        title='Go to Landing Page'
        className='iconsLogo'
        src={logo}
        alt='logo'
      ></img>
    </Link>
  );
};





















