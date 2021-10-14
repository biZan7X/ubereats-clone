import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-elements";

import Headertabs from "../components/HeaderTabs";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";
import Restaurantitem from "../components/RestaurantItem";
import Bottomtab from "../components/BottomTab";

import NavigationActions from "../navigation/NavigationActions";

import config from "../../config";

import colors from "../utils/colors";

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("San Francisco");
  const [restaurantData, setRestaurantData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`,
      },
    };

    setRefreshing(true);
    try {
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => {
          setRestaurantData(
            json.businesses.filter((item) =>
              item.transactions.includes(activeTab.toLowerCase())
            )
          );
          setRefreshing(false);
        });
    } catch (err) {
      console.log("Failed to fetch data from yelp:", err);
    }
    setRefreshing(false);
  };

  useEffect(() => NavigationActions.set(navigation), []);

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab, city, activeTab]);

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary_background, flex: 1 }}
    >
      <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Searchbar setCity={setCity} />

      {refreshing ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" />
      ) : (
        <FlatList
          ListHeaderComponent={() => <Categories />}
          data={restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <Restaurantitem item={item.item} />}
          refreshing={refreshing}
          onRefresh={getRestaurantsFromYelp}
        />
      )}

      <Divider width={2} />
      <Bottomtab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
