import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Pressable, Text, View } from "react-native";
import { QuestionStyles } from "./question.style";

export function QuestionComponent({ route, navigation }:any) {

  const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  
  const { page } = route.params;

  console.log('typeQuestion', page)

  const answerNavigate = (page: string) => {
    return navigation.navigate('Answer', {
      page: page
    });
    
  }

  switch(page) {
    case 'sonnette' :
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text> {loremIpsum}</Text>
              <Pressable style={QuestionStyles.designCard} onPress={() => answerNavigate('sonnette')}>
            <Text style={QuestionStyles.textColor}> Voir la réponse</Text>
          </Pressable>

            </View>
            )

    case 'check' : 
    return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> {loremIpsum}</Text>
            <Pressable style={QuestionStyles.designCard} onPress={() => answerNavigate('check')}>
          <Text style={QuestionStyles.textColor}> Voir la réponse</Text>
        </Pressable>

          </View>
          )
    
    case 'cookie' :
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text> {loremIpsum}</Text>
              <Pressable style={QuestionStyles.designCard} onPress={() => answerNavigate('cookie')}>
            <Text style={QuestionStyles.textColor}> Voir la réponse</Text>
          </Pressable>

            </View>
            )
    
    case 'star' :
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text> {loremIpsum}</Text>
              <Button
                title="Répondre"
                onPress={() => Alert.alert("Champ vide")}
              />
            </View>
            )
    default : 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Pas de question trouvé</Text>
        <Button
          title="Retour au quiz"
          onPress={() => navigation.navigate('Quiz')}
        />
      </View>
      )
  }

  }
  