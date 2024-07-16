import { View, Text, Button } from "react-native";
import React from "react";
import Home from "./Component/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Component/GoalDetails";

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
          name="Home"
          component={Home}
          options={{
            title: "Goal Lists",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ navigation, route }) => {
            return {
              title: route.params.goalObj.text,
              headerRight: () => {
                return (
                  <Button
                    title="Warning"
                    onPress={() => console.log("warning")}
                  />
                );
              },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
