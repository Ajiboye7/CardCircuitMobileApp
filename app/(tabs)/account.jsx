import { View, Text, ScrollView,Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {React, useState }from "react";
import { icons } from "../../constants";


const account = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  // Function to toggle the switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView className="mx-3 mt-5">
      <ScrollView>
      <View className="flex flex-row justify-between items-center">
        <View className="flex gap-1">
          <Text className="text-white text-[32px] font-sfProRoundedBold">My Account,</Text>
          <Text className="text-white text-[12px]">Username</Text>
        </View>
        <Image 
          source={icons.profile2}
        />
      </View>

      <View  className="flex flex-row justify-between items-center mb-3 text-[14px]" >
        <Text className="text-white">Enable Finger Print/Face ID</Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#3555F5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

      <View className="flex flex-row justify-between items-center mb-3 text-[14px]" >
        <Text className="text-white">Show Dashboard Account Balance</Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#3555F5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View> 


      </ScrollView>
    </SafeAreaView>
  );
};

export default account;


