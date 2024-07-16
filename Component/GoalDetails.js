import { View, Text, Button } from "react-native";
import React from "react";

export default function GoalDetails({ navigation, route }) {
  console.log(route.params);
  return (
    <View>
      {route.params ? (
        <Text>
          You are seeing the details of goal with text :
          {route.params.goalObj.text} and id
          {route.params.goalObj.id}:
        </Text>
      ) : (
        <Text>Details</Text>
      )}
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
    </View>
  );
}
