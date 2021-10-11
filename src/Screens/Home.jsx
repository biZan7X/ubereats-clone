import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import Headertabs from "../components/HeaderTabs";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";

import colors from "../utils/colors";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary_background, flex: 1 }}
    >
      <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Searchbar />
      <Categories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
