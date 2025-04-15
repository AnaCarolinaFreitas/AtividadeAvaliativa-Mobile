import React from "react";

import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from "react-native";

export default function Card2(){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.card}>
            </TouchableOpacity>
            <Text style={styles.conteudo2}>Ds é dahora porque tem computadores...</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },

    card: {
        width: "50px",
        height: "50px",
        backgroundColor: "black",
        borderRadius: "100%",
    },

      conteudo: {
        fontFamily: "Arial",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
         margin: "20px"
      },

      conteudo2: {
        fontFamily: "Arial",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "black",
        marginTop: "10px",
        padding: "20px",
        margin: "10px"
      }
})