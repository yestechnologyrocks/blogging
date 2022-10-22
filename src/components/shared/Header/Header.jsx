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
          marginTop: 0,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
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
