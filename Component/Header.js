import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ appName }) => {
  return (
    <View>
      <Text style={styles.header}>Welcome to {appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "darkmagenta",
    fontSize: 20,
    borderColor: "darkmagenta",
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Header;
