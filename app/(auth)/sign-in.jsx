import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native-web'
import { icons } from "../../constants";
const SignIn = () => {
  return (
  <SafeAreaView>
    <ScrollView>
      <View>
        <Image
          source={icons.arrowLeft}
          resizeMode='contain'
        />
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignIn