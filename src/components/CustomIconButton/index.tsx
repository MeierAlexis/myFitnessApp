import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const CustomIconButton = () => {
  return (
    <View>
      <Text>
        Soy un Icon Button
        <AntDesign name="home" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default CustomIconButton;
