import { View, Text } from "react-native";
import React from "react";

export default function GoalDetails({ navigation, route }) {
  console.log(route.params);
  return (
    <View>
      <Text>
        You are seeing the details of goal with text :{route.params.goalObj.text} and id
        {route.params.goalObj.id}:
      </Text>
    </View>
  );
}
