import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LittleLemonHeader from './src/componentes/LittleLemonHeader'
import LittleLemonFooter from './src/componentes/LittleLemonFooter'
import WelcomeScreen from '../src/telas/WelcomeScreen'
import MenuItems from '../src/telas/Cardapio'
import FeedbackForm from '../src/telas/FeedbackForm'
import LoginScreen from '../src/telas/LoginScreen'
import Welcome from '../src/telas/Welcome'

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