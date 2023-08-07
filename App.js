import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Welcome from './src/telas/Welcome';
import Cardapio from './src/telas/Cardapio';
import Newsletter from './src/telas/Newsletter';
import FeedbackForm from './src/telas/FeedbackForm';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ 
       tabBarActiveTintColor: '#3e6a5d', headerStyle: { backgroundColor: '#ffffff' } }}
      >

      <Tab.Screen 
      name="Menu" 
      component={Welcome} 
      options={{
          tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
      },
      
      tabBarIcon: ({ color }) => (
      <Icon name="home-outline" color={color} size={23} />
        ),
      }}/>

      <Tab.Screen 
      name="Cardápio"
      component={Cardapio} 
      options={{ 
        tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "bold",
    },
      
      tabBarIcon: ({ color }) => (
      <Icon name="list-outline" color={color} size={26} />
        ),
      }}
      />
      
      <Tab.Screen 
      name="Feedback" 
      component={FeedbackForm} 
      options={{
          tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
      },
      
       tabBarIcon: ({ color }) => (
      <Icon name="newspaper-outline" color={color} size={23} />
        ),
      }}
      />

      <Tab.Screen 
      name="Newsletter" 
      component={Newsletter} 
      options={{
          tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
      },
      
       tabBarIcon: ({ color }) => (
      <Icon name="newspaper-outline" color={color} size={23} />
        ),
      }}
      />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#3e6a5d',
    color: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 25,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#333333',
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1.5,
    borderColor: '#dbdbdb',
  },
  footerText: {
    color: '#333333',
    fontSize: 12,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
