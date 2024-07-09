import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(true);
  function handleConfirm () {
    console.log("user typed", text);
  }
  return (
    <View>
      <TextInput
        autoFocus={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 5}}
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
          setFocus(true);
        }}

        value={text}
      />
      {blur && <Text>Thank you</Text>}
      <Button title="confirm" onPress = {() => {
        handleConfirm();
      }} />
    </View>
  );
};

export default Input;
