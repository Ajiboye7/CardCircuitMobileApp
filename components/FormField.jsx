import { View, Text,TextInput } from 'react-native'
import React from 'react'


const FormField = ({title, otherStyles, value, placeholder, handleChangeText,keyboardType}) => {
  return (
    <View className={`mt-5 ${otherStyles}`}>
      <Text className="text-fontColor-gray text-[16px] mb-2">{title}</Text>
      <View className="bg-white w-[360px] h-[52px] rounded-[10px] border justify-center items-start p-5">
        <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#858585"
            className="text-[16px]"
            onChangeText={handleChangeText}
            keyboardType={keyboardType}

        />
      </View>
    </View>
  )
}

export default FormField