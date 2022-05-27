import GlobalContext from "./GlobalContext";
import useGlobalContextProvider from "../Hooks/useGlobalContextProvider";

export default function GlobalContextProvider(props) {
  const valuesProvider = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={valuesProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}
