import React from "react";
import { StyleSheet, View, Text } from "react-native";

import SpeakerCard from "./SpeakerCard";

export default ScheduleItem = ({ time, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.divider}>
        <View style={styles.dot} />
        <View style={styles.stick} />
      </View>

      {typeof content === "string" || content instanceof String ? (
        <Text style={styles.title}>{content}</Text>
      ) : (
        <SpeakerCard lection={content} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },

  time: {
    color: "#BBBBBB",
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
  },

  divider: {
    marginHorizontal: 8,
    alignItems: "center",
  },

  dot: {
    width: 16,
    height: 16,

    marginTop: 4,

    borderWidth: 3,
    borderColor: "#FFFFFF3D",
    borderRadius: 32,
    backgroundColor: "#00000000",
  },

  stick: {
    borderRadius: 32,
    backgroundColor: "#FFFFFF3D",
    width: 3,
    flex: 1,
    // height: "100%",
    marginTop: 4,
  },

  title: {
    color: "#FFFFFF4A",
    fontFamily: "Inter-Medium",
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
  },
});
