import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function AnswerComponent({ navigation }:any) {
  
    const [dessert, setDessert] = useState([]);
    
    useEffect(() => {
      (async () => {
        const data = await axios.get("https://random-data-api.com/api/dessert/random_dessert?size=10")
        setDessert(data.data)
      })()
    }, []);
  console.log(dessert);
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