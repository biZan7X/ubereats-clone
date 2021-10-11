import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/colors";

const imageUrl =
  "https://lh3.googleusercontent.com/proxy/7lkWTgi22pmjvRzo6ZLxfYUE7OHmhfd9ThkL0fkpK29jx_5b8eueGW2ZltI8imRK9KrYC8f-VtclakO-Qt3sQwqA1LQywr-3ZTOwa5Rf5Yi81VaGOcdNOdTB5EyJRIaf14t-_0_YCIIeaVKAYIir8B1O";

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Info = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Schezwan Noodles
        </Text>
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
        <Text style={{ fontWeight: "bold" }}>4</Text>
      </View>
    </View>
  );
};

const Restaurantitem = () => {
  return (
    <View style={styles.container}>
      <ImageComponent />
      <Info />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_background,
    paddingBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 5,
    marginTop: 25,
    borderRadius: 10,
  },
});

export default Restaurantitem;
