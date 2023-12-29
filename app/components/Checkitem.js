import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

function Checkitem(props) {
  const [select, setSelect] = useState(false);
  return (
    <View>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity onPress={setSelect(!select)}></TouchableOpacity>
      </View>
    </View>
  );
}

export default Checkitem;
