import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import React from 'react';

const CTAButton = ({
  text = '',
  buttonContainerStyle = {},
  textStyle = {},
  handleButtonPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonContainerStyle]}
      onPress={handleButtonPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CTAButton;
