import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import signUpSoft from '../icons/sign-up-soft.png';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <img
      className='icons'
      src={signUpSoft}
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </img>
  );
};

export default SignUpButton;

