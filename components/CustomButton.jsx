import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({handlePress,textStyles,title,containerStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-[10px] ${containerStyles}`}
    >
    <Text className={`text-light font-590 ${textStyles}`}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton