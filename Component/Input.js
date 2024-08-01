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
import ImageManager from "./ImageManager";

const Input = ({ inputHandler, isModalVisible, cancelHandler }) => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const [uri, setUri] = useState("");

  function handleConfirm() {
    console.log("user typed", text);
    inputHandler(text);
    setText("");
  }

  function handleCancel() {
    cancelHandler();
    setText("");
  }
  function handleUrl(uri) {
    setUri(uri);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
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
            style={styles.input}
            autoFocus={true}
            value={text}
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
          />
          <ImageManager />
          {blur && <Text>Thank you</Text>}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="cancel"
                onPress={() => {
                  handleCancel();
                }}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="confirm"
                onPress={() => {
                  handleConfirm();
                }}
                disabled={text.length == 0}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    width: "30%",
    margin: 5,
  },
  modalView: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: "10%",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "purple",
    width: "50%",
    padding: 5,
    color: "dodgerblue",
    marginVertical: 10,
  },

  image: {
    width: 100,
    height: 100,
  },
});

export default Input;
