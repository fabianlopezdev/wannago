//External dependencies
import { Link, useNavigate } from 'react-router-dom';

//Internal dependencies
import logoutSoft from '../icons/logout-soft.png';
import signUpSoft from '../icons/sign-up-soft.png';
import loginSoft from '../icons/login-soft.png';
import homeSoft from '../icons/home-icon-soft.png';
import logo from '../logo.jpg';

export const DashBoardButton = () => {
  return (
    <img
      className='icons'
      src={homeSoft}
      alt='dashboard icon'
    ></img>
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
      className='icons'
      src={logoutSoft}
      onClick={handleClick}
      alt='logout icon'
    ></img>
  );
};

export const SignUpButton = () => {
  return (
    <Link to={'/user/signup'}>
      <img
        className='icons'
        src={signUpSoft}
        alt='signup icon'
      />
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link to={'/user/login'}>
      <img
        className='icons'
        src={loginSoft}
        alt='login icon'
      ></img>
    </Link>
  );
};

export const LandingButton = () => {
  return (
    <Link to={'/'}>
      <img
        className='icons logo'
        src={logo}
        alt='logo'
      ></img>
    </Link>
  );
};

