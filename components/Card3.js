import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Texto...</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    card: {
        width: "23rem",
        height: "7rem",
        borderRadius: "1rem",
        backgroundColor: "#f2f3"
    },
})
