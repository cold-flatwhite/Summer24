import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PressableButton from "./PressableButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigation.replace("Signup");
  };

  const handleLogin = () => {
    // Navigate to the Login screen
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
      <PressableButton
        pressedFunction={handleLogin}
        componentStyle={styles.button}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </PressableButton>
      <PressableButton
        pressedFunction={handleRegister}
        componentStyle={styles.button}
      >
        <Text style={styles.linkText}>New User? Create an account</Text>
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

export default LoginScreen;
