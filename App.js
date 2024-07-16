import { View, Text } from "react-native";
import React from "react";
import Home from "./Component/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Component/GoalDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Goal Lists",
            headerStyle: { backgroundColor: "purple" },
            headerTintColor : 'white'
          }}
        />
        <Stack.Screen name="Details" component={GoalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
