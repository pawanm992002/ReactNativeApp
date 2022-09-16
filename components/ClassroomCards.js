import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ClassroomCards = () => {
  const [isTeacher, setIsTeacher] = useState(true);
  // isTeacher, and all details props will pass througth home page
  const deleteClassroom = () => {
    console.log("delete classroom for teacher or student");
  };
  const openClassroom = ({}) => {
    console.log("open classroom page");
  };
  const classroomDetail = [
    {
      classroomName: "Toc",
      classroomId: "cl-101",
      teacherName: "vinesh",
      noOfStudent: "30",
    },
    {
      classroomName: "OOPs",
      classroomId: "cl-102",
      teacherName: "anil",
      noOfStudent: "25",
    },
    {
      classroomName: "DBMS",
      classroomId: "cl-103",
      teacherName: "jyoti",
      noOfStudent: "50",
    },
    {
      classroomName: "DBMS",
      classroomId: "cl-103",
      teacherName: "jyoti",
      noOfStudent: "50",
    },
    {
      classroomName: "DBMS",
      classroomId: "cl-103",
      teacherName: "jyoti",
      noOfStudent: "50",
    },
    {
      classroomName: "DBMS",
      classroomId: "cl-103",
      teacherName: "jyoti",
      noOfStudent: "50",
    },
  ];
  return (
    <>
      <FlatList
        data={classroomDetail}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={styles.classroomCards}>
              <View style={styles.classroomHead}>
                <Text onPress={openClassroom} style={styles.roomName}>
                  {item.classroomName}
                </Text>
                <FontAwesome
                  style={styles.trashIcon}
                  name="trash"
                  onPress={deleteClassroom}
                />
              </View>
              {isTeacher && (
                <Text style={styles.field}>
                  Teacher Name :
                  <Text style={styles.fieldValue}>{item.teacherName}</Text>
                </Text>
              )}
              <Text style={styles.field}>
                Total Students :
                <Text style={styles.fieldValue}>{item.noOfStudent}</Text>
              </Text>
              <Text style={styles.classroomId}>{item.classroomId}</Text>
            </View>
          );
        }}
        style={styles.classroomList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  classroomList: {
    width: "80%",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  classroomCards: {
    backgroundColor: "rgba(217, 217, 217, 0.9)",
    height: 170,
    margin: 8,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  classroomHead: {
    width: "100%",
    flexDirection: "row",
    height: 40,
  },
  roomName: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    flex: 5,
  },
  trashIcon: {
    fontSize: 25,
    color: "red",
    textAlignVertical: "center",
    flex: 1,
  },
  field: {
    color: "white",
    width: "100%",
    paddingLeft: 8,
    margin: 9,
    height: 28,
  },
  fieldValue: {
    color: "#555",
  },
  classroomId: {
    color: "#555",
    textAlign: "right",
    paddingRight: 8,
  },
});

export default ClassroomCards;
