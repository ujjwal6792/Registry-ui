import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [orgData, setOrgData] = useState({name:'Organisation'});
  const [registryData, setRegistryData] = useState()

  useEffect(()=>{
  const data = localStorage.getItem('orgData')
  const registry = localStorage.getItem('registry')
  if (data) {
    addOrgData(JSON.parse(data))
  }
  if (registry){
    addRegistryData(JSON.parse(registry))
  }
  },[])

  const addOrgData = (data)=>{
    setOrgData(data);
    localStorage.setItem('orgData', JSON.stringify(data));
  }

  const addRegistryData = (data)=>{
    setRegistryData(data);
    localStorage.setItem('registry', JSON.stringify(data));
  }

  return (
    <AppContext.Provider
      value={{
        orgData,
        registryData,
        addOrgData,
        addRegistryData,
      }}
    >
      {props?.children}
    </AppContext.Provider>
  );
};
export default AppContext;
