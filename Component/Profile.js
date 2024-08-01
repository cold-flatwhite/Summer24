import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from "../Firebase/firebaseSetup";

const Profile = () => {
  console.log(auth.currentUser);
  return (
    <View>
      <Text>Profile of user with id : {auth.currentUser.uid}</Text>
    </View>
  );
};

export default Profile;
