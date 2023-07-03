import { NameSpace } from 'constants/redux-const';
import { CategoriesProps, State } from 'types/state';
import { Vehicle } from 'types/vehicles';

export const getAllVehicles = (state: State): Vehicle[] => state[NameSpace.Vehicles].vehicles;
export const getCategories = (state: State): CategoriesProps =>
  state[NameSpace.Vehicles].categories;
