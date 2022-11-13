import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default TitleSlam = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleTop}>SurSU</Text>
      <Text style={styles.titleBot}>SCIENCE SLAM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    // marginTop: 128,
  },

  titleTop: {
    color: "white",
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
  },

  titleBot: {
    color: "white",
    marginTop: 2,
    fontSize: 64,
    lineHeight: 64,
    fontFamily: "Inter-Black",
  },
});