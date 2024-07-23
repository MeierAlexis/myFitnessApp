import AppNavigator from './app';
import AuthNavigator from './auth';
import React from 'react';

const MainSwitchNavigator = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default MainSwitchNavigator;
