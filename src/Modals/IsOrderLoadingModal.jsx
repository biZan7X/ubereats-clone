import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

const IsorderloadingModal = ({ visible, setIsOrderLoading }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setIsOrderLoading(false)}
    >
      <View style={styles.container}>
        <LottieView
          source={require("../assets/animations/scanner.json")}
          autoPlay
          loop
          speed={3}
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
