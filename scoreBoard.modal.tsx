import React, { useContext, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, FlatList } from "react-native";
import { TeamContext } from "./context/team.context";

const Item = ({ title, score }:any) => (
  <View>
    <Text>{title} : {score}</Text>
  </View>
);

export const ScoreBoardModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const {team, setTeam} = useContext(TeamContext);
  
  const renderItem = ({ item }:any) => {
    return (
          <Item title={item.name} score={item.score}/>
    );
  } 

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text> ScoreBoard !</Text>
          <FlatList
            data={team}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ScoreBoardModal;