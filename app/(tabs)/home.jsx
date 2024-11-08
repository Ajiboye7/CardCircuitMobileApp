import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { images } from "../../constants";
import { TouchableOpacity } from "react-native";
import IconButton from "../../components/IconButton";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useAuth } from "../../context/authContext";
import { useSignOut } from "../../context/useSignOut";

const Home = () => {

  const { state } = useAuth(); 
  const userName = state.user?.name || 'Guest' 

  const params = useLocalSearchParams();
  const cardNumber = params.cardNumber || null;
  const cardAlias = params.cardAlias || null;
  const cardBalance = params.cardBalance || null;

  const logout = useSignOut();

  const handleClick = () => {
    logout();
  };

  const handleAddCard = () => {
    router.push("/add-profile");
  };  
 
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between px-3 my-5">
          <View className="flex flex-row items-center relative">
            <View className="bg-secondary z-10 w-[40px] h-[40px]  rounded-full p-3 justify-center items-center">
              <Image source={icons.profile} className="w-[30px] h-[30px]" />
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
          <Text className="text-white text-[32px]  font-sfProRoundedBold">
            My Cards
          </Text>
          <ImageBackground
            source={images.addCardBg}
            resizeMode="cover"
            className="h-[243px] justify-center items-center"
          >
            {cardBalance && cardAlias && cardNumber ? (
              <View className="bg-tertiary-30 w-[313px] h-[180px] rounded-[20px] relative justify-center items-center">
                <View className="w-[313px] h-[180px] bg-tertiary-30 justify-center items-center rounded-[20px] ">
                  <Text className="text-white text-[32px] font-sfProRoundedBold mb-3">
                    ₦500K
                  </Text>
                  <Text className="text-white text-[16px] font-sfPro mb-3">
                    Primary Savings
                  </Text>
                  <Text className="text-white text-[14px] font-sfPro mb-3">
                    **** **** **** 3254
                  </Text>
                  <View>
                    <Image source={icons.masterCard} />
                  </View>
                </View>
                <View className="absolute right-[300px] top-[130px]">
                  <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
                    <View className="w-[30px] h-[30px] bg-secondary rounded-full items-center justify-center">
                      <Image source={icons.arrowLeft} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View className="absolute left-[300px] top-[130px]">
                  <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
                    <View className="w-[30px] h-[30px] bg-secondary rounded-full items-center justify-center">
                      <Image source={icons.arrowRight} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View className="bg-tertiary-30 w-[313px] h-[180px] rounded-[20px] relative justify-center items-center">
                <TouchableOpacity onPress={handleAddCard} activeOpacity={0.7}>
                  <View className="justify-center items-center flex flex-col gap-3">
                    <View className="bg-secondary w-[20px] h-[20px] items-center justify-center rounded-full p-4">
                      <Image source={icons.add} />
                    </View>

                    <Text className="text-white text-[14px] font-sfPro">
                      Add a new Card
                    </Text>
                  </View>
                </TouchableOpacity>

                <View className="absolute right-[300px] top-[130px]">
                  <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
                    <View className="w-[30px] h-[30px] bg-secondary rounded-full items-center justify-center">
                      <Image source={icons.arrowLeft} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View className="absolute left-[300px] top-[130px]">
                  <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
                    <View className="w-[30px] h-[30px] bg-secondary rounded-full items-center justify-center">
                      <Image source={icons.arrowRight} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ImageBackground>
          <View></View>
        </View>

        <View className="flex flex-row items-center justify-center gap-4">
          <View>
            <IconButton iconSource={icons.add} title="Add" 
              
            />
          </View>

          <View>
            <IconButton iconSource={icons.send} title="Send" />
          </View>

          <View>
            <IconButton iconSource={icons.scan} title="Scan" />
          </View>

          <View>
            <IconButton iconSource={icons.more} title="More" />
          </View>
        </View>

        <View className="px-3 mt-5 pb-5">
          <Text className="text-white text-[32px] font-sfProRoundedBold">
            Balance
          </Text>
          <View className="flex flex-row items-center justify-between my-5">
            <Text className="text-white">
              You can monitor your balance in real{"\n"}
              time. Let’s get you set up!
            </Text>
            <CustomButton containerStyles="w-[73px] h-[40px]" title="Set Up" />
          </View>
          <Text className="text-white text-[32px] font-sfProRoundedBold mb-3">
            Today
          </Text>

          <Text className="text-white text-[14px] font-sfPro mb-4">
            Add a Card to get all updates on daily transactions.
          </Text>
          <CustomButton title="LOgout" handlePress={handleClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
