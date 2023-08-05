import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
    return (
     <ScrollView indicatorStyle={"white"} style={WelcomeScreenStyles.containerScroll}>
        <View style={WelcomeScreenStyles.headerWrapper}>
        <Image
          style={WelcomeScreenStyles.image}
          source={require('../src/img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={WelcomeScreenStyles.headerText}>Little Lemon</Text>
      </View>
        <Text style={WelcomeScreenStyles.regularText}>
        Little Lemon é um charmoso bistrô de bairro que serve comida simples
        e cocktails clássicos num ambiente animado mas casual. Vamos adorar 
        ouvir sua experiência conosco!
        </Text>
        </ScrollView>
    )
}

const WelcomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
      },
      headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 20,
      },
    });