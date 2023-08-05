import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const FeedbackForm = () => { 
    const [firstName, onChangeFirstName] = useState(''); 
    const [lastName, onChangeLastName] = useState(''); 
    const [message, onChangeMessage] = useState(''); 
    const [phoneNumber, onChangePhoneNumber] = useState('');

return ( 
    <ScrollView style={styles.container}> 
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
        /> 
        <TextInput 
        style={styles.input} 
        value={lastName} 
        onChangeText={onChangeLastName} 
        /> 
         <TextInput 
        style={styles.messageInput} 
        value={message} 
        onChangeText={onChangeMessage} 
        /> 
    </ScrollView> 
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
        borderColor: 'EDEFEE', 
        backgroundColor: '#F4CE14', 
        }, 
        messageInput: { 
        height: 100, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        backgroundColor: '#F4CE14', 
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