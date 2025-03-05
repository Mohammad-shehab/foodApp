import { FlatList, StyleSheet, TouchableOpacity, View, ActivityIndicator, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { getAllCategories } from "../api/categories";
import { useQuery } from "@tanstack/react-query";

const CategoryList = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  if (isLoading) return <ActivityIndicator size="large" color="#ff69b4" />;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  const handleCategoryPress = (categoryName) => {
    const newCategory = selectedCategory === categoryName ? "" : categoryName;
    setSelectedCategory(newCategory);
    onSelectCategory(newCategory);
  };

  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.name)}
          style={[
            styles.categoryItem,
            selectedCategory === item.name && styles.selectedCategoryItem,
          ]}
        >
          <CategoryItem categoryName={item.name} categoryImage={item.image} />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.scrollView}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 1,
    paddingHorizontal: 1,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff", // Default background color for category items
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderWidth: 1,
    borderColor: "#d63384",
    marginBottom: 10,
  },
  selectedCategoryItem: {
    backgroundColor: "#ff69b4", // Highlight color for selected category
    borderColor: "#ff69b4", // Ensure border color is consistent with categoryItem
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});