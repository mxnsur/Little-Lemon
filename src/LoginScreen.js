import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, ScrollView, Pressable} from 'react-native';

export default function LoginScreen() {
      const [email, onChangeEmail] = useState(''); 
      const [password, onChangePassword] = useState(''); 
      const [loggedIn, onLogin] = useState(true);

return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.container}>
        <Text style={styles.headerText}>Bem-vindo(a) ao Little Lemon</Text>

        {loggedIn && 
        <Text style={styles.regularText}>Você está logado!</Text>}

        {!loggedIn && (
         <>
         <Text style={styles.regularText}>Faça o login para continuar</Text>
        <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={onChangeEmail} 
        placeholder={'Email'}
        keyboardType={'email-address'}
        clearButtonMode={'always'}
        /> 
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        value={password} 
        onChangeText={onChangePassword}
        placeholder={'Senha'} 
        keyboardType={'default'}
        clearButtonMode={'always'}
        />
        <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
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
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
        },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        },    
  });
  
