import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({ size, name, iconcolour, backgroundColor }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconcolour} />
    </View>
  );
}

export default AppIcon;
