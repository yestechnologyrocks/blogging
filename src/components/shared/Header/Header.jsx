import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
function LogoTitle() {
  return (
    <View>
      <Image
        // @ts-ignore
        source={require("./img/logo.png")}
        style={{
          width: 100,
          height: 100,
          marginTop: 150,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 40,
        }}
      />
    </View>
  );
}

export const Header = () => {
  return (
    <View>
      <LogoTitle />
    </View>
  );
};
