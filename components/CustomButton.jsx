import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({handlePress,textStyles,title,containerStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-[10px] h-[50px] w-[146px] justify-center items-center ${containerStyles}`}
    >
    <Text className={`text-white font-590 ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton