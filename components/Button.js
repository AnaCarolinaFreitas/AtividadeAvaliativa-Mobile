import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

export default function Button() {
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
            </TouchableOpacity>
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

    button: {
        backgroundColor: "black",
        padding: 10,
        marginTop: 20,
        width: 300,
        borderRadius:25,
        height: 45,
    },

    text: {
        color: "black",
    },

    button2: {
        backgroundColor: "black",
        width: "50px",
        borderRadius:"100%",
        height: "50px",
        marginLeft: "-6rem"
    }
})