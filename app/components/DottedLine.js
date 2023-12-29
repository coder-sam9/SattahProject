import React from "react";
import { View } from "react-native";

function DottedLine({ LiHeight }) {
  return (
    <View
      style={{
        borderRadius: 1,
        borderWidth: 0.5,
        // height: 90,
        height: LiHeight,
        marginRight: 46,
        width: 1,
        borderStyle: "dashed",
        borderColor: "black",
      }}
    ></View>
  );
}

export default DottedLine;
