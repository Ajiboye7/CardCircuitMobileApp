import { createContext, useReducer, useContext } from "react";

const profileContext = createContext();

export const useProfile = () => useContext(profileContext);

const initialState = {
  name: "",
  email: "",
  phone: "",
  profilePicture: null,
};

const profilePicture: action.payload };

    case "RESET_PROFILE":
      return initialState;

    default:
      return state;
  }
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <profileContext.Provider value={{ profile: state, dispatch }}>
      {children}
    </profileContext.Provider>
  );
};
