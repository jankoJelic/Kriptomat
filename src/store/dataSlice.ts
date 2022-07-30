import {createSlice} from '@reduxjs/toolkit';
import Coin from 'models/Coin';
import CoinDetails from 'models/CoinDetails';

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    coins: <Coin[]>[],
    coinsDetails: <CoinDetails[]>[],
  },
  reducers: {
    storeCoins: (state, action) => {
      state.coins = action.payload;
    },
    addCoinDetails: (
      state,
      action: {
        payload: CoinDetails;
      },
    ) => {
      const updatedState = state.coinsDetails.concat([action.payload]);

      state.coinsDetails = updatedState;
    },
  },
});

export const {storeCoins, addCoinDetails} = dataSlice.actions;

export default dataSlice.reducer;
