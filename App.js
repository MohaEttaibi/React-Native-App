// import React from "react";
// import { Text, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Screen } from "./app/components/Screen";
// import { Button } from "./app/components/Button";
// import AuthNavigator from "./app/navigation/AuthNavigator";
// import AppNavigator from "./app/navigation/AppNavigator";
// import navigationTheme from "./app/navigation/navigationTheme";

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <View>
//     <Text>Tweets</Text>
//     {/* <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetsDetails")}
//     /> */}
//     <Link />
//   </View>
// );

// const TweetsDetails = ({ route }) => (
//   // useRoute
//   <View>
//     <Text>Tweets Details {route.params.id}</Text>
//   </View>
// );
/**/

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white",
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="TweetsDetails"
//       component={TweetsDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

/**/
// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "tomato",
//       activeTintColor: "white",
//       inactiveBackgroundColor: "#eee",
//       inactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={Tweets}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>;
// };
/**/
/**/
// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <StackNavigator /> */}
//       <TabNavigator />
//     </NavigationContainer>
//   );
// }
/**/

// export default function App() {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome } from "@expo/vector-icons";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import LoginScreen from "./src/screens/LoginScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    ResolveAuth: ResolveAuthScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const TrackApp = createAppContainer(switchNavigator);

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <TrackApp
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
