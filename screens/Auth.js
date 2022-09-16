import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  StudentLoginPage,
  StudentRegisterPage,
  TeacherLoginPage,
  TeacherRegisterPage,
} from "./AuthControls";

export const AuthBtn = ({ btnName, customStyle, onPressFunction }) => {
  const btnStyle = { ...styles.authBtn, ...customStyle };
  return (
    <>
      <TouchableOpacity onPress={onPressFunction} style={btnStyle}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{btnName}</Text>
      </TouchableOpacity>
    </>
  );
};

const Auth = ({ navigation }) => {
  // useEffect(() => {
  //   navigation.navigate("Home"); // if User find in local storage
  // }, []);

  const [selectedUser, setSelectedUser] = useState(true); //student or teacher
  const [selectChoice, setSelectChoice] = useState(true); //login or register

  return (
    <ImageBackground
      style={styles.authCont}
      source={require("../assets/Auth1.jpg")}
    >
      <View style={styles.currentAuthPage}>
        {selectedUser ? (
          selectChoice ? (
            <StudentLoginPage navigation={navigation} />
          ) : (
            <StudentRegisterPage navigation={navigation} />
          )
        ) : selectChoice ? (
          <TeacherLoginPage navigation={navigation} />
        ) : (
          <TeacherRegisterPage navigation={navigation} />
        )}
      </View>
      <View style={styles.selectAuth}>
        <AuthBtn
          btnName="Log In"
          onPressFunction={() => setSelectChoice(true)}
          customStyle={{
            backgroundColor: !selectChoice ? "#3385ff" : "#99c2ff",
            width: selectChoice ? "60%" : "40%",
          }}
        />
        <AuthBtn
          btnName="Register"
          onPressFunction={() => setSelectChoice(false)}
          customStyle={{
            backgroundColor: selectChoice ? "#3385ff" : "#99c2ff",
            width: !selectChoice ? "60%" : "40%",
          }}
        />
      </View>
      <View style={styles.selectUser}>
        <AuthBtn
          onPressFunction={() => setSelectedUser(true)}
          btnName="Student"
          customStyle={{
            width: "50%",
            backgroundColor: selectedUser ? "#cccccc" : "#999999",
            borderWidth: selectedUser ? 2 : 1,
            height: 60,
          }}
        />
        <AuthBtn
          onPressFunction={() => setSelectedUser(false)}
          btnName="Teacher"
          customStyle={{
            width: "50%",
            backgroundColor: !selectedUser ? "#cccccc" : "#999999",
            borderWidth: !selectedUser ? 2 : 1,
            height: 60,
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  authCont: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  currentAuthPage: {
    position: "absolute",
    width: "100%",
    minHeight: 300,
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 160,
  },
  selectAuth: {
    borderWidth: 2,
    flexDirection: "row",
    width: "80%",
    position: "absolute",
    bottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  selectUser: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    width: "100%",
  },
  authBtn: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Auth;
