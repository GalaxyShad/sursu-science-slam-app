import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Text, Icon } from "@ui-kitten/components";

export default function Auth() {
  return (
    <View style={styles.container} >
        <View style={styles.headerContainer}>
          <Text category="h1" status="control">
            SURSU SCIENCE SLAM BATTLE
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Sign in to your account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status="control"
            placeholder="Email"
            size="large"
            // accessoryLeft={PersonIcon}
            // value={email}
            // onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            status="control"
            placeholder="Password"
            size="large"
            // accessoryRight={renderPasswordIcon}
            // value={password}
            // secureTextEntry={!passwordVisible}
            // onChangeText={setPassword}
          />
        </View>
        <Button
          style={styles.signInButton}
          status="control"
          size="giant"
          // onPress={onSignInButtonPress}
        >
          SIGN IN
        </Button>
        <Button
          style={styles.signUpButton}
          appearance="ghost"
          status="control"
          // onPress={onSignUpButtonPress}
        >
          Don't have an account? Sign Up
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05142b',
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
