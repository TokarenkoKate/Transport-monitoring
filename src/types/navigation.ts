import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Vehicle } from './vehicles';

// Route tab stack
export type TabNavigatorParamList = {
  MainStackScreen: undefined;
  SettingsScreen: undefined;
};

export type TabNavigatorScreenProps<Screen extends keyof TabNavigatorParamList> =
  BottomTabScreenProps<TabNavigatorParamList, Screen>;

// Nested Main stack
export type MainStackParamList = {
  VehiclesListScreen: undefined;
  MapGeneralScreen: undefined;
  VehicleDescriptionScreen: { vehicle: Vehicle };
};

export type MainStackScreenProps<Screen extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  Screen
>;
