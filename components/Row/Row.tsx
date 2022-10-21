import * as React from "react";
import { StyleSheet, View } from "react-native";

export function Row() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
      }}
    >
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#c7e8d3",
    borderRadius: 100 / 2,
  },
});
