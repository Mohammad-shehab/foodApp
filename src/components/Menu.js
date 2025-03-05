import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { useCart } from "../context/CartContext";
import { getresturant } from "../api/restaurants";
import { useQuery } from "@tanstack/react-query";

const Menu = ({ route }) => {
  const { restaurantId } = route.params;
  const { addToCart } = useCart();

  const { data: restaurant, error, isLoading } = useQuery({
    queryKey: ["restaurant", restaurantId],
    queryFn: () => getresturant(restaurantId),
  });

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.image }} style={styles.menuItemImage} />
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
      <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#ff69b4" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error.message}</Text>;
  }

  if (!restaurant) {
    return <Text style={styles.errorText}>Restaurant not found</Text>;
  }

  return (
    <FlatList
      data={restaurant.items}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item._id.toString()}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Image source={{ uri: restaurant.image }} style={styles.image} />
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.deliveryTime}>Delivery Time: {restaurant.deliveryTime}</Text>
          <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
          <Text style={styles.menuHeader}>Menu</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffe6f0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 15,
    width: "100%",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  image: {
    width: 180,
    height: 150,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 75,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#d63384",
  },
  deliveryTime: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#d63384",
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#d63384",
  },
  menuHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#d63384",
  },
  menuItem: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
  },
  menuItemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d63384",
  },
  menuItemDescription: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
    color: "#666",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d63384",
  },
  addButton: {
    backgroundColor: "#ff69b4",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});