import { createSlice } from '@reduxjs/toolkit';
import { tokenList1 } from '../dummyData';

const dropBoxSlice = createSlice({
  name: 'dropBox',
  initialState: {
    activeItem: tokenList1[0],
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = dropBoxSlice.actions;
export default dropBoxSlice;
