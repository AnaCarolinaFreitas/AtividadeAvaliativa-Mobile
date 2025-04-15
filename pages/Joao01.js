import React from "react";

import { StyleSheet, ScrollView, SafeAreaView, Image, View } from "react-native";
import Bloco from "../components/Block"
import Card from "../components/Card"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image source={require("../assets/bolapreta.png")} style={styles.icon} ></Image>
        </View>
        <View style={styles.right}>
          <Image source={require("../assets/bolabranca.jpg")} style={styles.icon}></Image>
          <Image source={require("../assets/bolabranca.jpg")} style={styles.icon}></Image>
        </View>
      </View>
      <View style={styles.bloco}>
        <Bloco />
        <Bloco />
      </View>
      <View style={styles.rolagem}>
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "2rem",
  },
  left: {
    backgroundColor: "white",
    width: "10rem",
    height: "10rem",
    width: "10rem",
  },
  right: {
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    height: "2rem",
    width: "2rem",
    margin: "1rem"
  },
  bloco: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  rolagem: {
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    margin: "1rem"
  }
})
