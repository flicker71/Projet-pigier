import axios from "axios";
import { useContext } from "react";
import { Alert, Button, FlatList, Pressable, Text, View } from "react-native";
import { TeamContext } from "../../../context/team.context";
import { QuizStyles } from "./quiz.style";

const Item = ({ title, score }:any) => (
  <View>
    <Text>{title} : {score}</Text>
  </View>
);

export function QuizComponent({ navigation }:any) {
  
  const renderItem = ({ item }:any) => {
    return (
          <Item title={item.name} score={item.score}/>
    );
  } 

  const questionNavigate = (page: string) => {
    return navigation.navigate('Question', {
      page: page
    });
    
  }

  const {team, setTeam} = useContext(TeamContext);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        
      <FlatList
        data={team}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <View style={QuizStyles.cardRow}>
          <View  style={QuizStyles.cardColumn}>
          <Pressable style={QuizStyles.designCard} onPress={() => questionNavigate('sonnette')}>
            <Text style={QuizStyles.textColor}> Sonnette</Text>
          </Pressable>
          <Pressable style={QuizStyles.designCard} onPress={() => questionNavigate('check')}>
            <Text style={QuizStyles.textColor}> Check</Text>
          </Pressable>
         </View>
         <View style={QuizStyles.cardColumn}>
          <Pressable style={QuizStyles.designCard}  onPress={() =>  questionNavigate('cookie')}>
            <Text style={QuizStyles.textColor}> Cookie granola double pépites</Text>
          </Pressable>
          <Pressable style={QuizStyles.designCard} onPress={() => Alert.alert("L'équipe rejoue !")}>
            <Text style={QuizStyles.textColor}> étoile</Text>
          </Pressable>
         </View>
        </View>
      </View>
    );
  }