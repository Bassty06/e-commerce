import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AirbnbRating, Image } from "@rneui/themed";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export const ViewProduct = () => {
  const route = useRoute();
  const ProductData = route.params?.data || {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{ProductData.title}</Text>
        <Text>{ProductData.description}</Text>
        <SafeAreaView>
          <FlatList
            data={ProductData.images}
            style={styles.list}
            numColumns={2}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
          />
        </SafeAreaView>
      </View>

      <View style={styles.textContainer}>
        <Text>{ProductData.price}</Text>
        <Text>{ProductData.discountPercentage}</Text>
        <Text>{ProductData.category}</Text>
        <Text>{ProductData.brand}</Text>
        <Text>
          <AirbnbRating
            defaultRating={parseInt(ProductData.rating)}
            size={15}
          />
          {ProductData.rating}
        </Text>
        <Text>{ProductData.brand}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  list: {
    width: "100%",
    backgroundColor: "#fff",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
  },
});
