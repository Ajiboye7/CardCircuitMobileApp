import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';

const IconButton = () => {
  const handleClick = () => {
    Alert.alert("Button clicked!");
    // Add your desired function logic here
  };

  return (
    <View>
      <TouchableOpacity onPress={handleClick}>
        
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
