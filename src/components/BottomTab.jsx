import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../utils/colors";

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesome5 name={icon} size={24} color="black" />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const Bottomtab = () => {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.secondary_background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 30,
  },
});

export default Bottomtab;
