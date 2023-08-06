import * as React from 'react';

import Welcome from './src/telas/Welcome';
import Cardapio from './src/telas/Cardapio';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ drawerPosition: 'left' }}>
        <Drawer.Screen name="Menu" component={Welcome} />
        <Drawer.Screen name="Cardapio" component={Cardapio} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
