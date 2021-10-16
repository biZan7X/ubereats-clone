import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Viewcartbutton = ({ bill, setToggleModal }) => {
  if (bill)
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => setToggleModal(true)}
      >
        <Text style={[styles.text, { fontSize: 20 }]}>View Cart</Text>
        <Text style={[styles.text, styles.bill]}>$ {bill}</Text>
      </TouchableOpacity>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderRadius: 30,
    width: 300,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
  },
  text: {
    color: "white",
  },
  bill: {
    position: "absolute",
    right: "10%",
  },
});

export default Viewcartbutton;
