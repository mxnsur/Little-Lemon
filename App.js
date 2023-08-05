import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LittleLemonHeader from './src/componentes/LittleLemonHeader'
import WelcomeScreen from './src/WelcomeScreen'
import MenuItems from './src/MenuItems'
import FeedbackForm from './src/FeedbackForm'
import LoginScreen from './src/LoginScreen'

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />
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
