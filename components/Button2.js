import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, Text  } from "react-native";

export default function Button2() {
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Teste do Botão</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem"
    },

    button: {
        backgroundColor: "black",
        padding: 10,
        marginTop: 20,
        width: "18rem",
        borderRadius:25,
        height: "3rem",
    },

    text: {
        color: "black",
    },
})