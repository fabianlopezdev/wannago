//External dependencies
import React, { useContext, useState, useEffect } from 'react';
import { auth, up } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  //Hooks
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsuscribe;
  }, []);

  const signUp = async (email, password, name) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({
        displayName: name,
      });
      console.log('User successfully created: ', user);
      return user;
    } catch (error) {
      console.error('Error creating user: ', error);
    }

  };

  const logIn = async (email, password) => {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    console.log('user', user)
    return user;
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  const deleteUser = () => {
    return currentUser.delete();
  };

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


