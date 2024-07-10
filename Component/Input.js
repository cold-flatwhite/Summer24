import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";

const Input = ({ inputHandler, isModalVisible, cancelHandler }) => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  function handleConfirm() {
    console.log("user typed", text);
    inputHandler(text);
  }
  function handleCancel() {
    cancelHandler();
  }
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          placeholder="Type password"
          secureTextEntry={true}
          onBlur={() => {
            setBlur(true);
          }}
          onFocus={() => {
            setBlur(false);
          }}
          onChangeText={(newText) => {
            setText(newText);
          }}
          autoCapitalize={true}
          value={text}
        />
        {blur && <Text>Thank you</Text>}
        <View style = {styles.buttonStyle}>
          <Button
            title="confirm"
            onPress={() => {
              handleConfirm();
            }}
          />
          <Button
            title="cancel"
            onPress={() => {
              handleCancel();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle : {
    marginHorizontal : '30%',
    margin : 10,
  }
});

export default Input;
