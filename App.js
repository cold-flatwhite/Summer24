import { Linking} from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Component/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Component/GoalDetails";
import SignupScreen from "./Component/Signup";
import LoginScreen from "./Component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import PressableButton from "./Component/PressableButton";
import Profile from "./Component/Profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import { signOut } from "firebase/auth";
import Map from "./Component/Map";
import * as Notifications from "expo-notifications";
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
      options={({ navigation }) => {
        return {
          title: "Goal Lists",
          headerRight: () => {
            return (
              <PressableButton
                pressedFunction={() => navigation.navigate("Profile")}
              >
                <FontAwesome6 name="person" size={24} color="black" />
              </PressableButton>
            );
          },
        };
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
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <PressableButton
              pressedFunction={async () => {
                try {
                  await signOut(auth);
                } catch (err) {
                  console.error("Error signing out:", err);
                }
              }}
            >
              <AntDesign name="logout" size={24} color="black" />
            </PressableButton>
          );
        },
      }}
    />
    <Stack.Screen name="Map" component={Map} />
  </>
);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      notification => {
      }
    );
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      notification => {
        const url = notification.notification.request.content.data.url;
        console.log(url);
        Linking.openURL(url);
      }
    );
    return () => subscription.remove();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultSetting}>
        {isUserAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
