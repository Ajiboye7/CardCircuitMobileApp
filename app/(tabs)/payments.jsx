import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { useAuth } from "../../context/authContext";
import {useProfile} from "../../context/profileContext"

const Payments = () => {
  const { state } = useAuth();
  const userName = state.user?.name || "Guest";
  const {profile} = useProfile()

  const { profilePicture } = profile;

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

  const HeaderComponent = () => (
    <>
      <View className="flex flex-row items-center justify-between px-3 my-5">
        <View className="flex flex-row items-center relative">
          <View className="z-10 w-[40px] h-[40px] rounded-full p-3 justify-center items-center">
          <Image
          source={
            profilePicture
              ? { uri: `http://192.168.100.12:4000${profilePicture}` }
              : icons.profile2
          }
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
          </View>

          <View className="relative">
            <Text className="text-white bg-secondary text-[16px] font-sfProRoundedBold p-2 w-[140px] h-[36px] text-center -ml-2 !rounded-r-[10px]">
              {userName}
            </Text>
            {/* Inverted curve using absolute positioning */}
            <View className="absolute bg-primary w-[25px] h-[36px] rounded-r-full right-32 top-0"></View>
          </View>
        </View>
        <Image source={icons.notification} className="w-[30px] h-[30px]" />
      </View>

      <Text className="text-white text-[32px] font-sfProRoundedBold mb-2">
        Payments
      </Text>
    </>
  );

  return (
    <SafeAreaView>
    <FlatList
        data={paymentData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View className="bg-tertiary-20 w-[175px] h-[170px] rounded-[20px] px-4 py-4 m-[5.5px]">
            <View className="w-[40px] h-[40px] bg-secondary-custom rounded-full justify-center items-center">
              <Image source={item.icon} />
            </View>

            <Text className="text-[14px] text-darkBlue leading-[20px] my-2">
              {item.title}
            </Text>
            <Text className="text-white text-[12px] leading-[20px]">
              {item.description}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-white text-center mt-5">
            No payment options available.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default Payments;
