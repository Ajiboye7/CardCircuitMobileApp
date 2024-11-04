import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/authContext";
import axios from "axios";

const useSignIn = () => {
  const { dispatch } = useAuth();

  const logIn = async ({ email, password }) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.post(
        "http://192.168.0.3:4000/user/signIn",
        { email, password }
      );

      const { token, name: userName, email: userEmail } = response.data;
      await AsyncStorage.setItem("token", token);
      
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, name: userName, email: userEmail },
      });
      return response;
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.response?.data });
      throw Error;
    }
  };
  return { logIn };
};
export default useSignIn;
