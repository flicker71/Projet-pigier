import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HomeComponent } from './components/screen/Home/home.component';
import { GameComponent } from './components/screen/Game/game.component';
import { QuizComponent } from './components/screen/Quiz/quiz.component';
import { AnswerComponent } from './components/screen/Answer/answer.component';
import { QuestionComponent } from './components/screen/Question/question.component';

export type AppNavigator = {
  Home : undefined,
  Game: undefined,
  Quiz: undefined,
  Question: undefined,
  Answer: undefined
}  

const Stack = createNativeStackNavigator<AppNavigator>();

export default function App() { 
  
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="Game" component={GameComponent} />
            <Stack.Screen name="Quiz" component={QuizComponent} />
            <Stack.Screen name="Question" component={QuestionComponent} />
            <Stack.Screen name="Answer" component={AnswerComponent} />
          </Stack.Navigator> 
        </NavigationContainer>
    );
  }



  //Créer un context d'équipe, un context timer