import React from "react";
import { Text, Card, Button, AirbnbRating } from "@rneui/themed";
import { View, ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default function Producto({ item }) {
  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: item.thumbnail,
            }}
          />
          <Text style={{ marginBottom: 10, marginTop: 20 }}>
            {item.description}
          </Text>
          <Text style={{ marginBottom: 10, color: "#007302" }}>
            $ {item.price} % {item.discountPercentage}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            {item.category} {item.brand}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            <AirbnbRating defaultRating={parseInt(item.rating)} size={20} />{" "}
            {item.rating}
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </ScrollView>
  );
}
