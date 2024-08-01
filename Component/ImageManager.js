import { View, Text, Alert } from "react-native";
import React from "react";
import { launchCameraAsync } from "expo-image-picker";
import { Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

export default function ImageManager() {
  const [response, requestPermission] = ImagePicker.useCameraPermissions();
  const [imageUri, setImageUri] = useState("");
  async function verifyPermission() {
    if (response.granted) {
      return true;
    }
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }
  async function takeImageHandler() {
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give permission to camera");
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      setImageUri(result.uri);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      {imageUri && <Image
        source={{
          uri: imageUri,
        }}
        style={styles.image}
      />}
      <Button title="Take an Image" onPress={takeImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
    },
  });
  