import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GoalItem = ({ goal, deleteHandler, pressHandler }) => {
  return (
    <View key={goal.id} style={styles.textContainer}>
      <Text style={styles.textStyle}>{goal.text}</Text>
      <View stlye={styles.buttonStyle}>
        <Button
          title="X"
          color="black"
          onPress={() => deleteHandler(goal.id)}
        />
      </View>
      <View stlye={styles.buttonStyle}>
        <Button title="i" color="black" onPress={() => pressHandler()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  textStyle: {
    color: "darkmagenta",
    font: 25,
  },
  buttonStyle: {    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",},
});

export default GoalItem;
