import { View, Image, Alert, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager({ imageUriHandler }) {
  const [response, requestPermission] = ImagePicker.useCameraPermissions();
  const [imageUri, setImageUri] = useState("");

  async function verifyPermission() {
    console.log(response);
    if (response.granted) {
      return true;
    }
    //ask for permission
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  async function takeImageHandler() {
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give permission to camera");
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      setImageUri(result.assets[0].uri);
      imageUriHandler(result.assets[0].uri);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      {imageUri && (
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
      )}
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
