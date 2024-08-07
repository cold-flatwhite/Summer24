import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from "../Firebase/firebaseSetup";
import LocationManager from "./LocationManager";

const Profile = () => {
  return (
    <View>
      <Text>Profile of user with id : {auth.currentUser.uid}</Text>
      <LocationManager/>
    </View>
  );
};

export default Profile;
