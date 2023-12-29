import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import DottedLine from "../components/DottedLine";
import TopDoggle from "../components/TopDoggle";
import Appcolors from "../config/Appcolors";

function OrderResponseScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "white",
      }}
    >
      <StatusBar />

      <TopDoggle />
      <View
        style={{
          width: "100%",
          marginHorizontal: 20,
          backgroundColor: "#F6F7FB",
          borderRadius: 13,
        }}
      >
        <Text
          style={{
            color: "#F7C435",
            fontWeight: "bold",
            paddingBottom: 15,
            paddingLeft: 10,
            paddingTop: 15,
            justifyContent: "flex-start",
          }}
        >
          Drop Off Job
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
          marginTop: 13,
          marginBottom: 13,
        }}
      >
        <Text
          style={{
            // fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
          }}
        >
          11/02/2022
        </Text>
        <Text
          style={{
            // fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
          }}
        >
          SRQ21112111
        </Text>
      </View>
      {/* Pickup Estimated nd Delivery area */}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
          //   paddingHorizontal: 5,
          //   paddingVertical: 5,
          // padding: 5,
          // margin: 20,
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>
          Pickup
        </Text>

        <Image
          source={require("../assets/drawable/pickup.png")}
          style={{ width: 30, height: 30, marginRight: 20 }}
        />
      </View>
      {/* Pick uP down Text */}
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "flex-",
          // backgroundColor: "blue",
          width: "100%",
          paddingRight: 35,
          // marginRight: 40,
          // marginLeft: 20,
        }}
      >
        <Text
          style={{
            // fontWeight: "bold",
            fontFamily: "Roboto",

            color: "#333333",

            fontSize: 12,
            // marginBottom: 14,
            // marginRight: 60,
            paddingRight: 60,
          }}
        >
          Firmament fill itself can't green our. Face to beast Morning signs
          midst gathering under. Very they're morning green let set may.
        </Text>
        <View
          style={{
            borderRadius: 1,
            borderWidth: 0.5,
            height: 120,
            // height: LiHeight,
            marginRight: 80,
            width: 1,
            borderStyle: "dashed",
            borderColor: "black",
          }}
        ></View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          // backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
            // marginRight: 30,
          }}
        >
          Estimated distance to Drop off
        </Text>
        <Image
          source={require("../assets/drawable/EstimatedDistance.png")}
          style={{ height: 35, width: 35, marginRight: 18 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          // alignItems: "center",
          alignSelf: "flex-end",
          // justifyContent: "center",
          paddingLeft: "80%",
          marginRight: 8,
          width: "100%",
        }}
      >
        <Text>2KM</Text>
        <DottedLine LiHeight={90} />
      </View>
      {/* <View> */}
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          // backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
            // marginRight: 30,
          }}
        >
          Delivery Amount
        </Text>
        <Image
          source={require("../assets/drawable/Estimatedprice.png")}
          style={{ height: 35, width: 35, marginRight: 18 }}
        />
      </View>
      {/* </View> */}
      <TouchableOpacity
        style={{
          backgroundColor: Appcolors.appYellow,
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginTop: 40,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12 }}>
          Waiting for Customer Acceptance (please wait)
        </Text>
      </TouchableOpacity>

      <Button title={"click"} onPress={() => navigation.navigate("Order3")} />
    </SafeAreaView>
  );
}

export default OrderResponseScreen;
