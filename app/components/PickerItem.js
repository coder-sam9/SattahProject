import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../Config/Colors";
import AppIcon from "./AppIcon";

function PickerItem({ icon, backgroundColor, onPress, label }) {
  return (
    <TouchableOpacity
      style={{ padding: 10, alignItems: "center" }}
      onPress={onPress}
    >
      <AppIcon name={icon} size={100} backgroundColor={backgroundColor} />
      <Text style={{ fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
