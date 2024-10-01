import { View, Text,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"


const index = () => {
  return (
   <SafeAreaView className="bg-primary h-full">
   <ScrollView contentContainerStyle={{height:"100%"}}>
    <View>
    <Image
    source={images.indexImage}
    resizeMode='contain'
    />
    <View>
      <Text className="text-white">
      Simplify Your Wallet.
      Unify Your Finances.
      </Text>
      <Text className="text-white">
      Welcome to seamless centralized banking.
      Manage and track all your cards in one app. 
      </Text>
    </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default index