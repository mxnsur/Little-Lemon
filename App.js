import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './src/telas/LoginScreen';
import Welcome from './src/telas/Welcome';
import Cardapio from './src/telas/Cardapio';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: {backgroundColor: '#FBDABB'} }}>
            <Stack.Screen 
            options= {{ title: 'Login' }} 
            name="Login" 
            component={LoginScreen} 
            />
            <Stack.Screen 
            options={{ title: 'Menu' }} 
            name="Menu" 
            component={Welcome} 
            />
            <Stack.Screen 
            options= {{ title: 'Cardapio' }} 
            name="Cardapio" 
            component={Cardapio} 
            />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

