import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import AppScreen from "../components/AppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Appcolors from "../config/Appcolors";
function LoginScreeen({ navigation }) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  return (
    <AppScreen>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "#ebb725",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="truck" size={60} color="black" />
        </View>
        <View>
          <Text
            style={{
              color: "#9e9e9e",
              height: 50,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Join Us
          </Text>
          <Text
            style={{
              color: Appcolors.primary,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Satthah
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <AppTextInput
            icon={"phone"}
            placeholder="05XXXXXXXX"
            onChangeText={setUser}
            widthh={"99%"}
            iconColor={Appcolors.primary}
          />

          <AppTextInput
            icon={"lock"}
            placeholder="Password"
            onChangeText={setPassword}
            widthh={"99%"}
            iconColor={Appcolors.primary}
          />
          <AppTextInput
            icon={"lock"}
            placeholder="Re-Enter Password"
            onChangeText={setRePassword}
            widthh={"99%"}
            iconColor={Appcolors.primary}
          />
        </View>
        <View style={{ width: "99%" }}>
          <AppButton
            title={"Next"}
            onPress={() => console.log(user + "\n" + password)}
          />
        </View>
        <View
          style={{
            // justifyContent: "flex-start",
            alignItems: "flex-start",
            // alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#9e9e9e",
              fontWeight: "700",
              paddingTop: 32,
              fontSize: 16,
            }}
          >
            Already Registered?
          </Text>
          <TouchableOpacity
            onPress={
              () => navigation.navigate("Login")
              // console.log("Sign up Screen")
            }
          >
            <Text
              style={{ color: Appcolors.primary, fontSize: 18, paddingTop: 30 }}
            >
              {" "}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title={"click"} onPress={() => navigation.navigate("Order1")} />
    </AppScreen>
  );
}

export default LoginScreeen;
