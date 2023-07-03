import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigatorParamList } from 'types/navigation';
import MainStackScreen from './main-stack';
import SettingsScreen from '../pages/settings';
import TabIcon from 'components/ui-components/tab-icon/tab-icon';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                iconVariant={route.name === 'MainStackScreen' ? 'list' : 'settings'}
                focused={focused}
              />
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
        })}
      >
        <Tab.Screen name="MainStackScreen" component={MainStackScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
