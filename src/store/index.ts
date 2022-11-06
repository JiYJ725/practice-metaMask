import { configureStore } from '@reduxjs/toolkit';
import dropBoxSlice from './dropBox-slice';
import popUpSlice from './popUp-slice';

const store = configureStore({
  reducer: {
    dropBox: dropBoxSlice.reducer,
    popUp: popUpSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
