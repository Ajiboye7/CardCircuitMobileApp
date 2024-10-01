import { View, Text,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";


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
      <CustomButton
        title="Get Started"
        handlePress={()=> router.push('/analytics')}
      />
    </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default index