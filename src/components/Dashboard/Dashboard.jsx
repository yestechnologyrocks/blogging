import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  function showUserInfo(userData) {
    return (
      <View>
        <Image source={{ uri: userData.picture }} />
        <Text>{userData.name}</Text>
        <Text>{userData.email}</Text>
      </View>
    );
  }
  const userData = useSelector((state) => state.auth.userData);
  if (userData) {
    return showUserInfo(userData);
  } else {
    return <Text>Something went wrong</Text>;
  }
};
