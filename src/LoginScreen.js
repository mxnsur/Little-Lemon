import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function LoginScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Bem-vindo(a) ao Little Lemon</Text>
            <Text style={styles.regularText}>Faça o login para continuar </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      padding: 40,
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
  });

  
