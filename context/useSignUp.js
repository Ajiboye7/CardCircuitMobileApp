import { useAuth } from "../context/authContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSignUp = () => {
  const { dispatch } = useAuth();

  const register = async ({ name, email, password, retypePassword }) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.post(
        "http://192.168.100.12:4000/user/signUp",
        { name, email, password, retypePassword }
      );
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "LOGIN_SUCCESS", payload: token });
      return response;
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.response?.data });
      throw error;
    }
  };

  return { register };
};

export default useSignUp;
