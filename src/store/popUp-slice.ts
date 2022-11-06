import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface IPopUp {
  type: string;
  props?: any;
}

const initialState: IPopUp[] = [];

export const popUpSelector = (state: RootState) => state.popUp;

const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    openPopUp: (state, action) => {
      if (state.length === 3) {
        console.log('요청 무시: 현재 팝업의 수는 3개입니다.');
        return state;
      }
      const { type, props } = action.payload;
      return [...state, { type, props }];
    },
    closePopUp: (state) => {
      state.pop();
    },
  },
});

export const { openPopUp, closePopUp } = popUpSlice.actions;
export default popUpSlice;
