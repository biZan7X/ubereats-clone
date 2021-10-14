import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const Viewcartbutton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text, { fontSize: 20 }]}>View Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderRadius: 30,
    width: 300,
    backgroundColor: "black",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
  },
  text: {
    color: "white",
  },
});

export default Viewcartbutton;
