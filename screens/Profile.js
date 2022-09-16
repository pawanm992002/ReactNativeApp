import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const Profile = () => {
  const userInfo = {
    userName: "Pawan",
    isTeacher: false,
    classroomsInfo: {},
  };
  return (
    <View>
      <Header user={userInfo} />
      <Text>profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
