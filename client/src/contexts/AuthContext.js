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
  const [userToken, setUserToken] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const token = await auth.currentUser.getIdToken();
        console.log('tokeeeen', token)
        setUserToken(token);
      }
    });
    return unsubscribe;
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
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  const getIDToken = async () => {
    try {
      const token = await currentUser.getIdToken(true);
      return token;
    } catch (error) {
      console.error('Error getting ID token: ', error);
    }
  };

  const logOut = async () => {
    try {
      return await auth.signOut();
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  const resetPassword = async (email) => {
    try {
      return await auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.error('Error resetting password: ', error);
    }
  };

  const updateEmail = async (email) => {
    try {
      return await currentUser.updateEmail(email);
    } catch (error) {
      console.error('Error updating email: ', error);
    }
  };

  const updatePassword = async (password) => {
    try {
      return await currentUser.updatePassword(password);
    } catch (error) {
      console.error('Error updating password: ', error);
    }
  };

  const deleteUser = async () => {
    try {
      return await currentUser.delete();
    } catch (error) {
      console.error('Error deleting user: ', error);
    }
  };

  const value = {
    userToken,
    currentUser,
    signUp,
    logIn,
    // getIDToken,
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

