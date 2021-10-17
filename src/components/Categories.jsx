import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import colors from "../utils/colors";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const CategoryItem = ({ item = items[0] }) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 20, alignItems: "center", paddingVertical: 5 }}
    >
      <Image
        source={item.image}
        style={{ width: 50, height: 40 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.text}
        renderItem={(item) => <CategoryItem item={item.item} />}
        style={{ marginLeft: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_background,
    padding: 10,
    marginBottom: 5,
  },
});

export default Categories;
