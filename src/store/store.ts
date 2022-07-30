import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    appSlice,
    dataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
