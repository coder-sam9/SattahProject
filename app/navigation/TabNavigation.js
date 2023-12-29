import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppNavigation from "./AppNavigation";
import MyTrips from "../screens/MyTrips";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";
import CameraScreen from "../screens/CameraScreen";
const Tab = createBottomTabNavigator();

function TabNavigation(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="camera"
              color={focused ? "black" : "#8EC7DB"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={MyTrips}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../assets/drawable/trips.png")}
              style={{ width: 30, height: 25, overflow: "hidden" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={AppNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../assets/drawable/logo.png")}
              style={styles.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map Screen"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="map"
              color={focused ? "black" : "#8EC7DB"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exit"
        component={MyTrips}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../assets/drawable/exit.png")}
              style={styles.exitIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  exitIcon: { height: 30, width: 30 },
  home: {
    height: 60,
    width: 60,
    marginBottom: 25,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 35,
  },
});

export default TabNavigation;
