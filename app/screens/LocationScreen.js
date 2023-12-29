import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import Appcolors from "../config/Appcolors";

function LocationScreen({ navigation }) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <StatusBar />
      <View
        style={{
          backgroundColor: "#EEEEEE",
          width: "90%",
          height: 3,
          //   marginLeft: 10,
          //   marginRight: 30,
          left: 15,
          marginBottom: 20,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#EEEEEE",
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          borderRadius: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/drawable/location.png")}
            style={{ width: 30, height: 30, marginTop: 10 }}
          />

          <Text
            style={{
              fontSize: 8,
              color: "#5C5C5C",
              fontWeight: "700",
              paddingTop: 15,
              paddingLeft: 8,
            }}
          >
            Turn on location services
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 8,
              color: "#5C5C5C",
              fontWeight: "700",
              paddingTop: 10,
              paddingLeft: 40,
            }}
          >
            Please allow tech domains to access your site
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Appcolors.appYellow,
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            // justifyContent: "center",
            marginRight: 20,
            paddingVertical: 5,
            paddingRight: 10,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/drawable/location.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontWeight: "bold",
              justifyContent: "flex-start",
            }}
          >
            Activate the site
          </Text>
        </View>
      </View>
      <Button title={"click"} onPress={() => navigation.navigate("Order6")} />
    </SafeAreaView>
  );
}

export default LocationScreen;
