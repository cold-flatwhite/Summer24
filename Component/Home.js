import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./Header";
import Input from "./Input";
import { useState, useEffect } from "react";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { app } from "../Firebase/firebaseSetup";
import { writeToDB } from "../Firebase/firesotreHelper";
import { database } from "../Firebase/firebaseSetup";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home({navigation}) {

  const appName = "Summer 2024 Mobile";
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    onSnapshot(collection(database, "goal"), (querySnapShot) => {
      let newArray = [];
      if (!querySnapShot.empty) {
        querySnapShot.forEach((docSnapShot) => {
          console.log(docSnapShot.id)
          newArray.push({...docSnapShot.data(), id : docSnapShot.id});
        });
      }
      setGoals(newArray);
    });
  },[]);

  function handleInputData(data) {
    const newGoal = { text: data };
    //use updater function when updating the state variable based on existing values
    //call writeDB 
    writeToDB(newGoal,"goal")

    setModalVisible(false);
  }

  function dismissModal() {
    setModalVisible(false);
  }

  function handleDeleteGoal(deleteId) {
    console.log("goal deleted", deleteId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => {
        return goal.id != deleteId;
      });
    });
  }

  function handlePressGoal(pressedGoal) {
    console.log("goal proceed", pressedGoal);
    navigation.navigate("Details", {goalObj : pressedGoal});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={appName} theme="dark" />
        <PressableButton pressedFunction={() => {
            setModalVisible(true);
          }}
          componentStyle={styles.textStyle}
          >
          <Text>Add a goal</Text>
        </PressableButton>
      </View>

      <Input
        inputHandler={handleInputData}
        isModalVisible={modalVisible}
        cancelHandler={dismissModal}
      />

      <View style={styles.bottomContainer}>
        {goals.length === 0 ? (
          <Text style={styles.textStyle}>Please Add a Goal</Text>
        ) : (
          <FlatList
            renderItem={({ item }) => {
              return <GoalItem goal={item} deleteHandler={handleDeleteGoal} pressHandler = {handlePressGoal}/>;
            }}
            data={goals}
          />
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
    justifyContent: "center",
  },
  textStyle: {
    color: "darkmagenta",
    fontSize: 25,
  },
  textContainer: {
    color: "darkmagenta",
    backgroundColor: "#aaa",
    marginVertical: 15,
    padding: 15,
    borderRadius: 5,
  },

  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },
});
