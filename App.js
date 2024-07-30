import { View, Text, Button } from "react-native";
import React from "react";
import Home from "./Component/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Component/GoalDetails";
import SignupScreen from "./Component/Signup";
import LoginScreen from "./Component/Login";

const Stack = createNativeStackNavigator();

const defaultSetting = {
  headerStyle: { backgroundColor: "darkmagenta" },
  headerTintColor: "white",
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultSetting}>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
          <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Goal Lists",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({route }) => {
            return {
              title: route.params ? route.params.goalObj.text : "Details",
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
