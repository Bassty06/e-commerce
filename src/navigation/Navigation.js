import React from "react";
import Favorites from "../screens/Favorites";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tap = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tap.Navigator>
      <Tap.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: () => <Icon name="heart" size={20} color="#000" />,
        }}
      />
      <Tap.Screen
        name="Productos"
        component={Pokedex}
        options={{
          tabBarLabel: "Pokedex",
          tabBarIcon: () => <Icon name="globe" size={60} color="#000" />,
        }}
      />
      <Tap.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => <Icon name="user" size={20} color="#000" />,
        }}
      />
    </Tap.Navigator>
  );
}
