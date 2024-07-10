import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
  function handleCancel() {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={appName} />
        <Button
          title="Add a goal"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Input
          inputHandler={handleInputData}
          isModalVisible={modalVisible}
          cancelHandler={handleCancel}
        />
        <Text style={styles.textStyle}>{receivedText}</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "darkmagenta",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
