import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProfile } from "../context/profileContext";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { Alert } from "react-native";

const useDeleteImage = () => {
    const {dispatch} = useProfile()
    const { state } = useAuth();
    const token = state.user?.token;


    const deleteImage = async () => {
        try {
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
        }
      };

      return {deleteImage}
}

export default useDeleteImage;
