import { View, ScrollView } from "react-native";
import React from "react";
import { Producto } from "../components/Producto";
import { useState, useEffect } from "react";

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
    <ScrollView>
      <View>
        {productos.map((item) => (
          <Producto key={String(item.id)} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
