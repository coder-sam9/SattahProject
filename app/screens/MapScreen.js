import * as React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import Appcolors from "../config/Appcolors";
import AppTextInput from "../components/AppTextInput";

const widthh = Dimensions.get("window").width;
const heightt = Dimensions.get("window").height;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={styles.searchBarView}>
        <View style={styles.innerSearchBar}>
          <Image
            style={{
              width: 20,
              height: 30,
              alignSelf: "center",
              justifyContent: "center",

              // borderRadius: 35,
            }}
            source={require("../assets/microphone.jpg")}
          ></Image>
          {/* <View> */}
          <TextInput
            style={styles.searchBarText}
            // onChangeText={handleChange("Password")}
            placeholderTextColor="#707070"
            placeholder="Find A service Provider"
          />
          {/* </View> */}
          <Image
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
              justifyContent: "center",
              marginRight: 5,
            }}
            source={require("../assets/searchIcon.jpg")}
          ></Image>
        </View>
      </View>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  map: {
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    height: "100%",

    // paddingBottom: 90,
    // height: 0.7 * heightt,

    // top: heightt * 0.2,
  },
  searchBarText: {
    color: "black",
    fontSize: 10,
    // paddingLeft: 20,

    fontFamily: "Roboto",
    fontWeight: "bold",

    backgroundColor: "#F6F7FB",
    width: "80%",
  },
  searchBarView: {
    flexDirection: "row",
    borderRadius: 13,
    marginVertical: 22,
    // paddingHorizontal: 20,
    backgroundColor: Appcolors.appGrey,
    justifyContent: "space-between",
    // flex: 1,
    alignItems: "center",

    width: "100%",
  },
  innerSearchBar: {
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingLeft: 5,
    height: 45,
    width: "100%",
    flexDirection: "row",
  },
});
