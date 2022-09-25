import logoutSoft from '../icons/logout-soft.png';
import signUpSoft from '../icons/sign-up-soft.png';
import loginSoft from '../icons/login-soft.png';
import homeSoft from '../icons/home-icon-soft.png';
import { Link } from 'react-router-dom';

export const LogoutButton = () => {
  return (
    <i
      className='icons'
      src={logoutSoft}
      onClick=''
    ></i>
  );
};

export const SignUpButton = () => {
  return (
    <i
      className='icons'
      src={signUpSoft}
      onClick=''
    >
      Sign Up
    </i>
  );
};

export const LogInButton = () => {
  return (
    <Link to={'/Login'}>
      <img
        className='icons'
        src={loginSoft}
      ></img>
    </Link>
  );
};

export const HomeButton = () => {
  return (
    <img
      className='icons'
      src={homeSoft}
      onClick={<Link>{'/'}</Link>}
    ></img>
  );
};
