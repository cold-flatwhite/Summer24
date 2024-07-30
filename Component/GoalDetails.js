import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { updateGoalWarning } from "../Firebase/firesotreHelper";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  const [textColor, setTextColor] = useState("black");

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Warning"
          onPress={async () => {
            setTextColor("red");
            navigation.setOptions({ title: "Warning!"});
            if (route.params && route.params.goalObj) {
              await updateGoalWarning(route.params.goalObj.id, "goal");
            }
          }}
        />
      ),
    });
  }, [navigation, route.params])
  
  return (
    <View>
      {route.params ? (
        <Text style={{color : textColor}}>
          You are seeing the details of goal with text :
          {route.params.goalObj.text} and id
          {route.params.goalObj.id}:
        </Text>
      ) : (
        <Text style={{color : textColor}}>Details</Text>
      )}
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      <GoalUsers id = {route.params.goalObj.id}/>
    </View>
  );
}