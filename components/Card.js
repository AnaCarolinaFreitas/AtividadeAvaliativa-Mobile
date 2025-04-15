import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Card ({img}) {
 return (
    <View style={styles.block}>        
    <Image>{img}</Image>
    </View>
 )
}

const styles = StyleSheet.create({
    block: {
        width: "17rem",
        height: "10rem",
        borderRadius: "1rem",
        backgroundColor:"black",
    }
})