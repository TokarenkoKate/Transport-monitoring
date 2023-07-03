import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'constants/redux-const';
import { vehiclesData } from './vehicles/vehicles';
import { localesData } from './locales/locales';

export const rootReducer = combineReducers({
  [NameSpace.Vehicles]: vehiclesData.reducer,
  [NameSpace.Locales]: localesData.reducer,
});
