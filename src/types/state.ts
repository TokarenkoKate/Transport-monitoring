import { VehicleCategory } from 'constants/vehicle-const';
import { store } from 'store/index';
import { Vehicle } from './vehicles';
import { LOCALES } from 'constants/intl-const';

export type VehiclesData = {
  vehicles: Vehicle[];
  categories: CategoriesProps;
};

export type LocalesData = {
  locales: typeof LOCALES;
  currentLocale: LOCALES;
};

export type CategoriesProps = {
  [key in VehicleCategory]: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
