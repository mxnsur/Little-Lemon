import React from 'react'
import { View, Text } from 'react-native'
import LittleLemonHeader from './src/componentes/LittleLemonHeader'
import LittleLemonFooter from './src/componentes/LittleLemonFooter'
import WelcomeScreen from './src/WelcomeScreen'
import MenuItems from './src/MenuItems'

export default function App() {
  return (
    <>
    <View style={{flex: 1, backgroundColor: '#495E57', }}>
      <LittleLemonHeader />
      <MenuItems />
      </View>
    <View style={{ backgroundColor: '#495E57' }}>
    <LittleLemonFooter />
    </View> 
    </>
  )
}