import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import Cart from "../../screens/Cart";
import Profile from "../../screens/Auth/Profile";
import MapNavigation from "../MapNavigation"; // Corrected import path
import { useCart } from "../../context/CartContext";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { cartItems } = useCart();

  const calculateTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Map") {
            iconName = "map";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarBadge:
          route.name === "Cart" && calculateTotalItems() > 0
            ? calculateTotalItems()
            : null,
        tabBarActiveTintColor: "#d63384",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          headerStyle: {
            backgroundColor: '#d63384',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
         <Tab.Screen
        name="Map"
        component={MapNavigation}
        options={{
          tabBarLabel: "Map",
          headerShown: false,

          headerStyle: {
            backgroundColor: '#d63384',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerStyle: {
            backgroundColor: '#d63384',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
   
    </Tab.Navigator>
  );
};

export default MainNavigation;
