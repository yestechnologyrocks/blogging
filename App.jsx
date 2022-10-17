// In App.js in a new project

import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import logo from "./assets/icon.png";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={logo} />;
}
const headerStyles = {
  fontFamily: "Link-Sans-Bold",
};
function App() {
  // const customFonts = {
  //   "Link-Sans-Light": require("./assets/fonts/LinkSans-Light.ttf"),
  // };

  // "Link-Sans-LightItalic": require("./assets/fonts/LinkSans-LightItalic.ttf"),
  // "Link-Sans-Bold": require("./assets/fonts/LinkSans-Bold.ttf"),

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle />,
            // headerTitleStyle: { fontFamily },
            headerTitleAlign: "center",
          }}
          name="Login"
        >
          {(props) => <Login />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
