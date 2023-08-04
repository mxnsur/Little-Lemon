import React from "react";
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
   <View style={{
    flex: 0.16, 
    backgroundColor: '#F4CE14'}}>
      <Text
        style={{ 
          padding: 40, 
          fontSize: 25, 
          color: 'black', 
          textAlign: "center", 
          fontWeight: 'bold' }}>
          Little Lemon
      </Text>
    </View>
    )
}