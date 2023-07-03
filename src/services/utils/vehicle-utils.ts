import { Vehicle } from 'types/vehicles';

export function firstLetterUpperCase(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

export function getFullName(firstName: string, lastName: string) {
  return `${firstLetterUpperCase(firstName)} ${firstLetterUpperCase(lastName)}`;
}

export function getVehicleTitle(vehicleTitle: string) {
  return `TC_${vehicleTitle}`;
}

export const filterVehiclesToCategories = (
  vehicles: Vehicle[],
  categories: [string, boolean][],
) => {
  const filteredVehicles = vehicles.filter((vehicle) => {
    for (const category of categories) {
      if (category[1] === true && vehicle.category === category[0]) {
        return true;
      }
    }
  });
  return filteredVehicles;
};
