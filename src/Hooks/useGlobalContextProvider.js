import * as React from "react";
import { useLocalStorage } from "react-use";

export default function useGlobalContextProvider() {
  const [token, setToken, clearToken] = useLocalStorage("token");
  const [user, setUser, clearUser] = useLocalStorage("user");
  const [activeStep, setActiveStep] = React.useState(0);

  return {
    token,
    setToken,
    clearToken,
    user,
    setUser,
    clearUser,
    activeStep,
    setActiveStep,
  };
}
