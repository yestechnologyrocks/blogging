import * as React from "react";
import { View, Text, Button } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login/Login";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCustomFonts } from "./src/components/shared/hooks/useCustomFonts";
import Test from "./src/components/shared/components/Test";
import store from "./src/components/redux/store";
import { Provider } from "react-redux";
import { Dashboard } from "./src/components/Dashboard/Dashboard";
import { ErrorBoundary } from "./src/components/shared/ErrorHandling/ErrorBoundary";

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
  const fontsLoaded = useCustomFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <View onLayout={onLayoutRootView}>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen
                name="Test"
                component={Test}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
