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
t-white text-fontColor-light-90">Email</Text>
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
