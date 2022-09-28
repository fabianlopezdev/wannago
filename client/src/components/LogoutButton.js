import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logoutSoft from '../icons/logout-soft.png';

const LogoutButton = () => {
   const { logout } = useAuth0();

  return (
    <img
      className='icons'
      src={logoutSoft}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    ></img>
  );
};

export default LogoutButton;


