import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Formik } from "formik";
import axios from "axios";

function Check(props) {
  const [indicator, setIndicator] = useState(false);

  const creeate = async (values) => {
    setIndicator(true);
    console.log("Create", indicator);
    console.log("Values in Api Call");
    axios({
      method: "get",
      url: " http://127.0.0.1:8000/api/createcustomer/",
      values,
    })
      .then((responseLog) => {
        console.log(responseLog);
        setIndicator(false);
        console.log("responseLog", JSON.stringify(responseLog));
      })
      .catch(function (error) {
        console.log("error:", error);
        alert(error);
        setIndicator(false);
      });
  };
  const reead = async (values) => {
    setIndicator(true);
    console.log("Read", indicator);
    console.log("Values in Api Call");
    axios({
      method: "get",
      url: " http://127.0.0.1:8000/api/readcustomer/",
      values,
    })
      .then((responseLog) => {
        console.log(responseLog);
        setIndicator(false);
        console.log("responseLog", JSON.stringify(responseLog));
      })
      .catch(function (error) {
        console.log("error:", error);
        alert(error);
        setIndicator(false);
      });
  };
  const updaate = async (values) => {
    setIndicator(true);
    console.log("Update", indicator);
    console.log("Values in Api Call");
    axios({
      method: "get",
      url: " http://127.0.0.1:8000/api/updatecustomer/",
      values,
    })
      .then((responseLog) => {
        console.log(responseLog);
        setIndicator(false);
        console.log("responseLog", JSON.stringify(responseLog));
      })
      .catch(function (error) {
        console.log("error:", error);
        alert(error);
        setIndicator(false);
      });
  };
  const delate = async (values) => {
    setIndicator(true);
    console.log("delete", indicator);
    console.log("Values in Api Call");
    axios({
      method: "get",
      url: " http://127.0.0.1:8000/api/deletecustomer/",
      values,
    })
      .then((responseLog) => {
        console.log(responseLog);
        setIndicator(false);
        console.log("responseLog", JSON.stringify(responseLog));
      })
      .catch(function (error) {
        console.log("error:", error);
        alert(error);
        setIndicator(false);
      });
  };
  return (
    <SafeAreaView style={{ padding: 30, backgroundColor: "#abababa" }}>
      <StatusBar />
      <Formik
        initialValues={{
          MobileNo: "",
          Password: "",
          Name: "",
        }}
        onSubmit={async (values) => {
          console.log("handkesubmit");

          creeate(values);
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
            {indicator ? (
              <ActivityIndicator size={"large"} color={"black"} />
            ) : (
              <></>
            )}

            <View style={styles.viw}>
              {/* <View> */}
              <TextInput
                style={styles.txt}
                placeholderTextColor="#707070"
                placeholder="Name"
                onChangeText={handleChange("Name")}
              />
              {/* </View> */}
            </View>
            <View style={styles.viw}>
              {/* <View> */}
              <TextInput
                style={styles.txt}
                placeholderTextColor="#707070"
                placeholder="Mobile"
                onChangeText={handleChange("MobileNo")}
              />
              {/* </View> */}
            </View>
            <View style={styles.viw}>
              {/* <View> */}
              <TextInput
                style={styles.txt}
                placeholderTextColor="#707070"
                placeholder="Password"
                onChangeText={handleChange("Password")}
              />
              {/* </View> */}
            </View>
            <TouchableOpacity
              style={styles.bttn}
              onPress={() => creeate(values)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Create
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bttn} onPress={() => reead(values)}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Read
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bttn}
              onPress={() => updaate(values)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bttn}
              onPress={() => delate(values)}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Check;
const styles = StyleSheet.create({
  txt: {
    color: "black",
    fontSize: 10,
    paddingLeft: 20,

    fontFamily: "Roboto",
    fontWeight: "bold",

    backgroundColor: "#F6F7FB",
    width: "90%",
  },
  viw: {
    // justifyContent: "space-between",
    alignItems: "stretch",

    marginTop: 10,
    marginBottom: 10,
    height: 65,
    width: "100%",
    flexDirection: "row",
  },
  bttn: {
    backgroundColor: "#009F5C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    width: "100%",
  },
});
