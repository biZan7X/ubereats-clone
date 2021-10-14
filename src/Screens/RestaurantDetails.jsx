import React from "react";
import { View, StyleSheet, Text } from "react-native";

import About from "../components/About";

const Restaurantdetails = ({ route }) => {
  return (
    <View>
      <About restaurant={route.params.restaurant} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Restaurantdetails;
