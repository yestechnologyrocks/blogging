import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Header } from "./shared/Header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "./shared/components/Input/Input";
import { ButtonComponent } from "./shared/components/Button/Button";
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});
function Login({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const submitForm = () => {
    Alert.alert("Form submitted");
    console.log("Form submitted");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ paddingTop: 20, paddingBottom: 20 }}></View>
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <Text style={{ fontFamily: "FiraSans-SemiBold", marginBottom: 10 }}>
              Welcome!
            </Text>
            <Input value={email} placeholder="Email" event={onChangeEmail} />
            <Input
              value={email}
              placeholder="Password"
              event={onChangePassword}
            />
            <ButtonComponent title="Login" event={submitForm} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

export default Login;
