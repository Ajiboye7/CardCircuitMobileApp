import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { images } from "../../constants";
import { TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row items-center justify-between px-3 my-5">
          <View className="flex flex-row items-center relative">
            <View className="bg-secondary z-10 w-[40px] h-[40px]  rounded-full p-3 justify-center items-center">
              <Image source={icons.profile} className="w-[30px] h-[30px]" />
            </View>

            <View className="relative">
              <Text className="text-white bg-secondary text-[16px] font-sfProRoundedBold p-2 w-[140px] h-[36px] text-center -ml-2">
                Username
              </Text>
              {/* Inverted curve using absolute positioning */}
              <View className="absolute bg-primary w-[25px] h-[36px] rounded-r-full right-32 top-0"></View>
            </View>
          </View>
          <Image source={icons.notification} className="w-[30px] h-[30px]" />
        </View>

        <View>
          <Text className="text-white text-[32px]  font-sfProRoundedBold">
            My Cards{" "}
          </Text>
          <ImageBackground
            source={images.addCardBg}
            resizeMode="cover"
            className="h-[243px] justify-center items-center"
          >
            <View className="bg-tertiary-30 w-[313px] h-[180px] rounded-[20px] relative">
              <View className="justify-center items-center flex-1 gap-5">
                <View className="bg-secondary w-[20px] h-[20px] items-center justify-center rounded-full p-4">
                  <Image source={icons.add} />
                </View>

                <Text className="text-white text-[14px] font-sfPro">Add a new Card</Text>
              </View>
              <View className=" w-[30px] h-[30px] absolute bottom-5 right-[297px] bg-secondary rounded-full items-center justify-center">
                <Image source={icons.arrowLeft} className="w-[40px] h-[40px]" />
              </View>
              <View className="w-[30px] h-[30px] absolute bottom-5 left-[297px] bg-secondary rounded-full items-center justify-center">
                <Image
                  source={icons.arrowRight}
                  className="w-[40px] h-[40px]"
                />
              </View>
            </View>
          </ImageBackground>
          <View>
          </View>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
