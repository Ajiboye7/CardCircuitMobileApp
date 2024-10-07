import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="flex flex-row items-center justify-between px-3">
      <View className="flex flex-row items-center relative">
      <View className="bg-secondary z-10 w-[40px] h-[40px]  rounded-full p-3 justify-center items-center">
          <Image source={icons.profile}
           className="w-[30px] h-[30px]"/>
        </View>
     
        <View className="relative">
        <Text className="text-white bg-secondary p-2 w-[140px] h-[36px] text-center -ml-2">
          Username
        </Text>
        {/* Inverted curve using absolute positioning */}
        <View className="absolute bg-primary w-[25px] h-[36px] rounded-r-full right-32 top-0"></View>
      </View>
    </View>
    <Image source={icons.notification} className="w-[30px] h-[30px]" />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Home;
