import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreeen from "../screens/LoginScreeen";
import OrderQueryScreen from "../screens/OrderQueryScreen";
import OrderResponseScreen from "../screens/OrderResponseScreen";
import OrderStatus from "../screens/OrderStatus";

import HomeScreen from "../screens/HomeScreen";
import JoiningScreen from "../screens/JoiningScreen";
import JourneyProcessScreen from "../screens/JourneyProcessScreen";
import LocationScreen from "../screens/LocationScreen";
import MyTrips from "../screens/MyTrips";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import TandCScreen from "../screens/TandCScreen";
import TripComplete from "../screens/TripComplete";
import MapScreen from "../screens/MapScreen";
{
}

const AppNavigation = () => (
  <Stack.Navigator screenOPtions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreeen} />
    {/* <Stack.Screen name="Sign Up" component={SignUpScreen} /> */}
    <Stack.Screen name="Order1" component={OrderQueryScreen} />
    <Stack.Screen name="Order2" component={OrderResponseScreen} />
    <Stack.Screen name="Order3" component={OrderStatus} />
    <Stack.Screen name="Order4" component={JoiningScreen} />
    <Stack.Screen name="Order5" component={LocationScreen} />
    <Stack.Screen name="Order6" component={MyTrips} />
    <Stack.Screen name="Order7" component={RegisterScreen} />
    <Stack.Screen name="Order8" component={SplashScreen} />
    <Stack.Screen name="Order9" component={TandCScreen} />
    <Stack.Screen name="Order10" component={JourneyProcessScreen} />
    <Stack.Screen name="Order11" component={TripComplete} />
    <Stack.Screen name="Order12" component={HomeScreen} />
    <Stack.Screen name="Order13" component={MapScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
