
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useAuth } from "./authContext";
import { useProfile } from "./profileContext";
import { router } from "expo-router";

export const useSignOut = () => {
  const { dispatch: authDispatch } = useAuth();
const { dispatch: profileDispatch } = useProfile();

  const handleLogOut = async () => {
    try {
      await Asyn 
      console.error("Error during sign out:", error);
      Alert.alert("Error", "Failed to sign out. Please try again.");
    }
  };

  return handleLogOut;
};
