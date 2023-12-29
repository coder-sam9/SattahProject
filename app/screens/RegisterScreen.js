import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import Appcolors from "../config/Appcolors";
import { Formik } from "formik";
import ApiCalls from "../APIs/ApiCalls";
import axios from "axios";

import NetInfo from "@react-native-community/netinfo";
function RegisterScreen({ navigation }) {
  const [indicator, setIndicator] = useState(false);
  const [network, setNetwork] = useState();
  const check = async () => {
    const response1 = await NetInfo.fetch();

    console.log(response1.isConnected);
    setNetwork(response1.isConnected);
    return network;
  };
  check();
  const Login = async (values) => {
    var response = await ApiCalls.Login(values);
    console.log(response);
    console.log(response.data.Data.TowerId);
    console.log("====================================");

    console.log(response);
  };

  // const Reg = async (values) => {
  //   console.log(values);
  //   axios({
  //     method: "get",
  //     url:
  //       "http://3.6.215.253/api/Account/TowerLogin?MobileNo=" +
  //       values.MobileNo +
  //       "&Password=" +
  //       values.Password +
  //       "&Lat=" +
  //       values.Lat +
  //       "&Longitude=" +
  //       values.Longitude +
  //       "&DeviceToken=" +
  //       values.DeviceToken +
  //       "&AppVersion=" +
  //       values.AppVersion,

  //     headers: {
  //       APICODE: "123456789",
  //       Culture: "en",
  //       token: "",
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       if (response.data.isSuccess) {
  //         Alert.alert("Congrats", response.data.Message + "🎉");
  //       }
  //       console.log("response", JSON.stringify(response));
  //       // alert("response", response);
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // };
  return (
    // <AppScreen style={{ flex: 1 }}>
    <View style={styles.container}>
      <Formik
        initialValues={{
          MobileNo: "",
          Password: "",
          Lat: "24.7580822",
          Longitude: "46.808222",
          DeviceToken: "",
          AppVersion: "1.11",
          RePassword: "",
        }}
        onSubmit={async (values) => {
          console.log("handkesubmit");
          console.log(values);
          if (values.Password === values.RePassword) {
            const response = await check();

            if (response) {
              Login(values);
            } else Alert.alert("Please check network connectivity");
          } else Alert.alert("please check the Password");
        }}
      >
        {({
          handleChange,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <StatusBar
            //   barStyle={{ backgroundColor: "black" }}
            />

            <View
              style={{
                alignSelf: "flex-start",
                marginTop: 132,
                paddingLeft: 12,
              }}
            >
              {indicator ? (
                <ActivityIndicator size={60} color={"green"} />
              ) : (
                <></>
              )}
              <Text style={{ fontSize: 20, color: "#7D7D7D" }}>Join Us </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "#F6C334",
                }}
              >
                Sattha
              </Text>
            </View>

            <View style={styles.mobile}>
              <View
                style={{
                  // justifyContent: "space-between",
                  alignItems: "stretch",
                  paddingLeft: 5,
                  height: 65,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    alignSelf: "center",
                    justifyContent: "center",

                    // borderRadius: 35,
                  }}
                  source={require("../assets/drawable/phone.png")}
                ></Image>
                {/* <View> */}
                <TextInput
                  style={styles.mobileText}
                  placeholderTextColor="#707070"
                  placeholder="mobile"
                  onChangeText={handleChange("MobileNo")}
                  value={values.MobileNo}
                />
                {/* </View> */}
              </View>
            </View>
            <View style={styles.mobile}>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  paddingLeft: 5,
                  height: 65,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    alignSelf: "center",
                    justifyContent: "center",

                    // borderRadius: 35,
                  }}
                  source={require("../assets/drawable/password.png")}
                ></Image>
                {/* <View> */}
                <TextInput
                  style={styles.passwrd}
                  placeholderTextColor="#707070"
                  placeholder="Password"
                  onChangeText={handleChange("RePassword")}
                  value={values.RePassword}
                />
                {/* </View> */}
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                  source={require("../assets/drawable/showpassword.png")}
                ></Image>
              </View>
            </View>
            {/* </View> */}
            <View
              style={{
                flexDirection: "row",
                borderRadius: 13,
                marginVertical: 22,
                backgroundColor: Appcolors.appGrey,
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                // paddingHorizontal: 20,
                // flex: 1,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  paddingLeft: 5,
                  height: 65,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    alignSelf: "center",
                    justifyContent: "center",

                    // borderRadius: 35,
                  }}
                  source={require("../assets/drawable/password.png")}
                ></Image>
                {/* <View> */}
                <TextInput
                  style={styles.passwrd}
                  placeholderTextColor="#707070"
                  placeholder="Re- Enter Password"
                  onChangeText={handleChange("Password")}
                  value={values.Password}
                />
                {/* </View> */}
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                  source={require("../assets/drawable/showpassword.png")}
                ></Image>
              </View>
            </View>
            <TouchableOpacity style={styles.buttn} onPress={handleSubmit}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Next
              </Text>
            </TouchableOpacity>
            <Button
              title={"click"}
              onPress={() => navigation.navigate("Order8")}
            />
          </>
        )}
      </Formik>
    </View>
    // </AppScreen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 30,
    flex: 1,

    // backgroundColor: "blue",
    backgroundColor: "#ffffff",
    paddingLeft: 22,
    paddingBottom: 30,
    paddingRight: 25,
    // alignContent: "space-between",
  },
  buttn: {
    backgroundColor: "#009F5C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 20,
  },
  mobile: {
    flexDirection: "row",
    borderRadius: 13,
    // marginVertical: 22,
    marginBottom: 22,
    // paddingHorizontal: 20,
    backgroundColor: Appcolors.appGrey,
    justifyContent: "space-between",
    // flex: 1,
    alignItems: "center",

    width: "100%",
  },
  passwrd: {
    color: "black",
    fontSize: 10,
    // paddingLeft: 20,

    fontFamily: "Roboto",
    fontWeight: "bold",

    backgroundColor: "#F6F7FB",
    width: "80%",
  },
  mobileText: {
    color: "black",
    fontSize: 10,
    paddingLeft: 20,

    fontFamily: "Roboto",
    fontWeight: "bold",

    backgroundColor: "#F6F7FB",
    width: "90%",
  },
});
