import * as React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, ScrollView, KeyboardAvoidingView} from "react-native";
import Button from "../componentes/Button";
import {validateEmail} from "../../index";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const isEmailValid = validateEmail(email);

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/littleLemon.png")}
      />
      <Text style={styles.title}>
       Assine a nossa newsletter para as nossas últimas receitas deliciosas!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Escreva seu email"}
      />
      <Button
        onPress={() => {
          Alert.alert("Obrigado por se inscrever, fique ligado!");
        }}
        enabled={!isEmailValid}
      >
        Inscreva-se
      </Button>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 140,
    width: 300,
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: 'center'
  },
  input: {
    height: 40,
    marginVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: '#cfd4d2', 
    backgroundColor: 'white', 
    borderRadius: 8,
    borderWidth: 2,
  },
});

export default SubscribeScreen;
