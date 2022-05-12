import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameStyles } from "./game.style";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { TeamContext } from "../../../context/team.context";


const Item = ({ title }:any) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export function GameComponent({ navigation }:any) {
  
  const [text, onChangeText] = useState<string>('');
  
  const {team, setTeam} = useContext(TeamContext);

    
  useEffect(() => console.log('useEffect' , team), [team]);

  const renderItem = ({ item }:any) => {
    return (
      <TouchableOpacity
        onPress={() => removeEquipe(item.id)}
        >
          <Item title={item.name}/>
          <Icon name="close"></Icon>
      </TouchableOpacity>
    );
  } 

    const addEquipe = () => {
      if(text !== '') {
      setTeam([...team, { id: Math.random().toString(), name: text}]);
      console.log('addEquipe', team);
      onChangeText("");
      }
    }

    const removeEquipe = (id:string) => {
      for (const element of team) {
        if(element.id === id) {
          setTeam(team.filter((item:any) => item.id !== id));
        }        
      }
    } 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>New game</Text>
        
        <TextInput
          style={GameStyles.input}  
          onChangeText={onChangeText}
          value={text}
          placeholder="Nom de l'équipe"
        />
        <Button
          title="Ajouter"
          onPress={addEquipe}
        />
        <Button
          title="Terminer"
          onPress={() => navigation.navigate('Quiz')}
        />

        <Text> Nombre d'équipes : {team.length}</Text>
        
      <FlatList
        data={team}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    );
  }