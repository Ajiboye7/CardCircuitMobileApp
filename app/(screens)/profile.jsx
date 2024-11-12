import { View, Text, ScrollView, Image } from "react-native";
import {React, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../../components/IconButton";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import {useProfile} from '../../context/profileContext'

const Profile = () => {

  const {profile} = useProfile()

  const { name, email, phone, user_id, profilePicture } = profile


  const handleEdit = () =>{
    router.replace("/edit-profile")
  }

  return (

    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text className='text-white'>{user_id || "no id"}</Text>
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
            <Text className="text-white font-sfProRoundedBold">{name || "add name"}</Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">Email</Text>
            <Text className="text-white font-sfProRoundedBold">{email || "add email"}</Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">
              Phone Number
            </Text>
            <Text className="text-white font-sfProRoundedBold">{phone || "add phone"}</Text>
          </View>

          <View className="justify-center items-center mt-8">
          <CustomButton 
            title="Edit Profile"
            handlePress={handleEdit}

          />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
