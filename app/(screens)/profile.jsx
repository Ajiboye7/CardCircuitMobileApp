import { View, Text, ScrollView, Image, Alert } from "react-native";
import { React, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { useProfile } from "../../context/profileContext";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { TouchableOpacity } from "react-native";

const Profile = () => {
  const navigation = useNavigation();

  const previousScreen = () => {
    navigation.goBack();
  };
  const { state } = useAuth();
  const token = state.user?.token;

  const { profile, dispatch } = useProfile();

  const { name, email, phone, user_id, loading, profilePicture } = profile;

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await axios.get("http://192.168.100.12:4000/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const profileData = response.data;
        dispatch({ type: "SET_PROFILE", payload: profileData });

        //console.log("Latest profile data:", profileData);
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Failed to fetch profile. Please try again.");
      }
    };
  
    fetchProfile();
  }, [token, dispatch]);


  const handleEditProfile = () => {
    router.replace("/edit-profile");
  };

  const handleAddProfile = () => {
    router.replace("/add-profile");
  };

  const isProfileComplete = name && email && phone;

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between items-center mt-5 mx-3">
          <View className="bg-secondary w-[30px] h-[30px] rounded-full">
          <TouchableOpacity onPress={previousScreen}>
          <Image source={icons.arrowLeft} />
          </TouchableOpacity>
            
          </View>
          <Image
            source={
              profilePicture
                ? { uri: `http://192.168.100.12:4000${profilePicture}`}
                : icons.profile2
            }
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>

        <Text className="text-white text-[32px] font-sfProRoundedBold my-5 mx-3">
          My Profile
        </Text>
        <View className="flex flex-row justify-between items-center mb-4 mx-3">
          <Text className="text-white">USer ID</Text>
          <Text className="text-white">
            {loading ? "Loading..." : user_id || "no id"}
          </Text>
        </View>
        <View className=" bg-tertiary-20 h-[433px] mx-2 px-3 pt-5 rounded-[20px]">
          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">
              Display Picture
            </Text>

            <Image
              source={
                profilePicture
                  ? { uri: `http://192.168.100.12:4000${profilePicture}`}
                  : icons.profile2 
              }
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">Name</Text>
            <Text className="text-white font-sfProRoundedBold">
              
              {loading ? "Loading..." : name || "Add name"}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">Email</Text>
            <Text className="text-white font-sfProRoundedBold">
              {loading ? "Loading..." : email || "add email"}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center border-b border-fontColor-gray pb-5 mb-5">
            <Text className="text-white text-fontColor-light-90">
              Phone Number
            </Text>
            <Text className="text-white font-sfProRoundedBold">
              {loading ? "Loading..." : phone || "add phone"}
            </Text>
          </View>

          <View className="justify-center items-center mt-8">
          {isProfileComplete ? (
              <CustomButton title="Edit Profile" handlePress={handleEditProfile} />
            ) : (
              <CustomButton title="Add Profile" handlePress={handleAddProfile} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
