import { View, Text, ScrollView,Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {React, useState }from "react";
import { icons } from "../../constants";


const account = () => {

  const [isSwitch1Enabled, setIsSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setIsSwitch2Enabled] = useState(false);

  // Function to toggle the switch
  const toggleSwitch1 = () => setIsSwitch1Enabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsSwitch2Enabled(previousState => !previousState);

  return (
    <SafeAreaView className="mx-3 mt-5">
      <ScrollView>
      <View className="flex flex-row justify-between items-center mb-5">
        <View className="flex gap-1">
          <Text className="text-white text-[32px] font-sfProRoundedBold">My Account,</Text>
          <Text className="text-fontColor-light-90 text-[12px]">Username</Text>
        </View>
        <Image 
          source={icons.profile2}
        />
      </View>

      <View  className="flex flex-row justify-between items-center mb-3 text-[14px]" >
        <Text className="text-fontColor-light-90">Enable Finger Print/Face ID</Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isSwitch1Enabled ? '#3555F5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isSwitch1Enabled}
      />
      </View>

      <View className="flex flex-row justify-between items-center mb-3 text-[14px]" >
        <Text className="text-fontColor-light-90">Show Dashboard Account Balance</Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isSwitch2Enabled ? '#3555F5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isSwitch2Enabled}
      />
      </View> 


      </ScrollView>
    </SafeAreaView>
  );
};

export default account;


