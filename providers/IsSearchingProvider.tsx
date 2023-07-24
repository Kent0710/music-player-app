'use client'

import { createContext, useState, useContext } from "react";

// is searching
interface IsSearchingContextValue {
  isSearching: boolean;
  updateIsSearching: (isSearchingNewValue: boolean) => void;
}

const IsSearchingContext = createContext<IsSearchingContextValue | null>(null);

export function useIsSearchingContext() {
  const context = useContext(IsSearchingContext);
  if (!context) {
    throw new Error("useIsSearchingContext must be used within an IsSearchingProvider");
  }
  return context;
}

interface IsSearchingProviderProps {
    children : React.ReactNode
}

const IsSearchingProvider: React.FC<IsSearchingProviderProps> = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);

  const updateIsSearching = (isSearchingNewValue: boolean) => {
    setIsSearching(isSearchingNewValue);
  };

  const IsSearchProviderValues: IsSearchingContextValue = {
    isSearching,
    updateIsSearching,
  };

  return (
    <IsSearchingContext.Provider value={IsSearchProviderValues}>
      {children}
    </IsSearchingContext.Provider>
  );
};

export default IsSearchingProvider;
