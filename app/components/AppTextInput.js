import React from "react";
import { TextInput, View } from "react-native";

function AppTextInput({
  widthh,

  iconColor,
  ImageUR,
  icon,
  ...otherProps
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        // borderRadius: 20,
        backgroundColor: "#F6F7FB",

        padding: 15,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        width: "100%",
      }}
    >
      <TextInput
        style={{
          color: "black",
          fontSize: 10,
          paddingLeft: 20,
          // // paddingRight: "90%",
          width: "100%",
          fontFamily: "Roboto",
          fontWeight: "bold",

          backgroundColor: "#F6F7FB",
        }}
        placeholderTextColor="#707070"
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;
