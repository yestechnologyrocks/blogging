import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../shared/components/Input/Input";
import { ButtonComponent } from "../shared/components/Button/Button";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Before } from "./Before";
import { Dashboard } from "../Dashboard/Dashboard";

WebBrowser.maybeCompleteAuthSession();

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
function Login({ navigation }) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "579857280038-2h94f0c1ruprs6m8gtnpuqditair9064.apps.googleusercontent.com",
    iosClientId:
      "579857280038-rhlp0rbd4egk8umbtfcn4v6jipmovhq4.apps.googleusercontent.com",
    redirectUri: "http://localhost:19006",
    // Web id from google console
    webClientId:
      "579857280038-l0c2kcgbgv6tljr7fm9b1kkggnp0kio6.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  }
  function showUserInfo() {
    if (userInfo) {
      console.log(userInfo);
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>{userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }
  const submitForm = () => {
    Alert.alert("Form submitted");
    console.log("Form submitted");
  };

  return userInfo ? (
    <Dashboard />
  ) : (
    <Before
      accessToken={accessToken}
      submitForm={submitForm}
      getUserData={getUserData}
      promptAsync={promptAsync}
    />
  );
}

export default Login;
