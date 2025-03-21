import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import {React, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import IconButton from "../../components/IconButton";
import { useAuth } from "../../context/authContext";
import { useProfile } from "../../context/profileContext";

const Analytics = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const { state } = useAuth(); 
  const { profile } = useProfile();
  const { profilePicture } = profile;
  const userName = state.user?.name || 'Guest' 

  const items = [
    {
      id: "1",
      name: "Airtime",
      transaction: "Purchase",
      price: "-₦5K",
      imageUrl: images.mtn,
    },
    {
      id: "2",
      name: "Netflix",
      transaction: "Subscribe",
      price: "-₦15K",
      imageUrl: images.netflix,
    },
  ];
  const handleClick = () => {
    Alert.alert("Button clicked!");
    // Add your desired function logic here
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between px-3 my-5">
          <View className="flex flex-row items-center relative">
            <View className=" z-10 w-[40px] h-[40px]  rounded-full p-3 justify-center items-center">
            <Image
          source={
            profilePicture
              ? { uri: `http://192.168.100.12:4000${profilePicture}`}
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
                      <Image source={icons.blueline} />
                    </View>

                    <View className="absolute">
                      <Image source={icons.redline} />
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
              <Image source={images.cash} className="w-[35px] h-[50px]" />
            </View>

            <View className="flex gap-1">
              <Text className="text-white text-[14px] font-sfProRoundedBold">
                Transactions this week
              </Text>
              <Text className="text-white text-fontColor-extraSoft text-[12px]">
                ₦20K more than last week
              </Text>
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

        <View className="">
          <View className="flex flex-row justify-between items-center my-4 mx-2">
            <Text className="text-white text-[32px] font-sfProRoundedBold">Today</Text>
            <Text className="text-white text-[14px] underline">See all</Text>
          </View>

          <View className="">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className={`bg-white w-[250px] h-[90px] p-1 pr-3 rounded-[20px] mr-5 ${
              hoveredIndex === index ? 'shadow-lg' : 'shadow-md'
            }`}
            onPressIn={() => setHoveredIndex(index)}
            onPressOut={() => setHoveredIndex(null)}
          >
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center gap-2">
                <Image
                  source={item.imageUrl}
                  className="w-[80px] h-[80px]"
                  resizeMode="contain"
                />
                <View className="flex gap-1">
                  <Text className="text-primary font-sfProRoundedBold text-[14px]">
                    {item.name}
                  </Text>
                  <Text className="text-primary font-sfPro text-[12px] ">
                    {item.transaction}
                  </Text>
                </View>
              </View>
              <Text className="text-past text-[16px] font-sfProRoundedBold ">
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>

    <Text className="text-white font-sfProRoundedBold text-[32px] my-4">Goals</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;
