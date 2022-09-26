//External dependencies
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  //Hooks
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsuscribe;
  }, []);

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
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

  const updateName = (name) => {
    return currentUser.updateProfile({ displayName: name });
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
    updateName,
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

