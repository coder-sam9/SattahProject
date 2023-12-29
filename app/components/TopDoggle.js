import React from "react";
import { View, Text, Image } from "react-native";

function TopDoggle(props) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        //   paddingHorizontal: 5,
        //   paddingVertical: 5,
        padding: 5,
        margin: 20,
      }}
    >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>
        Recieve Orders
      </Text>
      <Image
        source={require("../assets/drawable/on.png")}
        style={{ height: 30, width: 60, paddingTop: 10 }}
      />
    </View>
  );
}

export default TopDoggle;
