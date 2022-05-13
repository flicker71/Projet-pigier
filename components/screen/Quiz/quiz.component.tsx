import axios from "axios";
import { useContext, useEffect } from "react";
import { Alert, Button, FlatList, Pressable, Text, View } from "react-native";
import { TeamContext } from "../../../context/team.context";
import { TimerContext } from "../../../context/timer.context";
import ScoreBoardModal from "../../../scoreBoard.modal";
import { QuizStyles } from "./quiz.style";

const Item = ({ title, score }:any) => (
  <View>
    <Text>{title} : {score}</Text>
  </View>
);

export function QuizComponent({ navigation }:any) {
  
  const {timer, startTimer, clearIntervl} = useContext(TimerContext);
      
  useEffect(()=>{
    startTimer();
  }, [])

  useEffect(() => {
    if(timer >= 3000){
      clearIntervl()
    }
  }, [timer])

  const getTime = () => {
    const minutes = Math.floor(timer / 60)
    const secondes = Math.floor(timer - minutes * 60)

    return `${minutes} : ${secondes}`
  }
  
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
        {/* <ScoreBoardModal></ScoreBoardModal> */}
        <Text> {getTime()}</Text>
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
          <Pressable style={QuizStyles.designCard} onPress={() => questionNavigate('cookie')}>
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