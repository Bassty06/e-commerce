import React from "react";
import Navigation from "./src/navigation/Navigation";
import { ViewProduct } from "./src/screens/ViewProduct";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ViewProduct" component={ViewProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
