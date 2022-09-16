import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ClassroomCards from "../components/ClassroomCards";

const Attendance = () => {
  const [showClassrooms, setShowClassrooms] = useState(false);
  const deleteClassroom = () => {};
  const markAttendance = () => {};
  const userInfo = {
    userName: "Pawan",
    isTeacher: false,
    classroomsInfo: {},
  };
  return (
    <View>
      <Header user={userInfo} />
      <ImageBackground source={require("../assets/classroom.jpg")}>
        <View style={styles.cont}>
          <FontAwesome
            style={styles.menu}
            name="bars"
            onPress={() => setShowClassrooms(!showClassrooms)}
          />
          {showClassrooms && <ClassroomCards />}
          <View style={styles.buttons}>
            {/* <Pressable
              onPress={deleteClassroom}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#FF3D00" : "red",
                borderRadius: 7,
                width: "40%",
                color: "white",
              })}
            >
              <Text style={styles.btnText}>leave Classroom</Text>
            </Pressable> */}
            <Button
              color="red"
              onPress={deleteClassroom}
              title="Leave Classroom"
            />
            <Button onPress={markAttendance} title="Mark Attendance" />
          </View>
        </View>
        <Text>Attendance</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    padding: 9,
    width: "100%",
    height: "100%",
  },
  menu: {
    fontSize: 35,
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Attendance;
