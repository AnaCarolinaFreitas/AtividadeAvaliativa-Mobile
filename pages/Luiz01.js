import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Bloco from "../components/Block";
import Card from "../components/Card3"
import Input from "../components/Input"

export default function Home() {
  return (
    <View style={styles.pai}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Está é minha página na atividade avaliativa de mobile
        </Text>
      </View>
      <View style={styles.card}>
        <Bloco />
        <Bloco />
        
      </View>
      
      
      
      <View style={styles.card2}>
        <Input />
        <Card />
        <Card />
        <Card />
        <View style={styles.bolas}>
      <Image source={require("../assets/bola.png")} style={styles.icon}></Image>
      <Image source={require("../assets/bola.png")} style={styles.icon}></Image>
      <Image source={require("../assets/bola.png")} style={styles.icon}></Image>
      <Image source={require("../assets/bola.png")} style={styles.icon}></Image>
      </View>
      </View>
      
      
      
      
    
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    width: "100%",
    height: "20rem",
    justifyContent: "start",
  },
  bolas: {
    flexDirection: "row",
    width: "100%",
    gap: "5rem"
  },
  icon: {
    height: "2rem",
    width: "2rem",
  },
  card: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  pai: {
    flexDirection: "column",
    gap: "6rem",
  },
  card2: {
    padding: "3rem",
    gap: "2rem"
  },
});
