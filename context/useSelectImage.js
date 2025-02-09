import * as ImagePicker from "expo-image-picker";
import { useProfile } from "../context/profileContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const useSelectImage = () => {
  const { dispatch } = useProfile();

  const pickImage = async () => {
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
  };
  return { pickImage };
};

export default useSelectImage;
