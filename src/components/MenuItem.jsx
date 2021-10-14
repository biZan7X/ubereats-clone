import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Menuitem = ({ food }) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        iconStyle={{
          borderColor: "grey",
          borderRadius: 0,
        }}
        fillColor="green"
      />
      <View style={styles.info}>
        <Text style={{ fontSize: 19, fontWeight: "600" }}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
      </View>
      <Image source={{ uri: food.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  info: {
    width: 240,
    justifyContent: "space-evenly",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default Menuitem;
