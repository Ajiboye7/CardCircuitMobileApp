import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";
import { useProfile } from "../../context/profileContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import useSelectImage from "../../context/useSelectImage";
import useDeleteImage from "../../context/useDeleteImage";

const Profile = () => {
  const {pickImage} = useSelectImage()
  const {deleteImage} = useDeleteImage()

  const addImage= ()=>{
    pickImage()
  }

  const { state } = useAuth();
  const token = state.user?.token;
  const navigation = useNavigation();

  const previousScreen = () => {
    navigation.goBack();
  };

  const { profile } = useProfile();
  const { profilePicture } = profile;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { dispatch } = useProfile();
  //console.log(token)
  //console.log("Authorization header:", `Bearer ${token}`);

  const handleAddProfile = async () => {
    //console.log("Token:", token); // Add this line to log the token
    router.replace("/profile");

    if (!token) {
      return Alert.alert("Error", "You must be logged in to add a profile.");
    }

    if (!form.email || !form.name || !form.phone) {
      return Alert.alert("Error", "All fields are required to be filled");
    }

    try {
      const response = await axios.post(
        "http://192.168.100.12:4000/user/profile",
        { ...form, profilePicture },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      const userProfile = JSON.stringify(data);

      await AsyncStorage.setItem("profile", userProfile);

      dispatch({ type: "SET_PROFILE", payload: data });
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response?.data?.error || error.message;

        if (errorMessage.includes("E11000 duplicate key error")) {
          Alert.alert(
            "Error",
            "The email address is already registered. Please use a different email."
          );
        } else {
          Alert.alert("Error", errorMessage);
        }
      } else {
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
      }
    }
  };

  /*const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      const pickedImageUri = result.assets[0].uri;

      if (pickedImageUri) {
        const uriParts = pickedImageUri.split(".");
        const fileType = uriParts[uriParts.length - 1];

        const formData = new FormData();
        formData.append("photo", {
          uri: pickedImageUri,
          name: `profile_picture.${fileType}`,
          type: `image/${fileType}`,
        });

        try {
          const response = await axios.post(
            "http://192.168.100.12:4000/user/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const { profilePicture } = response.data;

          dispatch({ type: "UPDATE_PROFILE_PICTURE", payload: profilePicture });
          const updatedProfile = { ...state, profilePicture };
          await AsyncStorage.setItem("profile", JSON.stringify(updatedProfile));
        } catch (error) {
          Alert.alert("Error", "Failed to upload image. Please try again.");
        }
      }
    } else {
      Alert.alert("Error", "Image picker canceled or no valid image.");
    }
  };*/

  const removeImage = async () => {
    deleteImage()
    /*try {
      // Call the backend API to delete the profile picture
      await axios.delete("http://192.168.100.12:4000/user/upload", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update state and AsyncStorage to reflect the change
      dispatch({ type: "RESET_PICTURE" });
      const updatedProfile = { ...state, profilePicture: null };
      await AsyncStorage.setItem("profile", JSON.stringify(updatedProfile));

      Alert.alert("Success", "Profile picture has been deleted.");
    } catch (error) {
      console.error("Error deleting profile picture:", error);
      Alert.alert(
        "Error",
        "Failed to delete profile picture. Please try again."
      );
    }*/
  };

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
                ? { uri: `http://192.168.100.12:4000${profilePicture}` }
                : icons.profile2 // Default image if none is set
            }
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>

        <Text className="text-white text-[32px] font-sfProRoundedBold my-5 mx-3">
          Create Profile
        </Text>

        <View>
          <FormField
            title="Full Name"
            value={form.name}
            placeholder="John Doe"
            handleChangeText={(e) => setForm({ ...form, name: e })}
          />
          <FormField
            title="Email Address"
            value={form.email}
            placeholder="name@example.com"
            keyboardType="email-address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Phone Number"
            value={form.phone}
            placeholder="+234 1234567890"
            keyboardType="numeric"
            handleChangeText={(e) => setForm({ ...form, phone: e })}
          />
        </View>
        <View className="flex items-center justify-center mt-8">
          <CustomButton
            title="Add profile"
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
            handlePress={handleAddProfile}
          />
        </View>

        <TouchableOpacity onPress={addImage}>
          <Text className="text-white">Choose Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={removeImage}>
          <Text className="text-white">Remove Profile Picture</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;