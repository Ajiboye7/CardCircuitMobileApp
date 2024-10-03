import { View, Text, ScrollView,Image } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import { Redirect, router,Link } from "expo-router";


const Onboarding = () => {
  return (
   <SafeAreaView className="bg-primary h-full">
   <ScrollView contentContainerStyle={{height:"100%"}}>
    <View>
    <View className="h-1/2">
    <Image
    source={images.indexImage}
    resizeMode='contain'
    />
    </View>
    
    <View className="h-1/2">
    <Text className="text-white my-10 text-[32px] leading-[40px]">
        <Text style={{ fontWeight: 'bold' }}>Simplify Your</Text>
        <Text style={{ color: 'yellow' }}> Wallet.</Text>
        <Text>{'\n'}Unify Your </Text>
        <Text style={{ fontWeight: 'bold' }}>Finances.</Text>
      </Text>
      <Text className="text-white">
      Welcome to seamless centralized banking.{'\n'}
      Manage and track all your cards in one app. 
      </Text>
      <CustomButton
        title="Get Started"
        handlePress={()=> router.push('/sign-up')}

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

export default Onboarding