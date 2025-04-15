import React from "react";
import { StyleSheet, View } from "react-native";

export default function Bloco () {
 return (
    <View style={styles.block}>
    </View>
 )
}

const styles = StyleSheet.create({
    block: {
        width: "8rem",
        height: "8rem",
        borderRadius: "1rem",
        backgroundColor:"#f2f3",
    }
})