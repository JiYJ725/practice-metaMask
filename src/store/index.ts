import { configureStore } from '@reduxjs/toolkit';
import dropBoxSlice from './dropBox-slice';

const store = configureStore({
  reducer: {
    dropBox: dropBoxSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
