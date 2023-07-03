import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalesData } from 'types/state';
import { NameSpace } from 'constants/redux-const';
import { LOCALES } from 'constants/intl-const';

export const initialState: LocalesData = {
  locales: LOCALES,
  currentLocale: LOCALES.RUSSIAN,
};

export const localesData = createSlice({
  name: NameSpace.Locales,
  initialState,
  reducers: {
    setCurrentLocale: (state, action: PayloadAction<LOCALES>) => {
      state.currentLocale = action.payload;
    },
  },
});

export const { setCurrentLocale } = localesData.actions;
