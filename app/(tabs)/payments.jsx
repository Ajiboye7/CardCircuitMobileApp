import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const payments = () => {
  const paymentData = [
    {
      id: "1",
      title: "Transfer between \nCards",
      description: "Move money swiftly \nbetween cards",
      icon: icons.swap,
    },

    {
      id: "2",
      title: "Send or Receive \nMoney",
      description: "Local and international \nmoney transfers",
      icon: icons.pay,
    },

    {
      id: "3",
      title: "Airtime and Data \nPurchase",
      description: "Buy airtime and data \nfor all local networks",
      icon: icons.simCard,
    },

    {
      id: "4",
      title: "Manage \nSubscriptions",
      description: "Manage and automate \nyour subscriptions",
      icon: icons.pay,
    },

    {
      id: "5",
      title: "Make QR \nPayments",
      description: "Move money swiftly \nbetween cards",
      icon: icons.scan2,
    },

    {
      id: "6",
      title: "Utility Bills and \nPayments",
      description: "Make your utility \npayments effortlessly",
      icon: icons.utility,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
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

        <Text className="text-white text-[32px] font-sfProRoundedBold mb-2">
          payments
        </Text>

        <View className="">
        <FlatList
          data={paymentData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View className="bg-tertiary-20 w-[175px] h-[170px] rounded-[20px] px-4 py-4 m-[5.5px]">
              <View className="w-[40px] h-[40px] bg-secondary-custom rounded-full justify-center items-center">
                <Image source={item.icon} />
              </View>

              <Text className=" text-[14px] text-darkBlue leading-[20px] my-2">
                {item.title}
              </Text>
              <Text className="text-white text-[12px] leading-[20px]">
                {item.description}
              </Text>
            </View>
          )}
        />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default payments;
