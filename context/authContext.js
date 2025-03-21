import React, { createContext, useContext, useReducer, useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null};
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};
 
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    
    const checkUser = async () => {
         
      const userData = await AsyncStorage.getItem("user");

      if (userData) {
        const user = JSON.parse(userData);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: user,
        });

        router.replace("/home");
      } else {
        router.replace("/sign-in");
      }
    };

    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
