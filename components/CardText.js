import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default function CardText(text) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: 90,
        height: 80,
        borderRadius: 10
    },

    text: {
        fontSize: 10,
        fontFamily: 'sans-serif'
    }

})