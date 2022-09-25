import logoutSoft from '../icons/logout-soft.png';
import signUpSoft from '../icons/sign-up-soft.png';
import loginSoft from '../icons/login-soft.png';
import homeSoft from '../icons/home-icon-soft.png';
import { Link, useNavigate } from 'react-router-dom';

export const DashBoardButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  };
  return (
    <img
      className='icons'
      src={homeSoft}
      onClick={handleClick}
      alt='dashboard icon'
    ></img>
  );
};

export const LogoutButton = ({logOut}) => {
  const navigate = useNavigate()
  const handleClick = async () => {
    await logOut()
    navigate('/');
  }
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <img
      className='icons'
      src={signUpSoft}
      onClick={handleClick}
      alt='sign up icon'
    />
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




