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
   </SafeAreaView>
  )
}

export default Onboarding