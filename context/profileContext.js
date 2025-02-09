import { createContext, useReducer, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profileContext = createContext();

export const useProfile = () => useContext(profileContext);

const initialState = {
  name: "",
  email: "",
  phone: "",
  profilePicture: null,
  loading: true,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      // Log the profile data
      return { ...state, ...action.payload, loading:false };
    case "UPDATE_PROFILE":
      return { ...state, ...action.payload };

    case "UPDATE_PROFILE_PICTURE":
      return { ...state, profilePicture:action.payload };

      case "RESET_PICTURE":
        return { ...state, profilePicture:null };

    case "RESET_PROFILE":
      return initialState;

    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  useEffect(() => {
    const loadProfile = async () => {
      const savedProfile = await AsyncStorage.getItem("profile");
      
      if (savedProfile) {
        dispatch({ type: "SET_PROFILE", payload: JSON.parse(savedProfile)});
      }
      console.log("user saved data is", savedProfile)
    };
    loadProfile();
  }, []);

  return (
    <profileContext.Provider value={{ profile: state, dispatch }}>
      {children}
    </profileContext.Provider>
  );
};
