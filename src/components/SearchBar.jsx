import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../utils/colors";

const Searchbar = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.searchBar}>
        <Ionicons name="location-sharp" size={28} color="black" />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          styles={{
            textInput: {
              backgroundColor: colors.primary_background,
              borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,
            },
            textInputContainer: {
              backgroundColor: colors.primary_background,
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
            },
          }}
        />
        <View style={styles.buttonInfo}>
          <AntDesign name="clockcircle" size={11} color="black" />
          <Text style={{ marginLeft: 5 }}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.secondary_background,
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: colors.primary_background,
    paddingLeft: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInfo: {
    flexDirection: "row",
    backgroundColor: colors.secondary_background,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Searchbar;
