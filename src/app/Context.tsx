import React, { useReducer, useContext } from "react";
import { reducer, initialState } from "./setting/duck";

const SettingContext = React.createContext({});

type Props = {
  children: any;
};

export const SettingProvider = (props: Props) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <SettingContext.Provider value={contextValue}>
      {props.children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => useContext(SettingContext);
