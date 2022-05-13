import { StyleSheet } from "react-native";

export const QuizStyles = StyleSheet.create({
    cardRow: {
        flexDirection: "row",
    },
    cardColumn: {
        flexDirection: "column",
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
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    }
  });