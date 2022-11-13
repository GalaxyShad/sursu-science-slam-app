import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default CustomButton = ({secondary, children, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>  
      <View
        style={{
          ...styles.container,
          ...styles[secondary ? "secondary" : "primary"],
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: 68,
    borderRadius: 16,

    textAlign: 'center',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 12
  },

  primary: {
    backgroundColor: '#8C35FB',
  },

  secondary: {
    backgroundColor: '#FFFFFF42',
    borderColor: '#FFFFFF80',
    // borderStyle: 'inset',
    borderWidth: 2,
  },

  text: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 22,
  }
});