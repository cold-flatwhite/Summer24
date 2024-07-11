import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ appName }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to {appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "darkmagenta",
    font: 25,

  },
});

export default Header;
