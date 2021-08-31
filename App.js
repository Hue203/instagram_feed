import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import logo from "./assets/instagram.png";
import { Feather } from "@expo/vector-icons";
import SinglePost from "./components/SinglePost";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <ScrollView>
        <View style={styles.singlePost}>
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: { flex: 1, width: null, height: 44 },
  header: {
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singlePost: {
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 35,
    marginRight: 35,
  },
});
