import React from "react";
import { Text, Card, Button, AirbnbRating } from "@rneui/themed";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Producto = ({ item }) => {
  const navigation = useNavigation();

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
            <AirbnbRating defaultRating={parseInt(item.rating)} size={15} />
            {item.rating}
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
            onPress={() => navigation.navigate("ViewProduct")}
          />
        </Card>
      </View>
    </ScrollView>
  );
};
