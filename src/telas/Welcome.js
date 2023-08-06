import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/littleLemonHeader.png')} />
      <Text style={styles.title}>
        Little Lemon, seu bistrô mediterrâneo local
      </Text>
      <Pressable onPress={() => navigation.navigate('Cardapio')}>
      <Text style={styles.title}>
        Ver Menu
      </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 350,
     resizeMode: 'contain',
     
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
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;