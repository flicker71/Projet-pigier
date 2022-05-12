import axios from "axios";
import { useContext } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { TeamContext } from "../../../context/team.context";

const Item = ({ title }:any) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export function QuizComponent({ navigation }:any) {
  
  const renderItem = ({ item }:any) => {
    return (
          <Item title={item.name}/>
    );
  } 

  const {team, setTeam} = useContext(TeamContext);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
      <FlatList
        data={team}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <Button
          title="Clique sur une image"
          onPress={() => navigation.navigate('Question')}
        />
      </View>
    );
  }