import { View, Text,Image,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import { Redirect, router,Link } from "expo-router";


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
    
        <Text cl>Simplify Your</Text>
        <Text style={{ color: 'yellow' }}>Wallet.</Text>
        <Text className="text-white">{'\n'}Unify Your </Text>
        <Text className="text-white">Finances.</Text>
      
      <Text className="text-white">
      Welcome to seamless centralized banking.{'\n'}
      Manage and track all your cards in one app. 
      </Text>
      <CustomButton
        title="Get Started"
        handlePress={()=> router.push('/analytics')}
      />
      <View className="flex-row gap-2 pt-5">
          <Text className="text-lg text-gray-100 font-sfPro">Already have an account?</Text>
          <Link href="/home" className="text-secondary text-lg font-psemibold">Log In </Link>
        </View>
    </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default index