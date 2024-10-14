import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import IconButton from "../../components/IconButton";

const Analytics = () => {

  const data = [
    { id: '1', name: 'Item 1', price: '$100', imageUrl: images.m },
    { id: '2', name: 'Item 2', price: '$200', imageUrl: images.item2 }
  ];
  const handleClick = () => {
    Alert.alert("Button clicked!");
    // Add your desired function logic here
  };

  

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

            <Text className="text-blue-600 underline">View More</Text>
          </View>

          <ImageBackground
            source={images.addCardBg}
            resizeMode="cover"
            className="h-[243px] justify-center items-center"
          >
            <View className="bg-tertiary-30 w-[361px] h-[180px] rounded-[20px]">
              <View className="flex flex-row justify-between items-center relative ml-5">
                <View className=" ">
                  <Text className="text-white text-[32px] font-sfProRoundedBold">
                    ₦100K
                  </Text>
                  <Text className="text-white text-[12px] font-sfPro ">
                    spent in the last week
                  </Text>
                </View>

                <View className="">
                  <View className="flex flex-row justify-center items-center gap-1 font-sfPro">
                    <View className="w-[4.85px] h-[4.85px] bg-present rounded-full"></View>
                    <Text className="text-white text-[12px]">This Week</Text>
                  </View>

                  <View className="flex flex-row justify-center items-center gap-1 font-sfPro">
                    <View className="w-[4.85px] h-[4.85px] bg-past rounded-full"></View>
                    <Text className="text-white text-[12px] ">Last Week</Text>
                  </View>
                </View>

                <View className="flex flex-row justify-center items-center fixed right-0 bottom-3">
                  <View className="bg-secondary flex flex-row w-[71px] h-[24px] justify-center items-center gap-1 mr-[-7px] rounded-l-xl">
                    <Image source={icons.dropDown} />
                    <Text className="text-white text-[12px]">Weekly</Text>
                  </View>

                  <View className="w-[35px] h-[35px] bg-secondary rounded-full justify-center items-center">
                    <Image source={icons.calender} />
                  </View>
                </View>
              </View>

              <View className="flex items-center w-full h-full">
                <View className="border border-solid border-fontColor-gray w-[291px] h-[105px] mt-2 relative rounded-[10px]">
                  <View className="flex flex-row justify-between items-end w-full h-full pb-2">
                    <Text className="text-center w-[41px] text-white">Mon</Text>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l   border-fontColor-gray"></View>
                      <Text className="text-center text-white">Tue</Text>
                    </View>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l border-fontColor-gray"></View>
                      <Text className="text-center text-white">Wed</Text>
                    </View>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l border-fontColor-gray"></View>
                      <Text className="text-center text-white">Thu</Text>
                    </View>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l border-fontColor-gray"></View>
                      <Text className="text-center text-white">Fri</Text>
                    </View>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l border-fontColor-gray"></View>
                      <Text className="text-center text-white">Sat</Text>
                    </View>

                    <View className="relative w-[41px]">
                      <View className="absolute bottom-0 left-0 h-full border-l border-fontColor-gray"></View>
                      <Text className="text-center text-white">Sun</Text>
                    </View>
                  </View>


                  <View className="absolute top-4">

                  <View className="absolute">
                  <Image
                    source={icons.blueline}
                  />
                  </View>
                

                <View className="absolute">
                <Image
                    source={icons.redline}
                  />
                </View>
                  </View>
                  
                  
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>



        <View className="flex flex-row items-center justify-between w-[361px] h-[90px] bg-secondary rounded-[20px] px-2">

          <View className="flex flex-row items-center gap-1">

          <View className="bg-lightBlue w-[80px] h-[80px] rounded-[20px] justify-center items-center">
          <Image
            source={images.cash}
            className="w-[35px] h-[50px]"
          />
          </View>

          <View className="flex gap-1">
          <Text className='text-white text-[14px] font-sfProRoundedBold'>Transactions this week</Text>
          <Text className='text-white text-fontColor-extraSoft text-[12px]'>₦20K more than last week</Text>
          </View>
          

          </View>
          
          <View className="">
                <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
                  <View className="w-[30px] h-[30px] bg-secondary rounded-full items-center justify-center">
                    <Image source={icons.arrowRight} />
                  </View>
                </TouchableOpacity>
              </View>
        </View>


        <View>

          <View>
          <Text className="text-white">Today</Text>
          <Text className="text-white">See all</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

{
  /*<View className="">

                    <View className="">
                      <Text className="text-white">Mon</Text>
                     
                    </View>

                    <View>
                      <Text className="text-white border-l-4 border-solid border-green-500 ">Tue</Text>

                      <View className=" ">
                      
                      </View>
                      
                    </View>
                    
                    <View>
                      <Text className="text-white">Wed</Text>
                      <Image source={icons.line} />
                    </View>
                    
                    <View>
                      <Text className="text-white">Thu</Text>
                      <Image source={icons.line} />
                    </View>

                    <View>
                      <Text className="text-white">Fri</Text>
                      <Image source={icons.line} />
                    </View>

                    <View>
                      <Text className="text-white">Sat</Text>
                      <Image source={icons.line} />
                    </View>

                    <View>
                      <Text className="text-white">Sun</Text>
                      <Image source={icons.line} />
                    </View>
                    

                  </View>*/
}
