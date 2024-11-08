// useLogOut.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useAuth } from "./authContext";
import { router } from "expo-router";

export const useSignOut = () => {
  const { dispatch } = useAuth(); 

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      router.replace("/sign-in");
      Alert.alert("Success", "You have been signed out.");
    } catch (error) {
      console.error("Error during sign out:", error);
      Alert.alert("Error", "Failed to sign out. Please try again.");
    }
  };

  return handleLogOut;
};
