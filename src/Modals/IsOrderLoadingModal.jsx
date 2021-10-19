import React, { useEffect } from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

//TODO: bug - model not closing after ordering for second time
const IsorderloadingModal = ({ visible }) => {
  useEffect(() => console.log(visible), [visible]);
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <LottieView
          source={require("../assets/animations/scanner.json")}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000099",
    flex: 1,
    justifyContent: "center",
    zIndex: 2,
  },
});

export default IsorderloadingModal;
