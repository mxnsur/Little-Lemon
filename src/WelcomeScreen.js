import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
     <ScrollView indicatorStyle={"white"} style={WelcomeScreenStyles.containerScroll}>
        <Text style={WelcomeScreenStyles.WelcomeText}>
        Welcome to Little Lemon
        </Text>
        <Text style={WelcomeScreenStyles.itemText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
        </Text>
        </ScrollView>
    )
}

const WelcomeScreenStyles = StyleSheet.create({
    containerScroll: {
        flex: 1,
    },
    WelcomeText: {
        padding: 40, 
        fontSize: 35, 
        color: '#EDEFEE',
        textAlign: "center",
    },
    itemText: {
        fontSize: 25,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
    },
  });