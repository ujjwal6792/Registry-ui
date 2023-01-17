import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [orgData, setOrgData] = useState({name:'Organisation'});

  useEffect(()=>{
  const data = localStorage.getItem('orgData')
  if (data) {
    addOrgData(JSON.parse(data))
  }
  console.log(data);
  },[])

  const addOrgData = (data)=>{
    setOrgData(data);
    localStorage.setItem('orgData', JSON.stringify(data));
  }

  return (
    <AppContext.Provider
      value={{
        orgData,
        addOrgData,
      }}
    >
      {props?.children}
    </AppContext.Provider>
  );
};
export default AppContext;
