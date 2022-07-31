import {createSlice} from '@reduxjs/toolkit';
import CoinDetails from 'types/CoinDetails';

export interface PricesData {
  currencyId: string;
  filterId: number;
  prices: number[];
}

export interface Filter {
  id: number;
  title: string;
  interval: string | number;
}

type ScreenMode = 'view' | 'search';

export const currencyOverview = createSlice({
  name: 'currencyOverview',
  initialState: {
    activeFilter: <Filter>{
      id: 1,
      interval: 1,
      title: '24h',
    },
    pricesData: <PricesData[]>[],
    screenMode: <ScreenMode>'view',
    currencyInfo: <CoinDetails>{},
  },
  reducers: {
    storePricesData: (state, action) => {
      const updatedState = state.pricesData.concat([action.payload]);
      state.pricesData = updatedState;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setCurrencyScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
    setCurrencyInfo: (state, action) => {
      state.currencyInfo = action.payload;
    },
  },
});

export const {
  storePricesData,
  setActiveFilter,
  setCurrencyScreenMode,
  setCurrencyInfo,
} = currencyOverview.actions;

export default currencyOverview.reducer;
