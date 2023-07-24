'use client';

import { createContext, useState, useContext } from "react";

// done searching
interface SearchingOkContextValue {
    searchingOk : boolean;
    updateSearchingOk : (searchingOkNewValue : boolean) => void;
};

const SearchingOkContext = createContext<SearchingOkContextValue | null>(null);

export function useSearchingOkContext() {
    const context = useContext(SearchingOkContext);
    if (!context) {
        throw new Error ('useSearchingOkContext must be used within an SearchingOkProvider')
    };
    return context;
};

interface SearchingOkProviderProps {
    children : React.ReactNode
};

const SearchingOkProvider : React.FC<SearchingOkProviderProps> = ({ children }) => {
    const [searchingOk, setSearchingOk] = useState(false);

    const updateSearchingOk = (searchingOkNewValue : boolean) => {
        setSearchingOk(searchingOkNewValue)
    };

    const SearchingOkProviderValues : SearchingOkContextValue = {
        searchingOk,
        updateSearchingOk
    };

    return (
        <SearchingOkContext.Provider value={SearchingOkProviderValues}>
            {children}
        </SearchingOkContext.Provider>
    )
};

export default SearchingOkProvider;