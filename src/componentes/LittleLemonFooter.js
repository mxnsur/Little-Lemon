import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.footerText}>
             All Rights Reserved by Little Lemon
            </Text>
        </View>
    )
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9971', 
        marginBottom: 0,
    },
    footerText: {
        fontSize: 18, 
        color: 'black', 
        textAlign: 'center',
    },
  });