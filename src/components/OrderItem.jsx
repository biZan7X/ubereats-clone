import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Orderitem = ({ foodName, cost }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{foodName}</Text>
      <Text style={styles.text}>{cost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default Orderitem;
