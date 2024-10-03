import { View, Text,TextInput } from 'react-native'
import React from 'react'


const FormField = ({title}) => {
  return (
    <View className="">
      <Text>{title}</Text>
      <View>
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

export default FormField