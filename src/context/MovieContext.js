import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};
