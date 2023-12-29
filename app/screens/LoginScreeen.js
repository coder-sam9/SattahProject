import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  Button,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import "../resource/i18n";
import { useTranslation } from "react-i18next";
import Appcolors from "../config/Appcolors";
import ApiCalls from "../APIs/ApiCalls";
import { Formik } from "formik";

import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

function LoginScreeen({ navigation }) {
  const [show, setshow] = useState(true);
  const [timerCount, setTimer] = useState(60);
  // const timer = () => {
  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       setTimer((lastTimerCount) => {
  //         lastTimerCount <= 1 && clearInterval(interval);
  //         return lastTimerCount - 1;
  //       });
  //     }, 1000); //each count lasts for a second
  //     //cleanup the interval on complete
  //     return () => clearInterval(interval);
  //   }, []);
  //   return <Text>{timerCount}</Text>;
  // };

  const [indicator, setIndicator] = useState(false);
  const [network, setNetwork] = useState();
  const check = async () => {
    const response1 = await NetInfo.fetch();

    // console.log(response1.isConnected);
    setNetwork(response1.isConnected);
    return network;
  };
  check();
  const Login = async (values) => {
    setIndicator(true);
    console.log("Values in Api Call");
    axios({
      method: "get",
      url:
        "http://15.184.224.229/api/Account/TowerLogin?MobileNo=" +
        values.MobileNo +
        "&Password=" +
        values.Password +
        "&Lat=" +
        values.Lat +
        "&Longitude=" +
        values.Longitude +
        "&DeviceToken=" +
        values.DeviceToken +
        "&AppVersion=" +
        values.AppVersion,

      headers: {
        APICODE: "123456789",
        Culture: "en",
        token: "",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((responseLog) => {
        // setResponseLog(responseLog);
        Alert.alert("Message", responseLog.data.Message);
        console.log(responseLog);
        setIndicator(false);

        if (responseLog.data.isSuccess) {
          // alert(responseLog.data.Message);
        }
        console.log("responseLog", JSON.stringify(responseLog));
        // alert("response", response);
      })
      .catch(function (error) {
        console.log("error:", error);
        alert(error);
        setIndicator(false);
      });
  };

  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState("English");

  const changeLanguage = (currentLanguage) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [language, setLanguages] = useState("ENG");

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFFFFF",
        // backgroundColor: "blue",
        width: "100%",
        paddingHorizontal: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // marginTop: 32,
        flex: 1,
      }}
    >
      <StatusBar
      //   barStyle={{ backgroundColor: "black" }}
      />
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
          // console.log(values);

          // const response = await check();

          // if (response) {
          Login(values);
          // } else Alert.alert("Please check network connectivity");
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
            <View
              style={{
                alignSelf: "flex-start",

                paddingBottom: 90,
                paddingLeft: 12,
              }}
            >
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
            {indicator ? (
              <ActivityIndicator size={"large"} color={"black"} />
            ) : (
              <></>
            )}

            <View
              style={{
                flexDirection: "row",
                borderRadius: 13,
                marginVertical: 22,
                // paddingHorizontal: 20,
                backgroundColor: Appcolors.appGrey,
                justifyContent: "space-between",
                // flex: 1,
                alignItems: "center",

                width: "100%",
              }}
            >
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
                  style={{
                    color: "black",
                    fontSize: 10,
                    paddingLeft: 20,

                    fontFamily: "Roboto",
                    fontWeight: "bold",

                    backgroundColor: "#F6F7FB",
                    width: "90%",
                  }}
                  placeholderTextColor="#707070"
                  placeholder="Mobile"
                  onChangeText={handleChange("MobileNo")}
                />
                {/* </View> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderRadius: 13,
                marginVertical: 22,
                // paddingHorizontal: 20,
                backgroundColor: Appcolors.appGrey,
                justifyContent: "space-between",
                // flex: 1,
                alignItems: "center",

                width: "100%",
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
                  style={{
                    color: "black",
                    fontSize: 10,
                    // paddingLeft: 20,

                    fontFamily: "Roboto",
                    fontWeight: "bold",

                    backgroundColor: "#F6F7FB",
                    width: "80%",
                  }}
                  onChangeText={handleChange("Password")}
                  placeholderTextColor="#707070"
                  placeholder="Password"
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
            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                {t("submit")}
              </Text>
            </TouchableOpacity>
            {/* <Button title={"click"} onPress={() => setTimer(90)} />
            <Button title={"click"} onPress={() => setshow(false)} />
             <Text>{timerCount}</Text> 

            <Text>{timer()}</Text>*/}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  submit: {
    backgroundColor: "#009F5C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    width: "100%",
  },
});

export default LoginScreeen;
