import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import Divider from './Divider';
import { styles } from './styles';


export default function DurationPicker({duration, setDuration}) {
    //Duration in Seconds
  const [xt, setXt] = useState(duration ? duration : 0)
  const [hour, setHour] = useState(Math.floor(xt / 3600))
  const [minute, setMinute] = useState(Math.floor(xt%3600)/60)
  const [show, setShow] = useState(false)
  
  useEffect(() => { 
    setHour(Math.floor(xt / 3600));
    setMinute(Math.floor(xt%3600)/60); 
    setDuration(xt); 
  }, [xt]);

  const addSeconds = (n) => { setXt((prev) => {
            const ni = prev + n 
            if (ni > 12*3600){
                return 0
            }
            else if(ni<0){
                return 12*3600
            }
            else{
                return ni
            }
        })
    };
  
    const pad = (num) =>{
      return String(num).padStart(2,"0")
    }
    
  
  return (
    <View style={styles.container}>
      {/* Fixed header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.header} onPress={() => setShow(prev => !prev)}>
          <Text>Duration</Text>
          <Text style={styles.labelBig}>{hour}h {minute}m</Text>
        </TouchableOpacity>
      </View>

      {/* Expanded panel below header */}
      {show && (
        <View style={styles.expanded}>
          {/* Hour */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Hour: </Text>
            <Text style={styles.cell}>{pad(hour)}h</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addSeconds(3600)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addSeconds(-3600)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>

          {/* Minute */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Minute: </Text>
            <Text style={styles.cell}>{pad(minute)}m</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addSeconds(60)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addSeconds(-60)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}