import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user:null,
  },
  reducers: {
   login:(state,action)=>{
     state.user = action.payload;
   },
   logout:(state)=>{
     state.user = null;
   }
  },
});

export const {login,logout} = counterSlice.actions;

export const selectUser = state => state.counter.user;

export default counterSlice.reducer;
