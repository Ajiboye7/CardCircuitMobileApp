import { View, Text,TextInput } from 'react-native'
import React from 'react'


const FormField = ({title, value, placeholder, handleChangeText,keyboardType}) => {
  return (
    <View className="">
      <Text className="text-fontColor-gray">{title}</Text>
      <View className="bg-white w-[360px] h-[52px] rounded-[10px] border ">
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            keyboardType={keyboardType}
        />
      </View>
    </View>
  )
}

export default FormField