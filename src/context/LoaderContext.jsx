import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <GlobalLoader />}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

function GlobalLoader() {
  return (
    <div className="global-loader">
      <div className="shimmer"></div>
    </div>
  );
}
