import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { updateGoalWarning } from "../Firebase/firesotreHelper";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const [imageUri, setImageUri] = useState("");


  useEffect(() => {
    async function getImageUrl() {
      if (route.params) {
        try {
          const uri = await getDownloadURL(ref(storage, route.params.goalObj.image));
          console.log(uri);
          setImageUri(uri);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getImageUrl();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Warning"
          onPress={async () => {
            setTextColor("red");
            navigation.setOptions({ title: "Warning!" });
            if (route.params && route.params.goalObj) {
              await updateGoalWarning(route.params.goalObj.id, "goal");
            }
          }}
        />
      ),
    });
  }, [navigation, route.params]);

  return (
    <View>
      {route.params ? (
        <View>
          <Text style={{ color: textColor }}>
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
      <GoalUsers id={route.params.goalObj.id} />
    </View>
  );
}
