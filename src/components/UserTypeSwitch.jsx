import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useState } from "react";

export default UserTypeSwitch = ({onChange}) => {
  const [type, settype] = useState("СЛУШАТЕЛЬ");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.common,
          ...styles.listener,
          ...(type === "СЛУШАТЕЛЬ" ? styles.listenerActive : styles.notActive),
        }}
        onPress={() => {
          settype("СЛУШАТЕЛЬ");
          if (onChange) onChange("СЛУШАТЕЛЬ");
        }}
      >
        <Text style={styles.text}>СЛУШАТЕЛЬ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.common,
          ...styles.speaker,
          ...(type === "СПИКЕР" ? styles.speakerActive : styles.notActive),
        }}
        onPress={() => {
          settype("СПИКЕР");
          if (onChange) onChange("СПИКЕР");
        }}
      >
        <Text style={styles.text}>СПИКЕР</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 48,
    width: "100%",

    marginBottom: 12,
  },

  text: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    color: "#FFFFFFFF",
    // color: "#FFFFFF54",
  },

  common: {
    borderWidth: 2,

    width: "50%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  notActive: {
    borderColor: "#FFFFFF5B",
    backgroundColor: "#FFFFFF42",
  },

  listener: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },

  speaker: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },

  listenerActive: {
    backgroundColor: "#0B8AFF",
    borderColor: "#0B8AFF",
  },

  speakerActive: {
    backgroundColor: "#8F00FF",
    borderColor: "#8F00FF",
  },
});
