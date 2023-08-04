import React from "react";
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View 
        style={{ 
            backgroundColor: '#F4CE14', 
            marginBottom: 1, }}>
            <Text 
            style={{
                fontSize: 18, 
                color: 'black', 
                textAlign: 'center',}}>
             All Rights Reserved by Little Lemon
            </Text>
        </View>
    )
}