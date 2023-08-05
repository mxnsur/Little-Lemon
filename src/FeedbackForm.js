import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const FeedbackForm = () => { 
      const [firstName, onChangeFirstName] = useState(''); 
      const [lastName, onChangeLastName] = useState(''); 
      const [message, onChangeMessage] = useState(''); 
      const [phoneNumber, onChangePhoneNumber] = useState(''); 

return ( 
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView keyboardDismissMode="on-drag"> 
        <Text style={styles.headingSection}> 
        Como foi sua visita ao restaurante Little Lemon?
         </Text> 
        <Text style={styles.infoSection}> 
        Little Lemon é um charmoso bistrô de bairro que serve comida
        simples e coquetéis clássicos em um ambiente animado, mas casual. 
        Adoraríamos ouvir sua experiência conosco! 
         </Text> 
        <TextInput 
        style={styles.input} 
        value={firstName} 
        onChangeText={onChangeFirstName} 
        placeholder={'Nome'}
        /> 
        <TextInput 
        style={styles.input} 
        value={lastName} 
        onChangeText={onChangeLastName}
        placeholder={'Sobrenome'} 
        /> 
        <TextInput 
        style={styles.input} 
        value={phoneNumber} 
        onChangeText={onChangePhoneNumber} 
        placeholder={'Celular'} 
        keyboardType={"phone-pad"} 
      /> 
         <TextInput 
        style={styles.messageInput} 
        value={message} 
        onChangeText={onChangeMessage}
        placeholder={'Mensagem'} 
        multiline={true}
        maxLength={250}
        /> 
    </ScrollView> 
    </KeyboardAvoidingView>
          ); 
        };
        
    const styles = StyleSheet.create({ 
        container: { 
        flex: 1, 
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
        messageInput: { 
        height: 100, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        backgroundColor: 'white', 
        }, 
        infoSection: { 
        fontSize: 24, 
        padding: 10, 
        marginVertical: 1, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        }, 
        headingSection: { 
        fontSize: 28, 
        padding: 20, 
        marginVertical: 1, 
        color: '#EDEFEE', 
        textAlign: 'center', 
              }, 
            }); 
            
export default FeedbackForm; 