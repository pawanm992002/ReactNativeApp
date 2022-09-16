import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AuthBtn } from "./Auth";

// declare all auth function
const teacherRegisterHandler = (navigation) => {
  console.log("teacher reg");
  //   navigation.navigate("Home"); // if submit successfull then navigate
};
const studentRegisterHandler = (navigation) => {
  console.log("student reg");
  //   navigation.navigate("Home"); // if submit successfull then navigate
};
const teacherLoginHandler = (navigation) => {
  console.log("teacher login");
  //   navigation.navigate("Home"); // if submit successfull then navigate
};
const studentLoginHandler = (navigation) => {
  console.log("student login");
  navigation.navigate("Home"); // if submit successfull then navigate
};

// forms
const StudentRegisterPage = ({ navigation }) => {
  //   const [input, setInput] = useState({
  //     username: "",
  //     College_Id: "",
  //     email: "",
  //     password: "",
  //     cpassword: "",
  //   });
  //   const changeHandler = (e) => {
  //     console.log(e.target.name);
  //     const { name, value } = e.target;
  //     setInput({
  //       ...input,
  //       [name]: value,
  //     });
  //     console.log(input);
  //   };
  return (
    <>
      <View style={styles.authCont}>
        <Text style={styles.formHead}>Student Register</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Student Id" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <AuthBtn
          btnName="Submit"
          customStyle={styles.submitBtn}
          onPressFunction={studentRegisterHandler}
        />
      </View>
    </>
  );
};
const StudentLoginPage = ({ navigation }) => {
  return (
    <>
      <View style={styles.authCont}>
        <Text style={styles.formHead}>Student login</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Student Id" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <AuthBtn
          btnName="Submit"
          customStyle={styles.submitBtn}
          onPressFunction={() => studentLoginHandler(navigation)}
        />
      </View>
    </>
  );
};
const TeacherRegisterPage = () => {
  return (
    <>
      <View style={styles.authCont}>
        <Text style={styles.formHead}>Teacher Register</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Teacher Id" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <AuthBtn
          btnName="Submit"
          onPressFunction={teacherRegisterHandler}
          customStyle={styles.submitBtn}
        />
      </View>
    </>
  );
};
const TeacherLoginPage = () => {
  return (
    <>
      <View style={styles.authCont}>
        <Text style={styles.formHead}>Teacher Log In</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Teacher Id" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <AuthBtn
          btnName="Submit"
          onPressFunction={teacherLoginHandler}
          customStyle={styles.submitBtn}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  authCont: {
    marginTop: 20,
    backgroundColor: "hsla(60, 100%, 80%, 0.9)",
    width: "80%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 50,
  },
  formHead: {
    fontSize: 32,
    fontWeight: "bold",
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
    margin: 8,
    height: 30,
    paddingLeft: 8,
  },
  submitBtn: {
    backgroundColor: "#e6ac00",
    borderRadius: 5,
  },
});

export {
  StudentLoginPage,
  StudentRegisterPage,
  TeacherLoginPage,
  TeacherRegisterPage,
};
