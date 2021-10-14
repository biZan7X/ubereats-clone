import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { Divider } from "react-native-elements";

import Headertabs from "../components/HeaderTabs";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";
import Restaurantitem from "../components/RestaurantItem";
import Bottomtab from "../components/BottomTab";

import colors from "../utils/colors";
import { localRestaurants } from "../utils/localData";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("San Francisco");
  const [restaurantData, setRestaurantData] = useState([]);

  //TODO: get an alternative to yelp API
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions).then((res) => res.json());
    //.then((json) => console.log(json));
  };

  //TODO: filter feature via activeTab
  useEffect(() => {
    //getRestaurantsFromYelp();
    setRestaurantData(localRestaurants);
  }, [activeTab, city, activeTab]);

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary_background, flex: 1 }}
    >
      <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Searchbar setCity={setCity} />

      <FlatList
        ListHeaderComponent={() => <Categories />}
        data={restaurantData}
        keyExtractor={(item) => item.name}
        renderItem={(item) => <Restaurantitem item={item.item} />}
      />

      <Divider width={2} />
      <Bottomtab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
