import { createSlice } from '@reduxjs/toolkit';
import { STOCK_LIST } from './data';

const initialState = {
  balance: 10000,
  portfolio: [],
  stockList: STOCK_LIST,
  error: null,
};

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
      buyStock: (state, action) => {
        const { id, quantity } = action.payload;
        const stock = state.stockList.find((s) => s.id === id);
        const cost = stock.price * quantity;
  
        if (state.balance >= cost) {
          state.balance -= cost;
          state.error = null;
  
          const portfolioItem = state.portfolio.find((s) => s.id === id);
          if (portfolioItem) {
            portfolioItem.quantity += quantity;
          } else {
            state.portfolio.push({ ...stock, quantity });
          }
        } else {
          state.error = "Insufficient balance!!!";
        }
      },
      sellStock: (state, action) => {
        const { id, quantity } = action.payload;
        const portfolioItem = state.portfolio.find((s) => s.id === id);
  
        if (portfolioItem && portfolioItem.quantity >= quantity) {
          const revenue = portfolioItem.price * quantity;
          state.balance += revenue;
          portfolioItem.quantity -= quantity;
          state.error = null;
  
          if (portfolioItem.quantity === 0) {
            state.portfolio = state.portfolio.filter((s) => s.id !== id);
          }
        } else {
          state.error = "Not enough shares to complete the sale.";
        }
      }
    },
  });
  
  export const { buyStock, sellStock, clearError } = stockSlice.actions;
  export default stockSlice.reducer;