import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import SingleTextInput from "../components/SingleTextInput";
import Appcolors from "../config/Appcolors";
import { Formik } from "formik";
import CheckBox from "react-native-check-box";
import axios from "axios";
import ApiCalls from "../APIs/ApiCalls";
import NetInfo from "@react-native-community/netinfo";
function JoiningScreen({ navigation }) {
  const [indicator, setIndicator] = useState(false);
  const [network, setNetwork] = useState();
  const check = async () => {
    const response1 = await NetInfo.fetch();

    console.log(response1.isConnected);
    setNetwork(response1.isConnected);
    return network;
  };
  check();
  const Register = (values) => {
    var response = ApiCalls.Register(values);
    console.log(response);
    console.log(response.data.Data.TowerId);
    console.log("====================================");

    console.log(response);
  };
  // const[cities,setCities]= useState();\
  const [truck, setTruck] = useState(false);
  const [truck1, setTruck2] = useState(false);
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [cityListsVisible, setCityListVisible] = useState(false);
  const [cityName, setCityName] = useState("Choose City");
  const cities = [
    {
      id: 1,
      naame: "Dammah",
    },
    {
      id: 2,
      naame: "Riyadh",
    },
    {
      id: 3,
      naame: "Jeddha",
    },
    {
      id: 4,
      naame: "City4",
    },
  ];
  const Separator = () => {
    return (
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 2,
        }}
      ></View>
    );
  };
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        // bottom: 10,
        backgroundColor: "white",
      }}
    >
      <Formik
        initialValues={{
          towerId: 0,
          firstName: "",
          middelName: "",
          lastName: "",
          mobileNo: "0537080773",
          password: "123",
          bankName: "",
          iban: "",
          truckType: "Hydraulic Truck",
          document: "",
          licensePlate: "BHZ3877",
          isActive: true,
          isDelete: false,

          Lat: "24.7580822",
          Long: "46.808222",
          createdDate: "0001-01-01T00:00:00",
          createdBy: 0,
          updatedDate: "",
          updatedBy: 0,
          otp: "",
          cityId: 0,
          companyId: 0,
          serviceProviderId: 0,
          companyName: "",
          providerName: "",
          cityName: "",
          isServiceCoverage: false,
          profilePhoto: "",
          documentIdProof: "",
          documentLicense: "",
          idProof: "",
          license: "",
          photo: "",
          appVersion: 1.11,
          registerFrom: "",
          istemara: "",
          vehiclePic: "",
          documentIstemara: "",
          documentVehiclePic: "",
        }}
        onSubmit={async (values) => {
          console.log("handlesubmit");
          console.log(values);
          // if (values.Password === values.RePassword) {
          const response = await check();

          if (response) {
            Register(values);
          } else Alert.alert("Please check network connectivity");
          // } else Alert.alert("please check the Password");
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
            <StatusBar />
            <Text
              style={{
                color: "#7D7D7D",
                fontSize: 28,
                paddingLeft: 5,
                marginTop: 50,
              }}
            >
              Join Us
            </Text>
            <Text
              style={{
                color: Appcolors.appYellow,
                fontWeight: "700",
                fontSize: 28,
                paddingLeft: 5,
              }}
            >
              Sattha
            </Text>
            <Text style={{ color: "#7D7D7D", fontSize: 20, paddingLeft: 10 }}>
              Basic Information
            </Text>
            <Text style={{ color: "#7D7D7D", fontSize: 16 }}>
              It must match the bank information
            </Text>
            <AppTextInput
              placeholder="First Name"
              onChangeText={handleChange("firstName")}
            />
            <AppTextInput
              placeholder="Middle Name"
              onChangeText={handleChange("middleName")}
            />
            <AppTextInput
              placeholder="Last Name"
              onChangeText={handleChange("lastName")}
            />
            <Text style={{ color: "#7D7D7D", fontSize: 20 }}>Bank Details</Text>
            <AppTextInput
              placeholder="Full Name"
              onChangeText={handleChange("fullName")}
            />
            <AppTextInput
              placeholder="Bank Name"
              onChangeText={handleChange("bankName")}
            />
            <AppTextInput
              placeholder="IBAN                  SA"
              onChangeText={handleChange("iban")}
            />
            {indicator ? (
              <ActivityIndicator size={60} color={"green"} />
            ) : (
              <></>
            )}
            <TouchableOpacity
              onPress={() => setCityListVisible(!cityListsVisible)}
              style={{
                justifyContent: "space-between",
                padding: 10,
                width: "100%",
                flexDirection: "row",
                backgroundColor: Appcolors.appGrey,
                borderRadius: 13,
              }}
            >
              <Text style={{ color: "#C3C3C6", fontWeight: "700" }}>
                {cityName}
              </Text>
              <Image
                source={require("../assets/dropDown.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            {cityListsVisible ? (
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/upArrow.png")}
                  style={{ width: 50, height: 50 }}
                />
                <View
                  style={{
                    backgroundColor: Appcolors.appGrey,
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <FlatList
                    data={cities}
                    keyExtractor={(cities) => cities.id}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          width: "100%",
                          paddingHorizontal: 120,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setCityName(item.naame);
                            setCityListVisible(false);
                          }}
                        >
                          <Text
                            style={{
                              width: "100%",
                              color: "#7D7D7D",
                              fontSize: 16,
                            }}
                          >
                            {item.naame}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    ItemSeparatorComponent={Separator}
                  />
                </View>
              </View>
            ) : (
              <></>
            )}

            <Text style={{ color: "#7D7D7D", fontSize: 20 }}>
              Vehicle Details
            </Text>
            <Text style={{ color: "#7D7D7D", fontSize: 14 }}>
              License plate
            </Text>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-evenly",
                // justifyContent: "space-around",
                width: "100%",
              }}
            >
              {/* <SingleTextInput
          placeholder={word ? word : "H"}
          onChangeText={() => setWord()}
        /> */}
              <View style={{ width: "12%", marginRight: 1 }}>
                <SingleTextInput placeholder="H" />
              </View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="S" />
              </View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="F" />
              </View>

              {/* <SingleTextInput placeholder="F" /> */}
              <View
                style={{ backgroundColor: "#E3E3E3", width: 2, height: "100%" }}
              ></View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="3" />
              </View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="8" />
              </View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="7" />
              </View>
              <View style={{ width: "12%", marginHorizontal: 5 }}>
                <SingleTextInput placeholder="7" />
              </View>
              {/* <SingleTextInput placeholder="3" />
        <SingleTextInput placeholder="8" /> */}
              {/* <SingleTextInput placeholder="7" />
        <SingleTextInput placeholder="7" /> */}
            </View>
            <Text style={{ color: "#7D7D7D", fontSize: 14, marginTop: 20 }}>
              Truck Type
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  setTruck(!truck);
                }}
                isChecked={truck}
                rightText={"Hydraulic Truck"}
              />
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  setTruck2(!truck1);
                }}
                isChecked={truck1}
                rightText={"Normal Truck"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  setService1(!service1);
                }}
                isChecked={service1}
                rightText={"Inside the City"}
              />
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  setService2(!service2);
                }}
                isChecked={service2}
                rightText={"Between the city"}
              />
            </View>

            <Text
              style={{
                color: "#7D7D7D",
                fontSize: 20,
                marginTop: 20,
                marginBottom: 30,
              }}
            >
              Upload Documents
            </Text>
            <View style={styles.dashed}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginLeft: 20 }}
              >
                Photo
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/drawable/cameraPic.png")}
                  style={{ width: 50, height: 50, paddingRight: 10 }}
                />
                <Image
                  source={require("../assets/drawable/upload.png")}
                  style={{
                    width: 70,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
              </View>
            </View>
            <View style={styles.dashed}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginLeft: 20 }}
              >
                Identification
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/drawable/cameraPic.png")}
                  style={{ width: 50, height: 50, paddingRight: 10 }}
                />
                <Image
                  source={require("../assets/drawable/upload.png")}
                  style={{
                    width: 70,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
              </View>
            </View>
            <View style={styles.dashed}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginLeft: 20 }}
              >
                License
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/drawable/cameraPic.png")}
                  style={{ width: 50, height: 50, paddingRight: 10 }}
                />
                <Image
                  source={require("../assets/drawable/upload.png")}
                  style={{
                    width: 70,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
              </View>
            </View>
            <View style={styles.dashed}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginLeft: 20 }}
              >
                Istemara
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/drawable/cameraPic.png")}
                  style={{ width: 50, height: 50, paddingRight: 10 }}
                />
                <Image
                  source={require("../assets/drawable/upload.png")}
                  style={{
                    width: 70,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
              </View>
            </View>
            <View style={styles.dashed}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", marginLeft: 20 }}
              >
                Vehicle Pic
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/drawable/cameraPic.png")}
                  style={{ width: 50, height: 50, paddingRight: 10 }}
                />
                <Image
                  source={require("../assets/drawable/upload.png")}
                  style={{
                    width: 70,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#009F5C",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 40,
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
              }}
              onPress={handleSubmit}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Submit
              </Text>
            </TouchableOpacity>
            <Button
              title={"click"}
              onPress={() => navigation.navigate("Order5")}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  dashed: {
    borderColor: "#F6C334",
    borderRadius: 1,
    borderWidth: 2.5,
    borderStyle: "dashed",
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
  },
});

export default JoiningScreen;
