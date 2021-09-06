import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native";
import {
  Button,
  Headline,
  Subheading,
  TextInput,
} from "react-native-paper";
import constants from "../../constants";
import Color from "../../styles/colors/Color";
import styles from "./style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import checkString from "../../utils";
const LoginScreen: React.FC = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //handle sign up
  const handleLogin = () => {
    console.log("handle sign up");
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <View>
              <Ionicons name="chevron-back" size={24} color="#F6F6F6" />
            </View>
          </TouchableOpacity>
          <View>
            <Headline style={styles.header}>Login</Headline>
          </View>
          <View style={styles.body_container}>
            <TextInput
              style={styles.Input}
              onChangeText={(email) => setEmail(email)}
              label="Email"
              value={email}
              right={
                checkString(
                  email,
                  constants.MAX_EMAIL,
                  constants.REGEX_EMAIL
                ) ? (
                  <TextInput.Icon color="green" name="check" />
                ) : (
                  <View />
                )
              }
              theme={constants.themeInput}
            />
            <TextInput
              style={styles.Input}
              label="Password"
              onChangeText={(password) => setPassword(password)}
              right={
                checkString(password, constants.MAX_PASSWORD) ? (
                  <TextInput.Icon color="green" name="check" />
                ) : (
                  <View />
                )
              }
              secureTextEntry={true}
              theme={constants.themeInput}
            />
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: "right",
                    marginVertical: 10,
                    color: "#F6F6F6",
                    fontFamily: "Poppins-medium",
                  }}
                >
                  Forgot your password?
                  <AntDesign
                    name="arrowright"
                    size={16}
                    color={Color.$PrimaryDark}
                  />
                </Text>
              </View>
            </TouchableOpacity>

            <Button
              style={styles.Button}
              disabled={
                checkString(
                  email,
                  constants.MAX_EMAIL,
                  constants.REGEX_EMAIL
                ) && checkString(password, constants.MAX_PASSWORD)
                  ? false
                  : true
              }
              onPress={handleLogin}
              mode="contained"
              theme={{
                colors: {
                  placeholder: "white",
                  text: "white",
                  primary: Color.$Dark,
                  background: "#003489",
                },
              }}
            >
              <Text style={{ fontFamily: "Poppins-medium" }}>LOGIN</Text>
            </Button>
          </View>
        </View>
        <Subheading style={styles.lisence}>
          This app version is v1.1.0
        </Subheading>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
