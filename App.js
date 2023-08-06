import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LittleLemonHeader from './src/componentes/telas/LittleLemonHeader'
import LittleLemonFooter from './src/componentes/telas/LittleLemonFooter'
import WelcomeScreen from './src/componentes/telas/WelcomeScreen'
import MenuItems from './src/componentes/telas/Cardapio'
import FeedbackForm from './src/componentes/telas/FeedbackForm'
import LoginScreen from './src/componentes/telas/LoginScreen'
import Welcome from './src/componentes/telas/Welcome'

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
    </View>
    <View style={styles.footerContainer}>
    <LittleLemonFooter />
    </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
