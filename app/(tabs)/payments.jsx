import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";


const payments = () => {
  const paymentData = [
    {
      id: "1",
      title: " Transfer between \n Cards",
      description: "Move money swiftly \n between cards",
      icon: icons.swap,
    },

    {
      id: "2",
      title: "Send or Receive \n Money",
      description: "Local and international \n money transfers",
      icon: icons.pay,
    },

    {
      id: "3",
      title: "Make QR \n Payments",
      description: "Move money swiftly \n between cards",
      icon: icons.scan2,
    },

    {
      id: "4",
      title: "Send or Receive \n Money",
      description: "Local and international \n money transfers",
      icon: icons.pay,
    },
    {
      id: "5",
      title: "Manage \n Subscriptions",
      description: "Manage and automate \n your subscriptions",
      icon: icons.subscription,
    },

    {
      id: "6",
      title: "Utility Bills and \n Payments",
      description: "Make your utility \n payments effortlessly",
      icon: icons.utility,
    },
  ];
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

        <FlatList
          data={paymentData}
          keyExtractor={(item) => item.id} 
          numColumns={2}
          renderItem={(
            { item } 
          ) => (
            <View className="bg-tertiary-20 w-[175px] h-[170px]">
              <Image
                source={item.icon} 
              />
              <Text className=" text-[14px] text-darkBlue">{item.title}</Text>
              <Text className="text-white text-[12px]">{item.description}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default payments;
