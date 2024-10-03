import { View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native-web'
import { icons } from "../../constants";
const SignUp = () => {
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

export default SignUp