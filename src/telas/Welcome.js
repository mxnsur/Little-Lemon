import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/littleLemonHeader.png')} />

      <Text style={styles.title}>
        O seu bistrô com as melhores comidas mediterrâneas
      </Text>

      <Text style={styles.regularText}>
      Little Lemon é um charmoso bistrô de bairro que serve comidas mediterrâneas e cocktails 
      clássicos num ambiente animado e confortável.
      </Text>

      <Pressable onPress={() => navigation.navigate('Cardápio')} style={styles.button}>
      <Text style={styles.buttonText}>
        Conheça nosso cardápio
      </Text>

      </Pressable>
      <Pressable onPress={() => navigation.navigate('Newsletter')} style={styles.buttonNews}>
      <Text style={styles.buttonText}>
        Newsletter
      </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 245,
     resizeMode: 'contain',
     alignSelf: 'center'
     
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    margin: 5,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 25,
    padding: 5,
    margin: 10,
    marginVertical: 1,
    backgroundColor: '#3e6a5d',
    borderColor: '#3e6a5d',
    borderWidth: 6,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  regularText: {
    fontSize: 20,
    padding: 6,
    marginVertical: 1,
    color: '#333333',
    textAlign: 'center',
  },
  buttonNews: {
    marginTop: 10,
    padding: 5,
    margin: 10,
    marginVertical: 1,
    backgroundColor: '#3e6a5d',
    borderColor: '#3e6a5d',
    borderWidth: 6,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Welcome;