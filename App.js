import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DtPicker from './components/dtPicker';
import { useState } from 'react';

export default function App() {
  const [dt, setDt] = useState(null)

  return (
    <View style={styles.container}>
      <DtPicker dt={dt} setDt={setDt}/>
      <Text>{dt ? dt.toDateString() : "No Date Selected"}</Text>
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
