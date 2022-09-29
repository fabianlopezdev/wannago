import React from 'react';

import SignInButton from '../../SignInButton';
import LogoutButton from './LogoutButton';

import { useAuth0}  from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return isAuthenticated ? <LogoutButton /> : <SignInButton />;
};


export default AuthenticationButton;