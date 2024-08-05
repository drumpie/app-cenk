import React, { createContext, useState, useContext } from "react";

const PolicyContext = createContext();

export const usePolicy = () => useContext(PolicyContext);

export const PolicyProvider = () => {
  const [policyAccepted, setPolicyAccepted] = useState(false);

  return (
    <PolicyContext.Provider
      value={{ policyAccepted, setPolicyAccepted }}
    ></PolicyContext.Provider>
  );
};
