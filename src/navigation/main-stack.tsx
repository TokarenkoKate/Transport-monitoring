import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList, TabNavigatorScreenProps } from 'types/navigation';
import VehiclesListScreen from '../pages/vehicles-list-screen';
import MapGeneralScreen from '../pages/map-general-screen';
import VehicleDescriptionScreen from '../pages/vehicle-description-screen';

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainStackScreen({ navigation, route }: TabNavigatorScreenProps<'MainStackScreen'>) {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="VehiclesListScreen" component={VehiclesListScreen} />
      <MainStack.Screen name="MapGeneralScreen" component={MapGeneralScreen} />
      <MainStack.Screen name="VehicleDescriptionScreen" component={VehicleDescriptionScreen} />
    </MainStack.Navigator>
  );
}

export default MainStackScreen;
