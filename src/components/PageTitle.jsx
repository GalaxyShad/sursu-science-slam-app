import React from "react";
import { StyleSheet, Text } from "react-native";

export default PageTitle = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Black',
    fontSize: 45,
    color: 'white',
    marginBottom: 32,
  },
});