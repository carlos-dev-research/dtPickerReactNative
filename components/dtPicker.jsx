import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import Divider from './Divider';
import { styles } from './styles';

export default function DtPicker({dt, setDt}) {
  
  const [xdt, setXDt] = useState(dt ? dt : new Date())
  const [year, setYear] = useState(xdt.getFullYear())
  const [month, setMonth] = useState(xdt.getMonth())
  const [day, setDay] = useState(xdt.getDate())
  const [hour, setHour] = useState(xdt.getHours() % 12 ? xdt.getHours() % 12 : 12 )
  const [ampm, setAmpm] = useState(xdt.getHours() >= 12 ? "PM" : "AM")
  const [minute, setMinute] = useState(xdt.getMinutes())
  const [show, setShow] = useState(false)
  
  useEffect(() => { 
    // Update all dependent states when xdt changes
    setYear(xdt.getFullYear());
    setMonth(xdt.getMonth());
    setDay(xdt.getDate());
    const hrs = xdt.getHours();
    setHour(hrs % 12 || 12);
    setAmpm(hrs >= 12 ? "PM" : "AM");
    setMinute(xdt.getMinutes()); 
    // Also update parent dt
    setDt(new Date(xdt)); 
  }, [xdt]);


  // Add/subtract months
  const addYear = (n) => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      newDt.setFullYear(newDt.getFullYear() + n);
      return newDt; 
    });
   };

  // Add/subtract months
  const addMonth = (n) => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      newDt.setMonth(newDt.getMonth() + n);
      return newDt; 
    });
   };
   // Add/subtract days
   const addDay = (n) => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      newDt.setDate(newDt.getDate() + n);
      return newDt; 
    });
  }; 
  // Add/subtract hours
  const addHour = (n) => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      newDt.setHours(newDt.getHours() + n);
      return newDt;
    });
  };
  // Add/subtract minutes
  const addMinute = (n) => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      newDt.setMinutes(newDt.getMinutes() + n);
      return newDt;
    }); 
  }; 
  
  const toggleAmPm = () => {
    setXDt((prevDt) => {
      const newDt = new Date(prevDt);
      const hours = newDt.getHours();
      if (hours < 12) { 
        // currently AM → add 12 hours to switch to PM
        newDt.setHours(hours + 12); 
      } else { 
        // currently PM → subtract 12 hours to switch to AM
        newDt.setHours(hours - 12); 
      } return newDt;
     }); 
    };

    const pad = (num) =>{
      return String(num).padStart(2,"0")
    }
    
  
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

  return (
    <View style={styles.container}>
      {/* Fixed header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.header} onPress={() => setShow(prev => !prev)}>
          <Text>Date</Text>
          <Text style={styles.labelBig}>{year}, {months[month]} {pad(day)} - {pad(hour)}:{pad(minute)} {ampm}</Text>
        </TouchableOpacity>
      </View>

      {/* Expanded panel below header */}
      {show && (
        <View style={styles.expanded}>
          {/* Year */}
          <View style={styles.row}>
            <Text style={styles.cell}>Year: </Text>
            <Text style={styles.cell}>{year}</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addYear(1)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addYear(-1)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>
          
          {/* Month */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Month: </Text>
            <Text style={styles.cell}>{months[month]}</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addMonth(1)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addMonth(-1)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>
          
          {/* Day */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Day: </Text>
            <Text style={styles.cell}>{pad(day)}</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addDay(1)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addDay(-1)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>

          {/* Hour */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Hour: </Text>
            <Text style={styles.cell}>{pad(hour)}</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addHour(1)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addHour(-1)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>

          {/* Minute */}
          <Divider/>
          <View style={styles.row}>
            <Text style={styles.cell}>Minute: </Text>
            <Text style={styles.cell}>{pad(minute)}</Text>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addMinute(1)}>
              <Ionicons name="add" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn} onPress={() => addMinute(-1)}>
              <Ionicons name="remove" size={30} color="white"/>
            </TouchableOpacity>
          </View>

          {/* AM/PM */}
          <Divider/>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cellBtnAm} onPress={() => toggleAmPm(1)}>
              <Text style={styles.cellAm}>{ampm}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
