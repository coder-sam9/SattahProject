import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import TopDoggle from "../components/TopDoggle";

function OrderQueryScreen({ navigation }) {
  const [sho, setSho] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
      }}
    >
      <StatusBar />
      <TopDoggle />
      <View
        style={{
          backgroundColor: "#F6F7FB",
          flexDirection: "row",
          paddingLeft: 30,
          paddingRight: 10,
          paddingVertical: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#009F5C", fontSize: 12 }}>
          Inside the city
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#009F5C",
            marginLeft: 20,
            fontSize: 12,
          }}
        >
          Drop Off Job
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
            marginLeft: 40,
          }}
        >
          10 secs
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
      <View>
        <Text
          style={{
            fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            marginTop: 20,
            // marginBottom: 10,
            opacity: 0.7,
          }}
        >
          Pickup
        </Text>
        <Text
          style={{
            // fontWeight: "bold",
            fontFamily: "Roboto",

            color: "#333333",

            fontSize: 12,
            marginBottom: 14,
            marginRight: 60,
          }}
        >
          Firmament fill itself can't green our. Face to beast Morning signs
          midst gathering under. Very they're morning green let set may.
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
          }}
        >
          Estimated distance to Drop off
        </Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "row",
          //   backgroundColor: "blue",
          width: "100%",
          marginRight: 60,
          height: 50,
          //   paddingRight: 20,
        }}
      >
        <Text style={{ color: "#333333" }}>2KM</Text>
        {/* { {sho ? ( } */}
        <Image
          source={require("../assets/drawable/EstimatedDistance.png")}
          style={{ height: 35, width: 35, marginLeft: 20 }}
        />
        {/* ) : (
           <Image
            source={require("../assets/drawable/table.png")}
            style={{ height: 20, width: 20 }}
          /> 
        )}*/}
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",

          width: "100%",
          //   backgroundColor: "blue",
        }}
      >
        <Text style={{ color: "#333333", opacity: 0.7, fontWeight: "bold" }}>
          Delivery amount
        </Text>
        <View
          style={{
            borderRadius: 1,
            borderWidth: 1,
            height: 90,
            marginRight: 46,
            width: 1,
            borderStyle: "dashed",
            borderColor: "black",
          }}
        ></View>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          //   alignItems: "center",
          flexDirection: "row",
          //   backgroundColor: "blue",
          width: "100%",
          marginRight: 60,
          height: 50,
          //   paddingRight: 20,
        }}
      >
        <Text style={{ color: "#009F5C", fontWeight: "bold" }}>300 SAR</Text>

        <Image
          source={require("../assets/drawable/Estimatedprice.png")}
          style={{ height: 35, width: 35, marginLeft: 20 }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-evenly",
          width: "100%",
          flexDirection: "row",
        }}
      >
        {/* <AppButton title={"OK"} collo={"#009F5C"} />
        <AppButton title={"Cancel"} collo={"#F35349"} /> */}
        <TouchableOpacity
          style={{
            backgroundColor: "#009F5C",

            width: 146,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#F35349",

            width: 146,
            height: 45,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Button title={"click"} onPress={() => navigation.navigate("Order2")} />
    </SafeAreaView>
  );
}

export default OrderQueryScreen;
