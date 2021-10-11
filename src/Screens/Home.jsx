import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import Headertabs from "../components/HeaderTabs";

import colors from "../utils/colors";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary_background, flex: 1 }}
    >
      <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
