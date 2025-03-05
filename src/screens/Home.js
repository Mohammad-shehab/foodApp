import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import CategoryList from "../components/CategoryList";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Your Restaurant"
        style={styles.searchInput}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />

      <CategoryList onSelectCategory={setSelectedCategory} />
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
      </View>
      <RestaurantList filterByName={search} filterByCategory={selectedCategory} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dividerContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,

  },
  divider: {
    width: "100%",
    height: 5,
    backgroundColor: "#d63384",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#d63384",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});