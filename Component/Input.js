import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const Input = ({ inputHandler, isModalVisible, cancelHandler }) => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  function handleConfirm() {
    console.log("user typed", text);
    inputHandler(text);
    setText("");
  }
  function handleCancel() {
    cancelHandler();
    setText("");
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.modalContainer}>
        {/* alt prop provides alternative text for images, aiding accessibility by describing the image for screen readers and users who can't view it.*/}
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          alt="Network Icon"
        />
        <Image
          style={styles.image}
          source={require("../assets/local-icon.png")}
          alt="Local Icon"
        />

        <TextInput
          style={styles.textStyle}
          autoFocus={true}
          placeholder="Type something"
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

        <View style={styles.buttonContainer}>
          <Button
            title="cancel"
            onPress={() => {
              handleCancel();
            }}
          />
          <Button
            title="confirm"
            onPress={() => {
              handleConfirm();
            }}
            disabled={text.length == 0}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    top: '20%'
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: "30%",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  textStyle: {
    width: "80%",
    height: 40,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Input;
