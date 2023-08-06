import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './src/telas/LoginScreen';
import Welcome from './src/telas/Welcome';
import Cardapio from './src/telas/Cardapio';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Cardapio') {
            iconName =  'list-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen name="Menu" component={Welcome} />
      <Tab.Screen name="Cardapio" component={Cardapio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

