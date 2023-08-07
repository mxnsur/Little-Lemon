import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 5,
    marginLeft: 30, 
    marginRight: 30, 
    backgroundColor: '#3e6a5d',
    borderColor: '#3e6a5d',
    borderWidth: 6,
    borderRadius: 90,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  }
});

export default Button;
