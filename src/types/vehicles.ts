import { VehicleCategory } from 'constants/vehicle-const';
import { CoordinatesProps, RouteProps } from './map';

export interface Vehicle {
  title: string;
  driver: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
  };
  picture: string;
  category: VehicleCategory;
  current_location: CoordinatesProps;
  route: RouteProps;
}
