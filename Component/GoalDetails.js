import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalDetails({ navigation, route }) {
  const [textColor, setTextColor] = useState("black");

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Warning"
          onPress={() => {
            setTextColor("red");
            navigation.setOptions({ title: "Warning!"});
          }}
        />
      ),
    });
  }, [navigation])
  
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
    </View>
  );
}