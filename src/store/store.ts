import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import dataSlice from './dataSlice';
import currencyOverviewSlice from './currencyOverviewSlice';

const store = configureStore({
  reducer: {
    appSlice,
    dataSlice,
    currencyOverviewSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
