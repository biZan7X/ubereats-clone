import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";
import Restaurantdetails from "../Screens/RestaurantDetails";
import Ordercompleted from "../Screens/OrderCompleted";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={Restaurantdetails} />
        <Stack.Screen name="OrderCompleted" component={Ordercompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
