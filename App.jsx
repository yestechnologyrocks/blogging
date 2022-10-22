import * as React from "react";
import { View, Text, Button } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Custom profile header" })
        }
      />
      <Text style={{ fontFamily: "Cinzel-Black", fontSize: 20 }}>Welcome</Text>
      <Text style={{ fontFamily: "Cinzel-Regular", fontSize: 16 }}>
        Welcome
      </Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
function App() {
  const [fontsLoaded] = useFonts({
    // @ts-ignore
    "Cinzel-Black": require("./assets/fonts/Cinzel-Black.otf"),
    // @ts-ignore
    "Cinzel-Bold": require("./assets/fonts/Cinzel-Bold.otf"),
    // @ts-ignore
    "CinzelDecorative-Black": require("./assets/fonts/CinzelDecorative-Black.otf"),
    // @ts-ignore
    "CinzelDecorative-Bold": require("./assets/fonts/CinzelDecorative-Bold.otf"),
    // @ts-ignore
    "CinzelDecorative-Regular": require("./assets/fonts/CinzelDecorative-Regular.otf"),
    // @ts-ignore
    "Cinzel-Regular": require("./assets/fonts/Cinzel-Regular.otf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            // @ts-ignore
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
