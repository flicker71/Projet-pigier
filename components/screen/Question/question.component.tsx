import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function QuestionComponent({ navigation }:any) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Répondre"
          onPress={() => navigation.navigate('Answer')}
        />
      </View>
    );
  }