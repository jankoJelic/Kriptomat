import {createSlice} from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    coins: [],
  },
  reducers: {
    storeCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const {storeCoins} = dataSlice.actions;

export default dataSlice.reducer;
