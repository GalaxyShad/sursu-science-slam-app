import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default Wrapper = ({children}) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#09091B",
    width: "100%",

    paddingHorizontal: 6,
    paddingTop: 32,
    paddingBottom: 16,
  },
});