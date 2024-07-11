import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ appName }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to {appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "purple", 
    borderWidth: 2, 
  },
  headerText: {
    fontSize: 19,
    color: "purple",
  },
});

export default Header;
