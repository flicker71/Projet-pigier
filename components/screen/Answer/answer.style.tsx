import { StyleSheet } from "react-native";

export const AnswerStyles = StyleSheet.create({
    cardRow: {
        flexDirection: "row",
    },
    cardColumn: {
        flexDirection: "column",
    },
    selectDesign: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'center'
    },
    designCard: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'blue',
        borderColor: "blue",
        justifyContent: "center",
        minWidth: 200,
        padding: 5,
        marginTop: 10,
        marginRight: 5,
    },
    textColor: {
        color: "white",
        textAlign: "center"
    },
    buttonCount: {
        width: 50,
        backgroundColor: "blue",
        marginRight: 10,
        marginLeft: 10
    },
  });