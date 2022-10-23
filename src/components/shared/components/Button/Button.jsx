import React from "react";
import { Button } from "react-native";

export const ButtonComponent = ({ title, event }) => {
  return <Button title={title} onPress={event} />;
};
