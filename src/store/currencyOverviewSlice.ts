import {createSlice} from '@reduxjs/toolkit';

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

export const currencyOverview = createSlice({
  name: 'currencyOverview',
  initialState: {
    activeFilter: <Filter>{
      id: 1,
      interval: 1,
      title: '24h',
    },
    data: <PricesData[]>[],
  },
  reducers: {
    storePricesData: (state, action) => {
      const updatedState = state.data.concat([action.payload]);
      state.data = updatedState;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const {storePricesData, setActiveFilter} = currencyOverview.actions;

export default currencyOverview.reducer;
