import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import Appcolors from "../config/Appcolors";

function TripComplete({ navigation }) {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 30,

        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar />
      <View
        style={{
          backgroundColor: "#F5D75D",
          width: "100%",
          height: 300,
          borderRadius: 20,
          padding: 25,
        }}
      >
        {/* Estimated Text Line */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
            Estimated Price
          </Text>
          <Text style={{ opacity: 0.7 }}>300 R</Text>
        </View>
        {/* Separate Line */}
        <View
          style={{ backgroundColor: "white", width: "100%", height: 2 }}
        ></View>
        {/* Pick Up line  */}
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>
            Pick Up point
          </Text>
          <Image
            source={require("../assets/drawable/location.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        {/* Addresss TExt */}
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            marginRight: 10,
            marginLeft: 5,
          }}
        >
          <Text style={{ fontSize: 9, width: "70%" }} numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <View
            style={{
              width: 2,
              height: 55,
              backgroundColor: "white",
              marginRight: 10,
            }}
          ></View>
        </View>
        {/* Drop OFF line */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Drop Off</Text>
          <Image
            source={require("../assets/drawable/location.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        {/* Line */}
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 2,
            marginTop: 15,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
            marginTop: 5,
            marginBottom: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 12 }}>
            Estimated Distance
          </Text>
          <Text style={{ opacity: 0.7, fontSize: 12, fontWeight: "700" }}>
            5 KM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
            // marginTop: 5,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 12 }}>
            Total Time
          </Text>
          <Text style={{ opacity: 0.7, fontSize: 12, fontWeight: "600" }}>
            3 HR
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/drawable/stampEN.png")}
        style={{ left: 100, bottom: 30, width: 200, height: 100 }}
      />
      <Button title={"click"} onPress={() => navigation.navigate("Order12")} />
    </SafeAreaView>
  );
}

export default TripComplete;
