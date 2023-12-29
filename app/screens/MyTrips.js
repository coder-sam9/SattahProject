import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";

function MyTrips({ navigation }) {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingTop: 40,
      }}
    >
      <StatusBar />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            backgroundColor: "#1D3F99",
            justifyContent: "space-around",
            alignItems: "center",
            width: 150,

            // paddingHorizontal: 20,
            height: 170,
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../assets/drawable/table.png")}
            style={{ width: 40, height: 40, marginTop: 10 }}
          />
          <Text style={{ color: "white" }}>Today's Jobs</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            0
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F5D75D",
            justifyContent: "space-around",
            alignItems: "center",
            width: 150,

            // paddingHorizontal: 20,
            height: 170,
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../assets/drawable/cash.png")}
            style={{ width: 40, height: 40, marginTop: 10 }}
          />
          <Text style={{ color: "white" }}>Earnings</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            2100<Text style={{ fontSize: 10, color: "white" }}>SAR</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            backgroundColor: "#009F5C",
            justifyContent: "space-around",
            alignItems: "center",
            width: 150,
            marginTop: 20,

            // paddingHorizontal: 20,
            height: 170,
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../assets/drawable/accepted.png")}
            style={{ width: 40, height: 40, marginTop: 10 }}
          />
          <Text style={{ color: "white" }}>Completed Job's</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F35349",
            justifyContent: "space-around",
            alignItems: "center",
            width: 150,
            marginTop: 20,

            // paddingHorizontal: 20,
            height: 170,
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../assets/drawable/rejected.png")}
            style={{ width: 40, height: 40, marginTop: 10 }}
          />
          <Text style={{ color: "white" }}>Rejected Job's</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            7
          </Text>
        </View>
      </View>
      <Button title={"click"} onPress={() => navigation.navigate("Order7")} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  items: {
    backgroundColor: "#F35349",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    marginTop: 20,

    // paddingHorizontal: 20,
    height: 170,
    paddingVertical: 20,
    borderRadius: 15,
  },
});

export default MyTrips;
