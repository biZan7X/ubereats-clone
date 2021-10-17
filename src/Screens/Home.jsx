import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { Divider } from "react-native-elements";

import Headertabs from "../components/HeaderTabs";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";
import Restaurantitem from "../components/RestaurantItem";
import Bottomtab from "../components/BottomTab";

import {
  setActiveTab,
  setCity,
  setRestaurantData,
  getRestaurantData,
  setRefreshing,
} from "../redux/actions";

import NavigationActions from "../navigation/NavigationActions";

import colors from "../utils/colors";

const Home = ({
  navigation,
  activeTab,
  city,
  restaurantData,
  refreshing,
  setActiveTab,
  setCity,
  setRestaurantData,
  getRestaurantData,
  setRefreshing,
}) => {
  useEffect(() => {
    NavigationActions.set(navigation);
  }, []);

  useEffect(() => {
    getRestaurantData();
  }, [activeTab, city]);

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
          onRefresh={getRestaurantData}
        />
      )}

      <Divider width={2} />
      <Bottomtab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = ({ restaurant }) => {
  const { city, activeTab, restaurantData, refreshing } = restaurant;
  return {
    city: city,
    activeTab: activeTab,
    restaurantData: restaurantData,
    refreshing: refreshing,
  };
};

export default connect(mapStateToProps, {
  setActiveTab,
  setCity,
  setRestaurantData,
  setRefreshing,
  getRestaurantData,
})(Home);
