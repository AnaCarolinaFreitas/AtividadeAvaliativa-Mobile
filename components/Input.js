import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input() {
    return (
        <View style={styles.inputIcon}>
                <TextInput style={styles.input} placeholder="Digite algo" />
            </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
    },
    })
