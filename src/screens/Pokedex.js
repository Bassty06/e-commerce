import { View, Text } from "react-native";
import React from "react";
import Producto from "../components/Producto";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

export default function Pokedex() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={productos}
        renderItem={Producto}
        keyExtractor={(item) => String(item.id)}
        style={{ padding: 16 }}
      />
    </View>
  );
}
