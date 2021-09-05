import React, { useState } from "react";
import { View, Text} from "react-native";
import { Button, Headline, HelperText, Subheading, TextInput } from "react-native-paper";
import constants from "../../constants";
import Color from "../../styles/colors/Color";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons'
import checkString from "../../utils";
const SignUpScreen: React.FC = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //handle sign up
  const handleSignUp = () => {
    console.log("handle sign up");
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Headline style={styles.header}>Sign Up</Headline>
        </View>
        <View style={styles.body_container}>
          <TextInput
            style={styles.Input}
            label="Name"
            onChangeText={(name) => setName(name)}
            right={
              checkString(name, constants.MAX_NAME) ? (
                <TextInput.Icon color="green" name="check" />
              ) : (
                <View />
              )
            }
            theme={constants.themeInput}
          />
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
          <Text
            style={{
              textAlign: "right",
              marginVertical: 10,
              color: "#F6F6F6",
            }}
          >
            Already have an account?
            <AntDesign name="arrowright" size={16} color={Color.$PrimaryDark} />
          </Text>

          <Button
            style={styles.Button}
            disabled={
              checkString(email, constants.MAX_EMAIL, constants.REGEX_EMAIL) &&
              checkString(password, constants.MAX_PASSWORD) &&
              checkString(name, constants.MAX_NAME)
                ? false
                : true
            }
            onPress={handleSignUp}
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
            SIGN UP
          </Button>
        </View>
      </View>
      <Subheading style={styles.lisence}>This app version is v1.1.0</Subheading>
    </View>
  );
};
export default SignUpScreen;