import {
  View,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import {useEffect, useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export default function LoginScreen(props) {
  const [text, setText] = useState("enter your name");
  const [pass, setPass] = useState("enter password");
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios({
      method: "GET",
      url: "http://172.16.201.84:2403/api/v1/flowers/625cda9f4e99a47d008a8f1b",
    })
      .then((res) => {
        if (res) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const gotoHome = () => {
    props.navigation.navigate("HOME");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/image1.png")}
          style={{
            width: screenWidth,
            height: 0.5 * screenHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="contain"
          imageStyle={{ opacity: 0.5 }}
        >
          <Text style={styles.logo}>LOGIN</Text>
        </ImageBackground>

        <View style={styles.loginArea}>
          <Text
            style={{
              color: "#FEB139",
              fontSize: 30,
              paddingLeft: 40,
              paddingTop: 20,
              fontWeight: "bold",
            }}
          >
            Hello
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#FEB139",
              fontSize: 18,
              paddingLeft: 42,
            }}
          >
            I am lazy
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            onChangeText={setText}
          >
            User
          </TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={setPass}
          />
          <TouchableOpacity onPress={gotoHome}>
            <View style={styles.btn}>
              <Text>Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginArea: {
    flex: 1,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: "#247881",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#95D1CC",
    borderRadius: 8,
    paddingLeft: 16,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#fff",
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 30,
    borderRadius: 4,
  },
});
