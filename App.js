import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LittleLemonHeader from './src/componentes/LittleLemonHeader'
import LittleLemonFooter from './src/componentes/LittleLemonFooter'
import WelcomeScreen from './src/telas/WelcomeScreen'

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
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