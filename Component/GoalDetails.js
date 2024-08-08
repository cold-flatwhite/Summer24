import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { updateGoalWarning } from "../Firebase/firesotreHelper";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const [imageUri, setImageUri] = useState("");
  const [warning, setWarning] = useState(false);

  function warningHanlder() {
    console.log("warning");
    setWarning(true);
    navigation.setOptions({ title: "warning" });
  }

  // waits till the render is done and then run the effect function
  useEffect(() => {
    async function getImageUrl() {
      if (route.params) {
        try {
          const uri = await getDownloadURL(
            ref(storage, route.params.goalObj.image)
          );
          console.log(uri);
          setImageUri(uri);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getImageUrl();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="warning" color="grey" onPress={warningHanlder}/>
      }
    });
  }, [navigation]);

  return (
    <View>
      {route.params ? (
        <View>
        <Text style={warning && styles.warningStyle}>
        You are seeing the details of goal with text :
            {route.params.goalObj.text} and id
            {route.params.goalObj.id}:
          </Text>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      ) : (
        <Text style={{ color: textColor }}>Details</Text>
      )}
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      {route.params && <GoalUsers id={route.params.goalObj.id} />}
    </View>
  );
}

const styles = StyleSheet.create({
  warningStyle : {
    color : "red",
  }
})