import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getProfile } from "../../api/auth";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setIsAuth } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        console.log("Profile data:", data); // Debugging: Log profile data
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await deleteToken();
    setIsAuth(false);
    navigation.navigate("Login");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#ff69b4" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  if (!profile) {
    return <Text style={styles.errorText}>Profile not found</Text>;
  }

  const imageUrl = `https://react-native-food-delivery-be.eapi.joincoded.com/${profile.image}`;
  console.log("Profile image URL:", imageUrl); // Debugging: Log profile image URL

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profile.image ? (
          <Image source={{ uri: imageUrl }} style={styles.logo} />
        ) : (
          <Text style={styles.errorText}>No profile image available</Text>
        )}
        <Text style={styles.title}>Welcome, {profile.username}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d63384",
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "#d63384",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#d63384",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "#d63384",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});