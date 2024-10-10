import React from 'react';
import { View, TouchableOpacity, Alert, Image,Text } from 'react-native';



const IconButton = (iconSource, onPress, title) => {
  const handleClick = () => {
    Alert.alert("Button clicked!");
    // Add your desired function logic here
  };

  return (
    <View>
      <TouchableOpacity 
      onPress={handleClick}
      activeOpacity={0.7}>
      <View className="w-[64px] h-[64px] ">
      <Image
        source={iconSource}
        className="w-[24px] h-[24px]"
        />
      </View>
        
      </TouchableOpacity>
      <Text className="text-white text-[12px]">{title}</Text>
    </View>
  );
};

export default IconButton;
