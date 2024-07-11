import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";
import Header from "./Component/Header";
import Input from "./Component/Input";
import { useState } from "react";

export default function App() {
  const appName = "Summer 2004 Mobile";
  const [goals, setGoals] = useState([]);
  const [receivedText, setReceivedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleInputData(data) {
    const newGoal = { text: data, id: Math.random() };
    setGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });
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
          style={styles.buttonStyle}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Input
          inputHandler={handleInputData}
          isModalVisible={modalVisible}
          cancelHandler={handleCancel}
        />
        {goals.length === 0 ? (
          <Text>please input more</Text>
        ) : (
          <ScrollView>
            {goals.map((goal) => {
              return (
                <View key={goal.id} style={styles.textContainer}>
                  <Text style={styles.textStyle}>{goal.text}</Text>
                </View>
              );
            })}
          </ScrollView>
        )}
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
    font: 45,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  textContainer: {
    color: "darkmagenta",
    padding: 15,
  },
  buttonStyle: {
    width: "30%",
    marginVertical: 10,
  },
});
