import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 50,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  inputView: {},
});
export const Input = ({ value, placeholder, event }) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        onChangeText={event}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};
