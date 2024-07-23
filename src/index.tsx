import {NavigationContainer} from '@react-navigation/native';
import MainSwitchNavigator from './navigation';
import React from 'react';
import CustomNextButton from './components/CustomNextButton';
import CustomObjetiveButton from './components/CustomObjetiveButton';
const FitnessApp = () => {
  return (
    <NavigationContainer>
      <MainSwitchNavigator />
      <CustomNextButton text={'Next'} />
      <CustomObjetiveButton text={'Objetive 1'} />
    </NavigationContainer>
  );
};
export default FitnessApp;
