import { View, Text,TextInput } from 'react-native'
import React from 'react'


const FormField = ({title, value, placeholder, handleChangeText,keyboardType}) => {
  return (
    <View className="">
      <Text className="text-white">{title}</Text>
      <View>
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