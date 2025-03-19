// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  filteredUsers: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUsers, setLoading } = userSlice.actions;

export default userSlice.reducer;


