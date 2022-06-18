import React, {useEffect, useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../service/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const login = async (username, password) => {
    try {
      setIsLoading(true);
      setUserToken('tokentest');
      await AsyncStorage.setItem('userToken', 'tokentest');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    //With api
    /* setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      console.log(response);
      setUser(response);
      setUserToken(response.data.token);
      await AsyncStorage.setItem(
        'userToken',
        JSON.stringify(response.data.token),
      );
      await AsyncStorage.setItem('user', JSON.stringify(response.data));

      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } */
  };

  const logOut = async () => {
    try {
      setIsLoading(true);
      setUserToken(null);
      await AsyncStorage.removeItem('userToken');
      // await AsyncStorage.removeItem('user'); //With api
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('userToken');

      //With api
      /* let userInfo = await AsyncStorage.getItem('user');
      userInfo = JSON.parse(userInfo); 

      if (userInfo) {
        setUserToken(token); 
        setUser(userInfo);
      }*/

      setUserToken(token);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{login, logOut, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
