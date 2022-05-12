import axios from "axios";
import { Button, Text, View } from "react-native";

export function HomeComponent({ navigation }:any) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Home Screen </Text>
        <Button
          title="Lancer une partie"
          onPress={() => navigation.navigate('Game')}
        />
      </View>
    );
  }