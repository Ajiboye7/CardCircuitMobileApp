import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const payments = () => {

  const paymentData =[
    {
      id: "1",
      title:"Transfer between Cards",
      description: "Move money swiftly between cards",
      icon: icons.swap
    },

    {
      id: "2",
      title:"Send or Receive Money",
      description: "Local and international money transfers",
      icon: icons.pay
    },

    {
      id: "3",
      title:"Make QR Payments",
      description: "Move money swiftly between cards",
      icon: icons.scan
    },
    

    {
      id: "4",
      title:"Send or Receive Money",
      description: "Local and international money transfers",
      icon: icons.pay
    },
    {
      id: "5",
      title:"Manage Subscriptions",
      description: "Manage and automate your subscriptions",
      icon: icons.subscription
    },
    

    {
      id: "6",
      title:"Utility Bills and Payments",
      description: "Make your utility payments effortlessly",
      icon: icons.utility
    },
    
    
    
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row items-center justify-between px-3 my-5">
          <View className="flex flex-row items-center relative">
            <View className=" z-10 w-[40px] h-[40px]  rounded-full p-3 justify-center items-center">
              <Image source={icons.profile2} className="w-[50px] h-[50px]" />
            </View>

            <View className="relative">
              <Text className="text-white bg-secondary text-[16px] font-sfProRoundedBold p-2 w-[140px] h-[36px] text-center -ml-2 !rounded-r-[10px]">
                Ajiboye
              </Text>
              {/* Inverted curve using absolute positioning */}
              <View className="absolute bg-primary w-[25px] h-[36px] rounded-r-full right-32 top-0"></View>
            </View>
          </View>
          <Image source={icons.notification} className="w-[30px] h-[30px]" />
        </View>

        <Text className="text-white text-[32px]  font-sfProRoundedBold">
          payments
        </Text>



      </ScrollView>
    </SafeAreaView>
  );
};

export default payments;
