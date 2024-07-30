import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Component/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Component/GoalDetails";
import SignupScreen from "./Component/Signup";
import LoginScreen from "./Component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";

const Stack = createNativeStackNavigator();

const defaultSetting = {
  headerStyle: { backgroundColor: "darkmagenta" },
  headerTintColor: "white",
};

const AuthStack = (
  <>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </>
);
const AppStack = (
  <>
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
      options={({ route }) => {
        return {
          title: route.params ? route.params.goalObj.text : "Details",
        };
      }}
    />
  </>
);

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    })
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultSetting}>
        {isUserAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
