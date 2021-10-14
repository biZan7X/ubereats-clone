import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Divider } from "react-native-elements";

import About from "../components/About";
import Menuitem from "../components/MenuItem";
import Viewcartbutton from "../components/ViewCartButton";

import { foods } from "../utils/localData";

const Restaurantdetails = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <About restaurant={route.params.restaurant} />
      <Divider width={1.8} />
      <FlatList
        data={foods}
        keyExtractor={(food, index) => String(index)}
        renderItem={(food) => <Menuitem food={food.item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginHorizontal: 40 }} />
        )}
      />
      <Viewcartbutton />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Restaurantdetails;
