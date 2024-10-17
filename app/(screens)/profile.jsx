import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../../components/IconButton";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row justify-between items-center mt-5 mx-3">
          <View className="bg-secondary w-[30px] h-[30px] rounded-full">
            <Image source={icons.arrowLeft} />
          </View>
          <Image source={icons.profile2} />
        </View>

        <Text className="text-white text-[32px] font-sfProRoundedBold my-5 mx-3">
          My Profile
        </Text>
        <View className='flex flex-row justify-between items-center mb-4 mx-3'>
            <Text className='text-white'>USer ID</Text>
            <Text className='text-white'>ee29euf0d29eu29</Text>
        </View>
        <View className=" bg-tertiary-20 h-[433px] mx-2 px-3 pt-5 rounded-[20px]">
          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">
              Display Picture
            </Text>
            <Image source={icons.profile2} />
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">Name</Text>
            <Text className="text-white font-sfProRoundedBold">Ajiboye</Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">Email</Text>
            <Text className="text-white font-sfProRoundedBold">ajiboyemuyideen7@gmail.com</Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">
              Phone Number
            </Text>
            <Text className="text-white font-sfProRoundedBold">08172710973</Text>
          </View>

          <View className="justify-center items-center mt-8">
          <CustomButton 
            title="Edit Profile"
          />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
