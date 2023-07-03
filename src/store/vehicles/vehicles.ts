import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { vehiclesMockData } from '../../mocks/vehicles-mock-data.json';
import { CategoriesProps, VehiclesData } from 'types/state';
import { Vehicle } from 'types/vehicles';
import { VehicleCategory } from 'constants/vehicle-const';
import { NameSpace } from 'constants/redux-const';

const categoriesInitialState = {
  [VehicleCategory.Passenger]: false,
  [VehicleCategory.Construction]: false,
  [VehicleCategory.Truck]: false,
};

export const initialState: VehiclesData = {
  vehicles: vehiclesMockData as Vehicle[],
  categories: categoriesInitialState,
};

export const vehiclesData = createSlice({
  name: NameSpace.Vehicles,
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesProps>) => {
      state.categories = action.payload;
    },
    clearCategories: (state) => {
      state.categories = categoriesInitialState;
    },
  },
});

export const { setCategories, clearCategories } = vehiclesData.actions;
