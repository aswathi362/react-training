import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({children}) => {
    const [filters, setFilters] = useState({
        category: "general",
        country: "us",
        language: "en",
        keyword: "",
        sortBy: ""
    });
    return (
        <NewsContext.Provider value={{filters, setFilters}}>
            {children}
        </NewsContext.Provider>
    )
}