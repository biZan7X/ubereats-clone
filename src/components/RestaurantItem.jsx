import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/colors";

const ImageComponent = ({ item }) => {
  return (
    <View>
      <Image
        source={{ uri: item.image_url }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Info = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>35-45 . mins</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.primary_background,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.rating}</Text>
      </View>
    </View>
  );
};

const Restaurantitem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageComponent item={item} />
      <Info item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_background,
    paddingBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 5,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default Restaurantitem;
