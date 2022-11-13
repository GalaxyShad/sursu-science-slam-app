import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { A } from "@expo/html-elements";

export default SpeakerCard = ({ lection, big }) => {
  if (!lection) return null;

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={{...styles.title, fontSize: big ? 18 : 16}}>{lection.title}</Text>
        <Text style={{...styles.description, fontSize: big ? 16 : 14}}>{lection.description}</Text>
      </View>
      <View style={styles.presentationBlock}>
        <A style={{...styles.presentation, fontSize: big ? 18 : 16}} href={lection.link}>
          Материалы доклада
        </A>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,

    backgroundColor: "#D9D9D91F",
    borderRadius: 10,

    flex: 1,
    flexDirection: "column",
  },

  textBlock: {
    flexDirection: "column",
  },

  title: {
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },

  description: {
    color: "#A5A5A5",
    fontFamily: "Inter-Light",
    fontSize: 14,
  },

  presentationBlock: {
    marginTop: 4,
  },

  presentation: {
    color: "#8F00FF",
    fontFamily: "Inter-Medium",
    fontSize: 14,
  },
});
