import React, { useReducer, useContext } from "react";
import { reducer as settingReducer } from "./modules/setting";
import { reducer as logReducer } from "./modules/logs";

type Props = {
  children: any;
};

const StoreContext = React.createContext({});

export const StoreProvider = (props: Props) => {
  const dic = {
    logs: logReducer,
    setting: settingReducer
  };
  const reducers = combineReducers(dic);
  const value = useReducer(reducers, getInitialState(dic));
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

// Helper functions

const combineReducers = (dic: any): any => {
  const initial = getInitialState(dic);
  return function(state = initial, action: any) {
    return Object.keys(dic).reduce((acc, key) => {
      const slice = dic[key](state[key], action);
      return { ...acc, [key]: slice };
    }, state);
  };
};

const getInitialState = (dic: any): any => {
  return Object.keys(dic).reduce((acc, key) => {
    const slice = dic[key](undefined, { type: undefined });
    return { ...acc, [key]: slice };
  }, {});
};
