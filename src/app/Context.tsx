import React, { useContext } from "react";
type Props = {
  store: any;
  children: any;
};

const StoreContext = React.createContext({});

export const StoreProvider = (props: Props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
