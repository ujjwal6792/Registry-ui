import React, { useState, createContext } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [orgData, setOrgData] = useState();

  return (
    <AppContext.Provider
      value={{
        orgData,
        setOrgData,
      }}
    >
      {props?.children}
    </AppContext.Provider>
  );
};
export default AppContext;
