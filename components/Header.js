import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = ({ user }) => {
  const logout = () => {
    console.log("logout");
  };
  const search = () => {
    console.log("search");
  };
  const openProfile = () => {
    console.log("open profile page");
  };
  return (
    <View style={styles.header}>
      <Image style={styles.headerIcon} source={require("../assets/logo.jpg")} />

      <View style={styles.search}>
        <TextInput placeholder="Search" />
        <FontAwesome onPress={search} style={styles.searchIcon} name="search" />
      </View>
      <Text onPress={openProfile}>{user.userName}</Text>
      {/* name of teacher or student in props */}
      <Pressable onPress={logout}>
        <Image
          style={styles.headerIcon}
          source={require("../assets/logout.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    backgroundColor: "#B6A7A7",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerIcon: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  search: {
    width: "45%",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    height: 35,
  },
  searchIcon: {
    position: "absolute",
    right: 5,
    fontSize: 20,
  },
});

export default Header;
