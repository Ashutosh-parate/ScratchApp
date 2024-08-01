import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OpeningScreen from '../components/OpeningScreen';
import ActionsScreen from '../components/ActionsScreen';
import PlaygroundScreen from '../components/PlaygroundScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Opening" component={OpeningScreen} />
      <Tab.Screen name="Actions" component={ActionsScreen} />
      <Tab.Screen name="Playground" component={PlaygroundScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
