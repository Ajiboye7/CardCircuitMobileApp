import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <View className="flex flex-row">
        <View className="bg-secondary w-[40px] h-[40px] rounded-full p-3 justify-center items-center ">
            <Image source={icons.profile}
             className="w-[30px] h-[30px]"/>
          </View>
          <Text className="text-white bg-secondary p-2 w-[140px] h-[36px]">
            Username
          </Text>
        </View>
          <Image source={icons.notification} className="w-[30px] h-[30px]" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
