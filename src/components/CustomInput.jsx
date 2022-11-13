import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView, Text } from "react-native";

export default CustomInput = ({
  children,
  label,
  value,
  keyboardType,
  onChangeText,
}) => {
  return (
    <>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#FFFFFF40'}

        onChangeText={onChangeText}
        value={value}
        placeholder={children}
        keyboardType={keyboardType}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF1A",
    borderColor: "#FFFFFF3F",
    borderWidth: 2,
    borderRadius: 12,
    height: 53,

    fontFamily: "Inter-Regular",
    color: 'white',
    paddingLeft: 16,
    fontSize: 16,

    marginBottom: 16,
    // flex: 1,
  },

  label: {
    fontFamily: "Inter-SemiBold",
    color: "white",
    fontSize: 16,
    marginBottom: 4,
  },
});
