import React from "react";
import { View } from 'react-native';

export default function Divider({ color = "black", thickness = 1, margin = 0 }){
    return (
    <View
        style={{
        backgroundColor: color,
        height: thickness,
        width: "100%",
        marginVertical: margin,
        }}
    />
)};
