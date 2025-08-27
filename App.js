import { StyleSheet, Text, View } from 'react-native';
import DtPicker from './components/DtPicker';
import { useState, useEffect } from 'react';
import DurationPicker from './components/DurationPicker';
import Divider from './components/Divider';

export default function App() {
  const getEnd = (start, dur) => new Date(start.getTime() + dur * 1000);
  const [dt, setDt] = useState(new Date())
  const [dur, setDur] = useState(0)
  const [end, setEnd] = useState(getEnd(dt,dur))

  

  useEffect(()=> setEnd(getEnd(dt,dur)) ,[dt,dur])

  return (
    <View style={styles.container}>
      <Divider thickness={2} margin={10}/>
      <DtPicker dt={dt} setDt={setDt}/>
      <Divider thickness={2} margin={10}/>
      <DurationPicker duration={dur} setDuration={setDur}/>
      <Divider thickness={2} margin={10}/>
      <Text>Start: {dt.toString()} - End: {end.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical:100
    
    
  },
});
