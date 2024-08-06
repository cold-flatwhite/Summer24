import { View, Text, Button, Alert,Image } from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import {mapsApiKey} from '@env';


const LocationManager = () => {
    const [response, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState([]);
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
        Alert.alert("You need to give permission to use location service")
    }
    try {
      const result = await Location.getCurrentPositionAsync();
      console.log(result);
      setLocation({
        latitude : result.coords.latitude,
        longitude : result.coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Button title="find my location" onPress={locateUserHandler}></Button>
      <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
          style={{ width: 400, height: 200 }}
        />
    </View>
  );
};

export default LocationManager;
