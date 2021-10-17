import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

import Menuitem from "../components/MenuItem";

import NavigationActions from "../navigation/NavigationActions";

import { foods } from "../utils/localData";
import colors from "../utils/colors";

const Ordercompleted = ({
  restaurantName = "theque",
  bill = "00",
  orderedItems = foods,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        loop={false}
        style={{ height: 100, marginBottom: 25, marginTop: 5 }}
      />

      <Text
        style={styles.text}
      >{`Your order at ${restaurantName} has been successfully placed for ${bill} 😁✌️`}</Text>
      <View style={{ height: "50%" }}>
        <FlatList
          data={orderedItems}
          keyExtractor={(item, index) => String(index)}
          renderItem={(orderedItem) => (
            <Menuitem
              food={orderedItem.item}
              restaurantName={restaurantName}
              isFromOrderCompleted={true}
            />
          )}
          style={{ flexGrow: 0 }}
          showsVerticalScrollIndicator={true}
          alwaysBounceVertical
        />
      </View>
      <LottieView
        source={require("../assets/animations/cooking.json")}
        autoPlay
        style={{ height: 200, marginBottom: 20 }}
        speed={0.5}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => NavigationActions.resetTo("Home", 0)}
      >
        <AntDesign name="closecircle" size={30} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.secondary_background,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default Ordercompleted;
