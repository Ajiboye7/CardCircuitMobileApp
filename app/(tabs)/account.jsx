import { View, Text, ScrollView, Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { React, useState } from "react";
import { icons } from "../../constants";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Account = () => {
  const [isSwitch1Enabled, setIsSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setIsSwitch2Enabled] = useState(false);

  // Function to toggle the switch
  const toggleSwitch1 = () =>
    setIsSwitch1Enabled((previousState) => !previousState);
  const toggleSwitch2 = () =>
    setIsSwitch2Enabled((previousState) => !previousState);

  const items = [
    {
      id: "1",
      title: "My Account Settings",
      icon: icons.setting,
    },

    {
      id: "2",
      title: "Retrieve Financial Overview",
      icon: icons.money,
    },

    {
      id: "3",
      title: "Manage Subscriptions",
      icon: icons.setting,
    },

    {
      id: "4",
      title: "Self Help",
      icon: icons.info,
    },

    {
      id: "5",
      title: "Security",
      icon: icons.securitySafe,
    },

    {
      id: "6",
      title: "Linked Cards",
      icon: icons.card,
    },

    {
      id: "7",
      title: "Card Lock",
      icon: icons.setting,
    },

    {
      id: "8",
      title: "Contact Us",
      icon: icons.call,
    },

    {
      id: "9",
      title: "Log Out",
      icon: icons.logOut,
    },
  ];

  return (
    <SafeAreaView className=" mt-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between items-center mb-6 mx-3">
          <View className="flex gap-1">
            <Text className="text-white text-[32px] font-sfProRoundedBold">
              My Account,
            </Text>
            <Text className="text-fontColor-light-90 text-[12px]">
              Ajiboye
            </Text>
          </View>
          <Image source={icons.profile2} />
        </View>

        <View className="flex flex-row justify-between items-center mb-3 mx-3 text-[14px]">
          <Text className="text-fontColor-light-90">
            Enable Finger Print/Face ID
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitch1Enabled ? "#3555F5" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isSwitch1Enabled}
          />
        </View>

        <View className="flex flex-row justify-between items-center mb-3 mx-3 text-[14px]">
          <Text className="text-fontColor-light-90">
            Show Dashboard Account Balance
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitch2Enabled ? "#3555F5" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isSwitch2Enabled}
          />
        </View>

        <View className="w-[361px] h-[465px] bg-tertiary-20 flex flex-col justify-around px-3 py-3 mr-3 ml-2 rounded-[20px]">
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-around",
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                <View className="flex flex-row justify-between items-center ">
                  <View className="flex flex-row gap-3 items-center">
                  <View className="bg-tertiary-20 w-[30px] h-[30px] rounded-full justify-center items-center">
                  <Image source={item.icon} />
                  </View>
                  <Text
              className={`text-[14px] ${
                index === items.length - 1
                  ? "text-past"
                  : "text-fontColor-light-90"
              }`}
            >{item.title}</Text>
                  </View>

                  <Image source={icons.arrow} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
