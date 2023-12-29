import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  Button,
} from "react-native";
import TopDoggle from "../components/TopDoggle";

function OrderStatus({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "white",
      }}
    >
      <StatusBar
      //   barStyle={{ backgroundColor: "black" }}
      />
      <TopDoggle />
      {/* <View
        style={{
          backgroundColor: "blue",

          alignSelf: "stretch",
          justifyContent: "space-between",
          alignContent: "space-around",
        }}
      > */}
      <View
        style={{
          backgroundColor: "#F6F7FB",

          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,

          flexDirection: "row",
          paddingHorizontal: 5,
          alignSelf: "stretch",
          justifyContent: "space-between",
          // alignContent: "space-around",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Text
          style={{
            color: "#1D3F99",
            fontSize: 14,
            fontWeight: "bold",
            opacity: 0.7,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          Job Id:
        </Text>
        <Text
          style={{
            color: "#1D3F99",
            opacity: 0.7,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          SR0112214969
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F7FB",

          alignSelf: "stretch",
          justifyContent: "space-between",
          alignContent: "space-around",
          paddingHorizontal: 5,
          marginBottom: 2,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            paddingTop: 5,
          }}
        >
          Pick Up From
        </Text>
        <Text style={{ color: "#B2B2B2", fontSize: 14, paddingBottom: 5 }}>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          paddingHorizontal: 5,

          alignSelf: "stretch",
          justifyContent: "space-between",
          alignContent: "space-around",

          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          // marginBottom: 2,
        }}
      >
        <Text style={{ paddingTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Quotation Status:</Text>
          <Text style={{ fontWeight: "bold", color: "#71C19F", opacity: 0.7 }}>
            Accepted
          </Text>
        </Text>
        <Text style={{ paddingTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Cancel:</Text>
          <Text style={{ fontWeight: "bold", color: "#F35349", opacity: 0.7 }}>
            CanceledByCustomer
          </Text>
        </Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Reason:</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#B2B2B2",
              opacity: 0.7,
            }}
          >
            Journey takes more time
          </Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 20,

          flexDirection: "row",
          paddingHorizontal: 5,
          alignSelf: "stretch",
          justifyContent: "space-between",
          // alignContent: "space-around",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Text
          style={{
            color: "#1D3F99",
            fontSize: 14,
            fontWeight: "bold",
            opacity: 0.7,
            paddingBottom: 10,

            paddingTop: 10,
          }}
        >
          Job Id:
        </Text>
        <Text
          style={{
            color: "#1D3F99",
            opacity: 0.7,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          SR0112214969
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F7FB",

          alignSelf: "stretch",
          justifyContent: "space-between",
          alignContent: "space-around",
          paddingHorizontal: 5,
          marginBottom: 2,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          Pick Up From
        </Text>
        <Text style={{ color: "#B2B2B2", fontSize: 14 }}>
          This text is an example of text that can be replaced in the same
          space.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F7FB",
          paddingHorizontal: 5,

          alignSelf: "stretch",
          justifyContent: "space-between",
          alignContent: "space-around",

          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          // marginBottom: 2,
          paddingBottom: 2,
        }}
      >
        <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Quotation Status:</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#F58A83",
              opacity: 0.7,
              //   paddingBottom: 5,
              //   letterSpacing: 0.5,
            }}
          >
            Payment Cancelled
          </Text>
        </Text>
      </View>
      {/* </View> */}
      <Button title={"click"} onPress={() => navigation.navigate("Order4")} />
    </SafeAreaView>
  );
}

export default OrderStatus;
