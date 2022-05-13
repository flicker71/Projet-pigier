import React, { useContext, useState } from "react";
import { Alert, Button, Pressable, Text, View } from "react-native";
import { TeamContext } from "../../../context/team.context";
import { AnswerStyles } from "./answer.style";
import RNPickerSelect from 'react-native-picker-select';


export function AnswerComponent({ route, navigation }:any) {
  
  const {team, setTeam} = useContext(TeamContext);

  const [selectedValue, setSelectedValue] = useState('');
  const [count, setCount] = useState<number>(0);
  
  const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  
  const { page } = route.params;

  const rightAnswer = (nameTeam: string, double?: boolean) => {
    if(nameTeam !== ''){
      if(double) {
        setCount(count * 2);
      }
        console.log('RightAnswer', nameTeam, "count", count)
        setTeam(team.map((t: any) => {
          if(nameTeam === t.name) t.score += count
          return t
      }))
    navigation.navigate("Quiz");
  }
  else {
    Alert.alert("Séléctionner une équipe");
  }
  } 

  const moreOne = () => {
    if(count <= 10 && count >= 0){
      setCount(count + 1);
    }
  }
  const lessOne = () => {
    if(count <= 10 && count >= 0){
      setCount(count - 1);
    }
  }
  
  switch(page) {
    case 'sonnette' :
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text> {loremIpsum}</Text>
          <View >
            <View style={AnswerStyles.selectDesign}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                value = {selectedValue}
                placeholder={{ label: "Choisis l'équipe qui répond", value: null }}
                items = { team.map((item:any) => {
                  return { label: item.name, value: item.name}})}
                  />
            </View>
            <View style={AnswerStyles.selectDesign}>
              <Pressable style={AnswerStyles.buttonCount} onPress={() => lessOne()}> 
                <Text style={AnswerStyles.textColor}> - </Text>
              </Pressable>
              <Text >{ count }</Text>
              <Pressable style={AnswerStyles.buttonCount} onPress={() => moreOne()}> 
                <Text style={AnswerStyles.textColor}> + </Text>
              </Pressable>
            </View>
          </View>
  
          <Pressable style={AnswerStyles.designCard} onPress={() => rightAnswer(selectedValue)}>
            <Text style={AnswerStyles.textColor}> Bonne réponse</Text>
          </Pressable>
          <Pressable style={AnswerStyles.designCard} onPress={() => navigation.navigate("Quiz")}>
            <Text style={AnswerStyles.textColor}> Mauvaise réponse</Text>
          </Pressable>
  
        </View>
            )

    case 'check' : 
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text> {loremIpsum}</Text>
        <View >
          <View style={AnswerStyles.selectDesign}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              value = {selectedValue}
              placeholder={{ label: "Choisis l'équipe qui répond", value: null }}
              items = { team.map((item:any) => {
                return { label: item.name, value: item.name}})}
                />
          </View>
          <View style={AnswerStyles.selectDesign}>
            <Pressable style={AnswerStyles.buttonCount} onPress={() => lessOne()}> 
              <Text style={AnswerStyles.textColor}> - </Text>
            </Pressable>
            <Text >{ count }</Text>
            <Pressable style={AnswerStyles.buttonCount} onPress={() => moreOne()}> 
              <Text style={AnswerStyles.textColor}> + </Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={AnswerStyles.designCard} onPress={() => rightAnswer(selectedValue)}>
          <Text style={AnswerStyles.textColor}> Bonne réponse</Text>
        </Pressable>
        <Pressable style={AnswerStyles.designCard} onPress={() => navigation.navigate("Quiz")}>
          <Text style={AnswerStyles.textColor}> Mauvaise réponse</Text>
        </Pressable>

      </View>
      )
    
    case 'cookie' :
      return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text> {loremIpsum}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent:'center'}}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            value = {selectedValue}
            placeholder={{ label: "Choisis l'équipe qui répond", value: null }}
            items = { team.map((item:any) => {
            return { label: item.name, value: item.name}})}
          />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent:'center'}}>
          <Pressable style={AnswerStyles.buttonCount} onPress={() => lessOne()}> 
            <Text style={AnswerStyles.textColor}> - </Text>
          </Pressable>
          <Text>{ count }</Text>
          <Pressable style={AnswerStyles.buttonCount} onPress={() => moreOne()}> 
            <Text style={AnswerStyles.textColor}> + </Text>
          </Pressable>
        </View>

        <Pressable style={AnswerStyles.designCard} onPress={() => rightAnswer(selectedValue, true)}>
          <Text style={AnswerStyles.textColor}> Bonne réponse</Text>
        </Pressable>
            <Pressable style={AnswerStyles.designCard} onPress={() => navigation.navigate("Quiz")}>
          <Text style={AnswerStyles.textColor}> Mauvaise réponse</Text>
        </Pressable>

      </View>
      )
    
    }
  }