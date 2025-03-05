import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RestaurantItem = ({ restaurantName, restaurantImage, restaurantRating, restaurantCategory, restaurantDeliveryTime }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: restaurantImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{restaurantName}</Text>
      <Text style={styles.category}>Category: {restaurantCategory}</Text>
      <Text style={styles.rating}>Rating: {restaurantRating}</Text>
      <Text style={styles.deliveryTime}>Delivery Time: {restaurantDeliveryTime}</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#d63384",
  },
  image: {
    width: 180,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d63384",
    textAlign: "center",
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
    textAlign: "center",
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
    textAlign: "center",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});