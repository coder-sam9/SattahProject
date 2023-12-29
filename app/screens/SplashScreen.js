import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";

function SplashScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6C334",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <StatusBar
      //   barStyle={{ backgroundColor: "black" }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",

          fontSize: 32,
          paddingBottom: 32,
        }}
      >
        Sattha App
      </Text>
      <Image
        source={require("../assets/drawable/icon.png")}
        style={{ width: 268, height: 268, paddingBottom: 20 }}
      />
      <Text style={{ color: "#2C845C", fontSize: 32, fontWeight: "bold" }}>
        Certified by
      </Text>
      <Image
        source={require("../assets/drawable/najmlogo.png")}
        style={{ width: 111, height: 200, marginBottom: 20 }}
      />
      <Button title={"click"} onPress={() => navigation.navigate("Order9")} />
    </View>
  );
}

export default SplashScreen;
