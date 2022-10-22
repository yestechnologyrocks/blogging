import { Text, View, Button } from "react-native";
import React from "react";
import { Header } from "./shared/Header/Header";
function Login({ navigation }) {
  return (
    <View>
      <Header />
      <View style={{ paddingTop: 20, paddingBottom: 20 }}></View>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text>Welcome</Text>
      </View>
    </View>
  );
}

export default Login;
