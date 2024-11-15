import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useProfile } from "../../context/profileContext";
import { Alert } from "react-native";
import { useAuth } from "../../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const UpdateProfile = () => {

    const {dispatch} =  useProfile()
  const { state } = useAuth();
  const token = state.user?.token;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleUpdate = async () => {
    if (!token) {
      return Alert.alert("Error", "You must be logged in to update your profile.");
    }

    try {
      const response = await axios.put(
        "http://192.168.100.12/user/profile",
        { ...form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      await AsyncStorage.setItem("profile", JSON.stringify(data));

      dispatch({ type: "UPDATE_PROFILE", payload: data });

      Alert.alert("Success", "Profile updated successfully.");
      router.replace("/profile");
    } catch (error) {
      console.error("Error updating profile:", error.response?.data?.error || error.message);
      Alert.alert("Error", "Failed to update profile.");
    }
  };
  return (
    <SafeAreaView  className="h-full">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        <Text className="text-white text-[32px] font-sfProRoundedBold my-5 mx-3">
          Update Profile
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
            title="Update profile"
            containerStyles="w-[174.2px] h-[50px]"
            textStyles="text-[16px]"
            handlePress={handleUpdate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;
