import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RootNavigation from "./src/navigation";

export default function App() {
  return (
    <>
      <RootNavigation />
    </>
  );
}

const styles = StyleSheet.create({});
