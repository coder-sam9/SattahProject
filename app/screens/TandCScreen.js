import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

import Appcolors from "../config/Appcolors";

function TandCScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        // alignItems: "center",
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
        width: "100%",
        paddingBottom: 30,
      }}
    >
      <StatusBar />
      <View style={{ paddingTop: 40 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            color: "#F6C334",
            marginBottom: 30,
          }}
        >
          Sattha
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "#F6C334",
            marginRight: 10,
          }}
        >
          Terms and Conditions
        </Text>
        <Text
          style={{
            // fontWeight: "bold",
            fontSize: 18,
            color: "#555555",
            marginBottom: 10,
            fontWeight: "600",
            // marginRight: 10,marginBottom:10,
          }}
        >
          service delivery
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#B2B2B2",
            marginRight: 40,

            marginTop: 20,
            // marginLeft: 20,
          }}
        >
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العر
        </Text>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2C845C",
            borderRadius: 12,
            paddingTop: 5,
            paddingBottom: 8,
            paddingHorizontal: 20,
            marginBottom: 10,
            width: 130,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Appcolors.appYellow,
            marginTop: 20,
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 21 }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // alignSelf: "center",
            flexDirection: "row",
            // marginLeft: 40,
            // marginRight: 40,
          }}
        >
          <Text
            style={{
              color: "#9e9e9e",
              fontWeight: "700",
              paddingTop: 32,
              fontSize: 14,
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: Appcolors.appYellow,
                fontSize: 14,
                paddingTop: 30,
              }}
            >
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title={"click"} onPress={() => navigation.navigate("Order10")} />
    </SafeAreaView>
  );
}

export default TandCScreen;
