import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import BaseURL from "./BaseURL";

const Login = async (values) => {
  console.log("Values in Api Call");
  axios({
    method: "get",
    url:
      "http://www.uatapi.peopleenterprises.in/api/Account/TowerLogin?MobileNo=" +
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
      setResponseLog(responseLog);
      Alert.alert("Check Again", responseLog.data.Message);
      console.log(responseLog);

      if (responseLog.data.isSuccess) {
        Alert.alert("Congrats", responseLog.data.Message + "🎉");
      }
      console.log("responseLog", JSON.stringify(responseLog));
      // alert("response", response);
    })
    .catch(function (error) {
      console.log("error:", error);
    });
};
const Register = (values) => {
  const [response1, setResponse1] = useState();
  axios
    .post("http://3.6.215.253/api/Account/RegisterTower", values, {
      headers: {
        APICODE: "123456789",
        Culture: "en",
        token: "",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response1) => {
      console.log("====================================");
      console.log(response1);
      alert("Response" + response1);
      console.log("====================================");
      setResponse1(response1);
    })
    .catch((error) => {
      console.log(error);
    });
  return response1;
};
export default { Login, Register };

// export default { Login, Register };
