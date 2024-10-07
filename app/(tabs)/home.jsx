import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-web";
import { icons } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={icons.profile} />
            <Text className="text-white">Username</Text>
          </View>
          <Image
            source={icons.notification}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
