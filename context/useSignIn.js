import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/authContext";
import axios from "axios";

const useSignIn = () => {
  const { dispatch } = useAuth();

  const logIn = async ({ email, password }) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.post("http://192.168.100.12:4000/user/signIn", {
        email,
        password,
      });

      const { token, name: userName, email: userEmail } = response.data;
      const userData = JSON.stringify({
        token,
        name: userName,
        email: userEmail,
      });

      await AsyncStorage.setItem("user", userData);

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



/*

const logIn = async ({ email, password }) => {
  dispatch({ type: "SET_LOADING" });

  try {
    const response = await axios.post("http://192.168.0.2:4000/user/signIn", {
      email,
      password,
    });

    const { token, name: userName, email: userEmail } = response.data;

    // Store the token and user data
    const userData = JSON.stringify({
      token,
      name: userName,
      email: userEmail,
    });

    await AsyncStorage.setItem("user", userData);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token, name: userName, email: userEmail },
    });

    return response;
  } catch (error) {
    // If the error is due to token expiration, log the user out
    if (error.response?.status === 401) {
      dispatch({ type: "LOGOUT" });
      await AsyncStorage.removeItem("user");
      Alert.alert("Session Expired", "Your session has expired. Please log in again.");
      router.replace("/sign-in");
    } else {
      dispatch({ type: "LOGIN_ERROR", payload: error.response?.data });
      throw new Error("Login failed.");
    }
  }
};

*/