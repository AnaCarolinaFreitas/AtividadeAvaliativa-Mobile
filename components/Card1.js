import React from "react";

import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image} from "react-native";

export default function Card(){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.card}>
            <TouchableOpacity style={styles.card2}></TouchableOpacity>
        <Text style={styles.conteudo}>Amo Ds</Text>
        <Image source={require("../assets/ds.jpg")} style={styles.image}></Image>
        <Text style={styles.conteudo2}>Ds é dahora porque tem computadores...</Text>
        <TouchableOpacity style={styles.card1}></TouchableOpacity>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        marginTop: "10rem"
    },

    card1: {
     width: "15rem",
     height: "2rem",
     backgroundColor: "white",
     borderRadius: "30px",
    
    },

    card2: {
     width: "50px",
     height: "50px",
     backgroundColor: "white",
     borderRadius: "100%",
         marginRight: "200px"
    },

    card: {
        width: "20rem",
        height: "30rem",
        backgroundColor: "gray",
        borderRadius: "20px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        boxShadow: "white",
        padding: "4rem",
        marginTop: "3rem"
    },

    image: {
        width: "15rem",
        height: "7rem",
        marginTop: "10px",
        borderRadius: "20px"
      },

      conteudo: {
        fontFamily: "Arial",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
      },

      conteudo2: {
        fontFamily: "Arial",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
         margin: "20px"
      }
})