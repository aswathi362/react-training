import { createContext, useReducer } from "react";

const initialState = [];

export const itemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);
        default:
            console.log("No such action!!");
            return state;
    }
};

export const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [items, dispatch] = useReducer(itemReducer, initialState);

    return (
        <ItemContext.Provider value={{items, dispatch}}>
            {children}
        </ItemContext.Provider>
    )
}