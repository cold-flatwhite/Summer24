import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PressableButton from "./PressableButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "../Firebase/firebaseSetup";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
        Alert.alert("Error", "Email and Passwords should not be empty");
        return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords and confirmpassword should be the same");
      return;
    }
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.log("create user", err);
    }
  };

  const handleLogin = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <PressableButton
        pressedFunction={handleSignup}
        componentStyle={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </PressableButton>
      <PressableButton
        pressedFunction={handleLogin}
        componentStyle={styles.button}
      >
        <Text style={styles.linkText}>Already Registered? Login</Text>
      </PressableButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#800080",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
  },
  linkText: {
    color: "blue",
    textAlign: "center",
  },
});

export default SignupScreen;
