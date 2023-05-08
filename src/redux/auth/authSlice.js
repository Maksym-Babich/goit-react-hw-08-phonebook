import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isrefreshing: false,
  },
  extraReducers: {
    [register.pending](state) {},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
        state.token = action.payload.token;
      state.isLoggedIn = true;
      
    },
  },
});
