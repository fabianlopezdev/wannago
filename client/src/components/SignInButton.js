import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loginSoft from '../icons/login-soft.png';
import {useNavigate} from 'react-router-dom'

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <img
          className='icons'
          src={loginSoft}
          onClick={() => loginWithRedirect()}
        ></img>
  )
};

export default SignInButton;




