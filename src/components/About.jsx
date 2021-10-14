import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../utils/colors";

const About = ({ restaurant }) => {
  const { name, image_url, price, review_count, rating, categories } =
    restaurant;

  const categoriesTags = categories.map((i) => i.title).join(" * ");
  const customDescription = `${categoriesTags} * ${price} * 💳 * ${rating}⭐️ * (${review_count}+)`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image_url }}
        style={{ width: "100%", height: 180 }}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{customDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_background,
    paddingBottom: 15,
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 15.5,
    fontWeight: "400",
    marginTop: 10,
    marginHorizontal: 15,
  },
});

export default About;
