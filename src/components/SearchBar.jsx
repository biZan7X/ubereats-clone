import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import config from "../../config";

import colors from "../utils/colors";

const Searchbar = ({ setCity }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.searchBar}>
        <GooglePlacesAutocomplete
          query={{ key: config.GOOGLE_API_KEY }}
          placeholder="Search"
          onPress={(data, details = null) => {
            setCity(data.description.split(",")[0]);
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
            },
          }}
          renderLeftButton={() => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          )}
          renderRightButton={() => {
            return (
              <View style={styles.buttonInfo}>
                <AntDesign name="clockcircle" size={11} color="black" />
                <Text style={{ marginLeft: 5 }}>Search</Text>
              </View>
            );
          }}
        />
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
