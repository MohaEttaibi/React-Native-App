import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
// import * as Location from "expo-location";
import {
  requestPermissionsAsync,
  requestForegroundPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from "expo-location";
import Map from "../components/Map";
// import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  // console.log(isFocused);
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
  },
});
export default withNavigationFocus(TrackCreateScreen);
