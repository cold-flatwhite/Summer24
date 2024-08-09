import { View, Text, Button, Alert, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { mapsApiKey } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getADoc, writeWithIdToDB } from "../Firebase/firesotreHelper";
import { auth } from "../Firebase/firebaseSetup";

const LocationManager = () => {
  const [response, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const authId = auth.currentUser.uid;
  async function verifyPermission() {
    if (response.granted) {
      return true;
    }
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  const locateUserHandler = async () => {
    const hasPermission = verifyPermission();
    if (!hasPermission) {
      Alert.alert("You need to give permission to use location service");
      return;
    }
    try {
      const result = await Location.getCurrentPositionAsync();

      setLocation({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  function chooseLocationHandler() {
    navigation.navigate("Map");
  }

  useEffect(() => {
    if (route.params) {
      setLocation(route.params.location);
    }
  }, [route.params]);

  useEffect(()=> {
    async function getUserData() {
      const userData = await getADoc("users", auth.currentUser.uid);
      if (userData) {
        setLocation(userData.location);
      }
    }
    getUserData();
  })

  function saveUserLocation() {
    writeWithIdToDB({ location }, "users", authId);
    navigation.navigate("Home");
  }

  return (
    <View>
      <Button title="find my location" onPress={locateUserHandler}></Button>
      <Button
        title="let me choose my locaiton"
        onPress={chooseLocationHandler}
      />
      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
          style={{ width: 400, height: 200 }}
        />
      )}
      <Button title="Save My Location" onPress={saveUserLocation} />
    </View>
  );
};

export default LocationManager;
