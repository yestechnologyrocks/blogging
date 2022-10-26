import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header/Header";
import { Input } from "../shared/components/Input/Input";
import { ButtonComponent } from "../shared/components/Button/Button";
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  userInfo: {},
  profilePic: {
    height: 100,
    width: 100,
  },
});
export const Before = ({
  accessToken,
  submitForm,
  getUserData,
  promptAsync,
}) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
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
            <Button
              title={accessToken ? "Get User Data" : "Login Via Google"}
              onPress={
                accessToken
                  ? getUserData
                  : () => {
                      promptAsync({ showInRecents: true });
                    }
              }
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
