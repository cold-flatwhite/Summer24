import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./Component/Header";
import Input from "./Component/Input";
import { useState } from "react";

export default function App() {
  const appName = "Summer 2004 Mobile";

  const [receivedText, setReceivedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleInputData(data) {
    console.log("callback fn called", data);
    setReceivedText(data);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Header appName={appName} />
      <Input inputHandler={handleInputData} isModalVisible = {modalVisible}/>
      <Text>{receivedText}</Text>
      <StatusBar style="auto" />
      <Button title = "Add a goal" onPress={() => {
        setModalVisible(true);
      }}/>
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
