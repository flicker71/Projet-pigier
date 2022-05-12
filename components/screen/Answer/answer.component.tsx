import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function AnswerComponent({ navigation }:any) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        
        <Text>Réponse 1 </Text>
        <Button
          title="Valider"
          onPress={() => navigation.navigate('Quiz')}
        />
      </View>
    );
  }