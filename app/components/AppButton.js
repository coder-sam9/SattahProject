import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Appcolors from "../config/Appcolors";
import AppScreen from "./AppScreen";

function AppButton({ title, onPress, collo }) {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 50,
        backgroundColor: Appcolors.appYellow,

        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        marginLeft: 1.5,
        paddingRight: 1.5,
        alignItems: "center",
      }}
      title={title}
      onPress={onPress}
    >
      <Text style={styles.txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppButton;
