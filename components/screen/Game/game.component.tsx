import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameStyles } from "./game.style";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { TeamContext } from "../../../context/team.context";
import { TimerContext } from "../../../context/timer.context";


const Item = ({ title }:any) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export function GameComponent({ navigation }:any) {
  
  const [text, onChangeText] = useState<string>('');
  
  const {team, setTeam} = useContext(TeamContext);

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
        for (const element of team) {
          if(element.name === text) {
            return Alert.alert("Cette équipe existe déjà");
          }          
        }
        setTeam([...team, { id: Math.random().toString(), name: text, score: 0}]);
        // console.log('addEquipe', team);
        onChangeText("");
      }
      else {
        Alert.alert("Champ vide");
      }
    }

    const removeEquipe = (id:string) => {
      for (const element of team) {
        if(element.id === id) {
          setTeam(team.filter((item:any) => item.id !== id));
        }        
      }
    } 

    const requiredTeam = () => {
      if(team.length > 1) {
          navigation.navigate('Quiz')
      }
      else {
        Alert.alert("Ajouter au minimun 2 équipes");
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
        <Pressable onPress={addEquipe}>
          <Text> Ajouter </Text>
        </Pressable>
        
        <Pressable onPress={() => requiredTeam()}>
          <Text> Terminer </Text>
        </Pressable>

        <Text> Nombre d'équipes : {team.length}</Text>
        
      <FlatList
        data={team}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    );
  }