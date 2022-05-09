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
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { version } from "react-dom";

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("./assets/mainimage.jpg")}
          style={{ width: 350, height: 150 }}
        />
      </View>
    </View>
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

        <Text style={{ marginTop: 30, textAlign: "center" }}>SignUp With</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <AntDesign name="google" size={30} color="black" />
          <Entypo name="facebook-with-circle" size={30} color="black" />
          <AntDesign name="twitter" size={30} color="black" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: 20 }}>Or</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
      <Stack.Screen name="Home" component={MainScreen} />
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
