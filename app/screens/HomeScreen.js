import React from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";
import TopDoggle from "../components/TopDoggle";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        width: "100%",
        overflow: "scroll",
        paddingTop: 35,
        backgroundColor: "#FFFFFF",
        paddingLeft: 18,
        paddingRight: 19,
      }}
    >
      <StatusBar
      //   barStyle={{ backgroundColor: "black" }}
      />
      <TopDoggle />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/drawable/online.png")}
          style={{ height: 80, width: 80, marginBottom: 12 }}
        />
        {/* <Image
          source={require("../assets/drawable/login.png")}
          style={{ height: 60, width: 60, marginBottom: 12 }}
        /> */}
        <Text
          style={{
            color: "#B2B2B2",
            fontSize: 16,
            paddingHorizontal: 20,
          }}
        >
          {/* Turn status to online to receive new orders */}
          Waiting for Quotation..... from najm
        </Text>
      </View>
      <Image
        source={require("../assets/drawable/najmlogo.png")}
        style={{ width: 120, height: 200, marginBottom: 10 }}
      />
      <Button title={"click"} onPress={() => navigation.navigate("Order13")} />
    </SafeAreaView>
  );
}

export default HomeScreen;
