import React from "react";
import { TextInput, View } from "react-native";

function SingleTextInput({ iconColor, ImageUR, icon, ...otherProps }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#F6F7FB",
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",

        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        // marginVertical: 5,
      }}
    >
      <TextInput
        style={{
          color: "black",
          fontSize: 10,
          // paddingLeft: 20,
          // // paddingRight: "90%",
          //   width: "100%",
          fontFamily: "Roboto",
          fontWeight: "bold",
          // width: "100%",

          backgroundColor: "#F6F7FB",
        }}
        placeholderTextColor="#C3C3C6"
        {...otherProps}
      />
    </View>
  );
}

export default SingleTextInput;
