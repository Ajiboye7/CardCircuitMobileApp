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
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-[10px] h-[50px] w-[146px] justify-center items-center flex-row ${containerStyles}`}
    >
      {/* Render the icon if it exists */}
      {icon && (
        <Image source={icon} className="w-[20px] h-[20px] mr-2" />
      )}

      <Text className={`text-white font-590 text-[16px] font-sfPro ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
