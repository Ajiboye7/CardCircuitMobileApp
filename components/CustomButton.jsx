/*import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({handlePress,textStyles,title,containerStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-[10px] h-[50px] w-[146px] justify-center items-center ${containerStyles}`}
    >
    <Text className={`text-white font-590 text-[16px] font-sfPro ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton*/


import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const CustomButton = ({ handlePress, title, textStyles, containerStyles, icon }) => {
  return (
    <View>
      <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-[10px] h-[50px] w-[146px] justify-center items-center flex-row ${containerStyles}`}
    >

    <View className="flex flex-row items-center justify-center">
    <Text className={`text-white font-590 text-[16px] font-sfPro ${textStyles}`}>
        {title}
      </Text>

      {/* Render the icon if it exists */}
      {icon && (
        <Image source={icon} className="w-[30px] h-[30px]" />
      )}
    </View>
    </TouchableOpacity>
    </View>
    
  );
}

export default CustomButton;
