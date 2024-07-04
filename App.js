import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Component/Header';

export default function App() {
  const appName = "Summer 2004 Mobile";
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Header appName={appName}/>
      <TextInput Style = {{height : 40}} 
        placeholder='Type something'
        onChangeText={newText => setText(newText) }
        value={text}
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
