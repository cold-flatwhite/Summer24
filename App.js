import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Component/Header';
import Input from './Component/Input';

export default function App() {
  const appName = "Summer 2004 Mobile";
  return (
    <View style={styles.container}>
      <Header appName={appName}/>
      <Input/>
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
