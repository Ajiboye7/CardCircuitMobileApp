import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";

const Analytics = () => {
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
                Username
              </Text>
              {/* Inverted curve using absolute positioning */}
              <View className="absolute bg-primary w-[25px] h-[36px] rounded-r-full right-32 top-0"></View>
            </View>
          </View>
          <Image source={icons.notification} className="w-[30px] h-[30px]" />
        </View>

        <View>
          <View className="flex flex-row items-center justify-between px-3">
            <Text className="text-white text-[32px]  font-sfProRoundedBold">
              Analytics
            </Text>

            <Text className="text-blue-600 underline">View Cards</Text>
          </View>

          <ImageBackground
            source={images.addCardBg}
            resizeMode="cover"
            className="h-[243px] justify-center items-center"
          >
            <View className="bg-tertiary-30 w-[313px] h-[180px] rounded-[20px]">


              <View className='flex flex-row justify-center items-center'>

                <View>
                  <Text className="text-white text-[32px] font-sfProRoundedBold">₦100K</Text>
                  <Text className="text-white">spent in the last week</Text>
                </View>

                <View>

                  <View className="flex flex-row justify-center items-center gap-1 font-sfPro">
                    <View className="w-[4.85px] h-[4.85px] bg-present rounded-full"></View>
                    <Text className="text-white text-[12px]">This Week</Text>
                  </View>

                  <View className="flex flex-row justify-center items-center gap-1 font-sfPro">
                  <View className="w-[4.85px] h-[4.85px] bg-past rounded-full"></View>
                    <Text className="text-white text-[12px] ">Last Week</Text>
                  </View>

                </View>

                <View className="flex flex-row justify-center items-center">
                  <View className="bg-secondary flex flex-row w-[71px] h-[24px] justify-center items-center">
                    <Image
                      source={icons.dropDown}
                    />
                    <Text className="text-white ">Weekly</Text>
                  </View>

                  <View className="w-[35px] h-[35px] bg-secondary rounded-full justify-center items-center">
                  <Image 
                    source={icons.calender}
                  />
                  </View>
                 

                </View>
              </View>


            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;
