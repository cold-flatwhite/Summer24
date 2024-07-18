import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoalItem = ({ goal, deleteHandler }) => {
  const navigation = useNavigation();

  return (
    <View key={goal.id} style={styles.textContainer}>
      <Pressable
        android_ripple={{ color: "pink" }}
        style={styles.pressable}
        onPress={() => {
          navigation.navigate("Details", { goalObj: goal });
        }}
      >
        <Text style={styles.textStyle}>{goal.text}</Text>
        <View stlye={styles.buttonStyle}>
          <Button
            title="X"
            color="black"
            onPress={() => deleteHandler(goal.id)}
          />
        </View>
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
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 5,
    alignItems: "center",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },

  textStyle: {
    color: "darkmagenta",
    font: 25,
  },
  buttonStyle: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },
});

export default GoalItem;
