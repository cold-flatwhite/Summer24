import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

const GoalItem = ({ goal, deleteHandler }) => {
  const navigation = useNavigation();

  return (
    <View key={goal.id} style={styles.textContainer}>
      <Pressable
        android_ripple={{ color: "pink" }}
        style={({ pressed }) => {
          return [styles.horizontalContainer, pressed && styles.pressableStyle];
        }}
        onPress={() => {
          navigation.navigate("Details", { goalObj: goal });
        }}
      >
        <Text style={styles.textStyle}>{goal.text}</Text>
        <PressableButton
          componentStyle={styles.buttonStyle}
          pressedFunction={() => deleteHandler(goal.id)}
        >
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    alignItems: "center",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "pink",
  },
  textStyle: {
    color: "darkmagenta",
    font: 25,
  },
  buttonStyle: {
    marginLeft: 15,
    backgroundColor: "grey",
    padding: 5,
  },
});

export default GoalItem;
