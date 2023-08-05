import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../src/img/littleLemonHeader.png')} />
      <Text style={styles.title}>
        Little Lemon, seu bistrô mediterrâneo local
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 350,
     resizeMode: 'contain',
     
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