import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../src/img/littleLemonHeader.png')} />
      <Text style={styles.title}>
        Little Lemon, seu bistrô mediterrâneo local
      </Text>
    </ScrollView>
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
    marginTop: 25,
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