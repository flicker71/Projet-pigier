import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function QuizComponent({ navigation }:any) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Clique sur une image"
          onPress={() => navigation.navigate('Question')}
        />
      </View>
    );
  }