import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ categoryName, categoryImage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: categoryImage }} style={styles.image} />
      <Text style={styles.name}>{categoryName}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 60,
    height: 40,
    marginBottom: 1,
    borderRadius: 10,
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#d63384",
  },
});
