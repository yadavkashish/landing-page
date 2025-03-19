// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/usersSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;  // Use default export for the store



