//External dependencies
import { Link, useNavigate } from 'react-router-dom';

//Internal dependencies
import logoutSoft from '../assets/logout-soft.png';
import signUpSoft from '../assets/sign-up-soft.png';
import loginSoft from '../assets/login-soft.png';
import homeSoft from '../assets/home-icon-soft.png';
import logo from '../finalWannaGoLogo.png';

export const DashBoardButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/dashboard'}
    >
      <img
        title='Go to Dashboard'
        className='icons dashboard'
        src={homeSoft}
        alt='dashboard icon'
      ></img>
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
    <img
      title='Log Out'
      className='icons logout'
      src={logoutSoft}
      onClick={handleClick}
      alt='logout icon'
    ></img>
  );
};

export const SignUpButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/signup'}
    >
      <img
        title='Sign Up'
        className='icons signup'
        src={signUpSoft}
        alt='signup icon'
      />
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/login'}
    >
      <img
        title='Log In'
        className='icons login'
        src={loginSoft}
        alt='login icon'
      ></img>
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




