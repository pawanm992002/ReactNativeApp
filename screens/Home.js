import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import Header from "../components/Header";
import ClassroomCards from "../components/ClassroomCards";

const Home = () => {
  const userInfo = {
    userName: "Pawan",
    isTeacher: false,
    classroomsInfo: {},
  };
  return (
    <>
      <View style={styles.homeCont}>
        <Header user={userInfo} />
        <ImageBackground
          style={styles.homeBg}
          source={require("../assets/idea.jpg")}
        >
          <ClassroomCards />
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeCont: { flex: 1 },
  homeBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
