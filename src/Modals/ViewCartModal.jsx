import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { Divider } from "react-native-elements";
import LottieView from "lottie-react-native";

import Orderitem from "../components/OrderItem";

const Viewcartmodal = ({
  visible,
  setToggleModal,
  cartItems,
  bill,
  restaurantName,
}) => {
  return (
    <GestureRecognizer onSwipeDown={() => setToggleModal(false)}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <View
            style={{
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieView
              source={require("../assets/animations/arrow-down.json")}
              autoPlay
              loop
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.title}>{restaurantName}</Text>
            <View style={{ height: "65%" }}>
              <FlatList
                data={cartItems}
                keyExtractor={(cartItem, index) => String(index)}
                renderItem={(cartItem) => (
                  <Orderitem
                    foodName={cartItem.item.title}
                    cost={cartItem.item.price}
                  />
                )}
                ItemSeparatorComponent={() => (
                  <Divider style={{ marginHorizontal: 20 }} color="gray" />
                )}
                style={{
                  flexGrow: 0,
                  marginTop: 10,
                }}
              />
            </View>

            <View style={styles.footer}>
              <Divider
                style={{ marginHorizontal: 0 }}
                color="black"
                width={1}
              />
              <View style={styles.subtotal}>
                <Text style={{ fontSize: 18, fontWeight: "800" }}>
                  Subtotal
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "800" }}>${bill}</Text>
              </View>

              <TouchableOpacity style={styles.CheckOut} onPress={() => {}}>
                <Text style={[styles.text, { fontSize: 20 }]}>Checkout</Text>
                <Text style={[styles.text, styles.bill]}>$ {bill}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000099",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 2,
  },
  subContainer: {
    height: "60%",
    width: "100%",
    backgroundColor: "white",
  },
  CheckOut: {
    padding: 13,
    borderRadius: 30,
    width: 300,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  text: {
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: 25,
  },
  bill: {
    position: "absolute",
    right: "10%",
  },
  subtotal: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});

export default Viewcartmodal;
