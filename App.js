import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreeen from "./app/screens/LoginScreeen";
import SignUpScreen from "./app/screens/SignUpScreen";
import AppNavigation from "./app/navigation/AppNavigation";
import RegisterScreen from "./app/screens/RegisterScreen";
import SplashScreen from "./app/screens/SplashScreen";
import HomeScreen from "./app/screens/HomeScreen";
import OrderStatus from "./app/screens/OrderStatus";
import OrderQueryScreen from "./app/screens/OrderQueryScreen";
import OrderResponseScreen from "./app/screens/OrderResponseScreen";
import JourneyProcessScreen from "./app/screens/JourneyProcessScreen";
import TripComplete from "./app/screens/TripComplete";
import MyTrips from "./app/screens/MyTrips";
import LocationScreen from "./app/screens/LocationScreen";
import TandCScreen from "./app/screens/TandCScreen";
import JoiningScreen from "./app/screens/JoiningScreen";
import MapScreen from "./app/screens/MapScreen";
import Check from "./app/screens/Check";

export default function App() {
  return (
    // <Check />
    // <SignUpScreen />
    // <TripComplete />
    // <MyTrips />
    // <TandCScreen />
    // <JoiningScreen />
    // <LocationScreen />
    // <LoginScreeen />
    // <RegisterScreen />
    // <MapScreen />
    // <SplashScreen />
    // <HomeScreen />
    // <OrderStatus />
    // <OrderQueryScreen />
    // <OrderResponseScreen />
    // <JourneyProcessScreen />
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
