import React, { createContext, useContext, useReducer, useEffect } from "react";

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
      return { ...state, user: action.payload, loading: false, error: null };
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
    console.log("Auth state has changed:", state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


