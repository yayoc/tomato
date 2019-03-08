import React, { useReducer, useContext } from "react";
import {
  reducer as settingReducer,
  initialState as settingInitialState
} from "./modules/setting";
import {
  reducer as logReducer,
  initialState as logInitialState
} from "./modules/log";
import {
  reducer as entityReducer,
  initialState as entityInitialState
} from "./modules/entity";

type Props = {
  children: any;
};

const SettingContext = React.createContext({});
export const SettingProvider = (props: Props) => {
  const setting = useReducer(settingReducer, settingInitialState);
  return (
    <SettingContext.Provider value={setting}>
      {props.children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => useContext(SettingContext);

const LogContext = React.createContext({});
export const LogProvider = (props: Props) => {
  const log = useReducer(logReducer, logInitialState);
  return (
    <LogContext.Provider value={log}>{props.children}</LogContext.Provider>
  );
};

export const useLog = () => useContext(LogContext);

const EntityContext = React.createContext({});
export const EntityProvider = (props: Props) => {
  const entity = useReducer(entityReducer, entityInitialState);
  return (
    <EntityContext.Provider value={entity}>
      {props.children}
    </EntityContext.Provider>
  );
};

export const useEntity = () => useContext(EntityContext);

export const ContextProvider = (props: Props) => (
  <SettingProvider>
    <EntityProvider>
      <LogProvider>{props.children}</LogProvider>
    </EntityProvider>
  </SettingProvider>
);
