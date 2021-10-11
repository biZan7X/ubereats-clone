import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../utils/colors";

const CustomButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: activeTab === text ? "black" : "#fff" },
      ]}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "900",
          color: activeTab === text ? "#fff" : "black",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const Headertabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CustomButton
        text="PickUp"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 12,
    flexDirection: "row",
    backgroundColor: colors.secondary_background,
    width: "100%",
  },
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});

export default Headertabs;
