import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const LoginScreen = () => { 
      const [email, onChangeEmail] = useState(''); 
      const [password, onChangePassword] = useState(''); 

return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.container}>
        <Text style={styles.headerText}>Bem-vindo(a) ao Little Lemon</Text>
        <Text style={styles.regularText}>Faça o login para continuar </Text>
        <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={onChangeEmail} 
        placeholder={'Email'}
        /> 
        <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={onChangePassword}
        placeholder={'Senha'} 
        /> 
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
    input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: '#EDEFEE', 
        backgroundColor: 'white', 
        }, 
  });

export default LoginScreen

  
