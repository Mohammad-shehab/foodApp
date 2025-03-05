import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import RestaurantItem from "./RestaurantsItem";
import { getAllRestaurants } from "../api/restaurants";
import { useQuery } from "@tanstack/react-query";

const RestaurantList = ({ filterByName, filterByCategory }) => {
  const navigation = useNavigation();

  const fetchRestaurants = async () => {
    const data = await getAllRestaurants();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
  });

  if (isLoading) return <ActivityIndicator size="large" color="#ff69b4" />;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  const displayRestaurants = data
    .filter((restaurant) => {
      const matchesName = restaurant.name
        .toLowerCase()
        .includes(filterByName.trim().toLowerCase());
      const matchesCategory = filterByCategory
        ? restaurant.category.name === filterByCategory
        : true;
      return matchesName && matchesCategory;
    })
    .map((restaurant) => {
      return (
        <TouchableOpacity
          key={restaurant._id}
          onPress={() => navigation.navigate("Menu", { restaurantId: restaurant._id })}
          style={styles.touchable}
        >
          <RestaurantItem
            restaurantName={restaurant.name}
            restaurantImage={restaurant.image}
            restaurantRating={restaurant.rating}
            restaurantCategory={restaurant.category.name}
            restaurantDeliveryTime={restaurant.deliveryTime}
          />
        </TouchableOpacity>
      );
    });

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {displayRestaurants}
    </ScrollView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    paddingVertical: 10,
   
  },
  touchable: {
    width: "90%",
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});