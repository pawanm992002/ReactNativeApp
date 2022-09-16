import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import Home from "./screens/Home";
import Auth from "./screens/Auth";
import Attendance from "./screens/Attendance";
import Profile from "./screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Attendance"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
