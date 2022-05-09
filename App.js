import * as React from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function MainScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
}

function SigupScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          <Image source={require("./assets/logo.jpg")} />
        </View>

        <Text style={{ textAlign: "center", fontSize: 25, marginTop: 25 }}>
          SignUp
        </Text>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 15,
          }}
        >
          Email
        </Text>
        <TextInput
          style={{
            backgroundColor: "#fff",
            width: 350,
            marginLeft: 20,
            padding: 10,
            borderRadius: 4,
            marginTop: 5,
          }}
          placeholder="Enter Your Email"
        />

        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 15,
          }}
        >
          Password
        </Text>
        <TextInput
          style={{
            backgroundColor: "#fff",
            width: 350,
            marginLeft: 20,
            padding: 10,
            borderRadius: 4,
            marginTop: 5,
          }}
          placeholder="Enter Your Email"
        />

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#333",
              width: 100,
              padding: 10,
              color: "#fff",
              textAlign: "center",
              borderRadius: 4,
              marginTop: 15,
              marginLeft: 20,
            }}
          >
            SignUp
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
            <Text
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: 10,
                borderRadius: 4,
              }}
            >
              Later
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SigUp" component={SigupScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
