import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import AppButton from "../components/AppButton";
import DottedLine from "../components/DottedLine";
import Appcolors from "../config/Appcolors";

function JourneyProcessScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar />
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          width: 40,
          height: 40,
          borderColor: "#aabb00",
          backgroundColor: "blue",
          padding: 5,
          borderWidth: 2,
        }}
      >
        <Image
          source={require("../assets/drawable/profile1.png")}
          style={{ height: 35, width: 35, padding: 5 }}
        />
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
            fontWeight: "700",
            opacity: 0.7,
          }}
        >
          My Job Id
        </Text>
        <Text
          style={{
            // fontWeight: "bold",
            color: "#333333",
            fontSize: 12,
            opacity: 0.7,
            fontWeight: "700",
          }}
        >
          SRQ21112111
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
          //   marginBottom: 13,
          paddingRight: 20,
        }}
      >
        <Text style={styles.TxtStyle}>Payment Recieved</Text>
        <Image
          source={require("../assets/drawable/cash.png")}
          style={styles.imageStyle}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginLeft: 10,
        }}
      >
        <DottedLine LiHeight={40} />
      </View>
      <View style={styles.ViewStyle}>
        <Text style={styles.TxtStyle}>Pickup</Text>
        <Image
          source={require("../assets/Circle.png")}
          style={styles.imageStyle}
        />
        {/* <Image
          source={require("../assets/drawable/loPick.png")}
          style={{
            width: 30,
            height: 30,
            borderColor: "black",
            borderWidth: 1,
          }}
        /> */}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginLeft: 10,
        }}
      >
        <DottedLine LiHeight={40} />
      </View>
      {/* Pickup Completed */}
      <View style={styles.ViewStyle}>
        <Text style={styles.TxtStyle}>Pickup Completed</Text>
        <Image
          source={require("../assets/Circle.png")}
          style={styles.imageStyle}
        />
        {/* <Image
          source={require("../assets/drawable/loPick.png")}
          style={{
            width: 30,
            height: 30,
            borderColor: "black",
            borderWidth: 1,
          }}
        /> */}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginLeft: 10,
        }}
      >
        <DottedLine LiHeight={40} />
      </View>
      {/* Moving to drop-Off */}
      <View style={styles.ViewStyle}>
        <Text style={styles.TxtStyle}>Moving to Drop-Off</Text>
        <Image
          source={require("../assets/Circle.png")}
          style={styles.imageStyle}
        />
        {/* <Image
          source={require("../assets/drawable/loPick.png")}
          style={{
            width: 30,
            height: 30,
            borderColor: "black",
            borderWidth: 1,
          }}
        /> */}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginLeft: 10,
        }}
      >
        <DottedLine LiHeight={40} />
      </View>
      {/* Reached to Drop Off  */}
      <View style={styles.ViewStyle}>
        <Text style={styles.TxtStyle}>Reached to Drop Off</Text>
        <Image
          source={require("../assets/Circle.png")}
          style={styles.imageStyle}
        />
        {/* <Image
          source={require("../assets/drawable/loPick.png")}
          style={{
            width: 30,
            height: 30,
            borderColor: "black",
            borderWidth: 1,
          }}
        /> */}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginLeft: 10,
        }}
      >
        <DottedLine LiHeight={40} />
      </View>
      {/* Service Compoleed */}
      <View style={styles.ViewStyle}>
        <Text style={styles.TxtStyle}>Service Complete</Text>
        <Image
          source={require("../assets/Circle.png")}
          style={styles.imageStyle}
        />
        {/* <Image
          source={require("../assets/drawable/loPick.png")}
          style={{
            width: 30,
            height: 30,
            borderColor: "black",
            borderWidth: 1,
          }}
        /> */}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#009F5C",
          padding: 10,
          width: "100%",
          paddingVertical: 15,
          //   height: 60,
          //   borderWidth: 2,
          //   borderColor: "black",
          justifyContent: "center",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {" "}
          MovingTo Pickup Point
        </Text>
      </TouchableOpacity>
      <Button title={"click"} onPress={() => navigation.navigate("Order11")} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    // borderColor: "black",
    borderWidth: 1,
  },
  ViewStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    //   marginTop: 13,
    //   marginBottom: 13,
    paddingRight: 20,
  },
  TxtStyle: {
    // fontWeight: "bold",
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold",
    opacity: 0.7,
  },
});

export default JourneyProcessScreen;
