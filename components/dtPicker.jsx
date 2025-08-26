import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';



export default function DtPicker({dt, setDt}) {
    const [xdt, setXDt] = useState(dt ? dt : new Date())
    const [year, setYear] = useState(xdt.getFullYear())
    const [month, setMonth] = useState(xdt.getMonth())
    const [day, setDay] = useState(xdt.getDate())
    const [hour, setHour] = useState(xdt.getHours() % 12 ? xdt.getHours() % 12 : 12 )
    const [ampm, setAmpm] = useState(xdt.getHours() >= 12 ? "PM" : "AM")
    const [minute, setMinute] = useState(xdt.getMinutes())

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
        }
        return newDt;
    });
    };




    const months = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];
  return (
    <View style={styles.hcont}>

      <View style={styles.vcont}>
        <TouchableOpacity style={styles.btn} onPress={() => addMonth(1)}>
            <Ionicons name="chevron-up" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.label}>{year}, {months[month]}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => addMonth(-1)} >
            <Ionicons name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.vcont}>
        <TouchableOpacity style={styles.btn} onPress={() => addDay(1)}>
            <Ionicons name="chevron-up" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.label}>{day}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => addDay(-1)} >
            <Ionicons name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.vcont}>
        <TouchableOpacity style={styles.btn} onPress={() => addHour(1)}>
            <Ionicons name="chevron-up" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.label}>{hour}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => addHour(-1)} >
            <Ionicons name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.vcont}>
        <TouchableOpacity style={styles.btn} onPress={() => addMinute(1)}>
            <Ionicons name="chevron-up" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.label}>{minute}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => addMinute(-1)} >
            <Ionicons name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.vcont}>
        <TouchableOpacity style={styles.btn} onPress={() => toggleAmPm()}>
            <Ionicons name="chevron-up" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.label}>{ampm}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => toggleAmPm()} >
            <Ionicons name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  vcont: {
    flex: 1,
    flexDirection: "column",      // horizontal layout
    justifyContent: "center", // space between items
    alignItems: "center",      // vertical alignment in row
  },
  btn:{
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:20,
    backgroundColor: "lightgray"
  },
  label:{
    padding: 15,
    margin:10,
    borderWidth:1,
    borderRadius:20,
    borderColor: "black"
  },
  hcont: {
    flex: 1,
    flexDirection: "row",      // horizontal layout
    justifyContent: "center", // space between items
    alignItems: "center",      // vertical alignment in row
  },
});
