import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(true);
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 5}}
        placeholder="Type password"
        secureTextEntry={true}
        onChangeText={(newText) => {
          setText(newText);
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
        value={text}
      />
      {focus && <Text>Thank you</Text>}
    </View>
  );
};

export default Input;
