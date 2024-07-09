import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Component/Header";
import Input from "./Component/Input";
import { useState } from "react";

export default function App() {
  const appName = "Summer 2004 Mobile";

  const [receivedText, setReceivedText] = useState("");

  function handleInputData(data) {
    console.log("callback fn called", data);
    setReceivedText(data);
  }

  return (
    <View style={styles.container}>
      <Header appName={appName} />
      <Input inputHandler={handleInputData} />
      <Text>{receivedText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
