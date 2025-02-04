import React, { createContext, useContext, useState, useCallback } from "react";

const ArsenalContext = createContext();

export const useArsenalContext = () => {
  const context = useContext(ArsenalContext);
  if (!context) {
    throw new Error("useArsenalContext must be used within an ArsenalProvider");
  }
  return context;
};

export const ArsenalProvider = ({ children }) => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateWeapons = useCallback((weaponData) => {
    setWeapons(weaponData);
  }, []);

  const updateLoading = useCallback((status) => {
    setLoading(status);
  }, []);

  const updateError = useCallback((err) => {
    setError(err);
  }, []);

  return (
    <ArsenalContext.Provider
      value={{
        weapons,
        loading,
        error,
        updateWeapons,
        updateLoading,
        updateError,
      }}
    >
      {children}
    </ArsenalContext.Provider>
  );
};
