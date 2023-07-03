import { CoordinatesProps } from 'types/map';
import { Vehicle } from 'types/vehicles';

export const countAverageCoordinate = (vehicles: Vehicle[], value: keyof CoordinatesProps) => {
  const allValues = vehicles.map((vehicle) => vehicle.current_location[value]);
  const averageValue = allValues.reduce((acc, val) => acc + val, 0);

  return averageValue / allValues.length;
};
