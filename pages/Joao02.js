import React from "react";
import { SafeAreaView, Text, ScrollView,  StyleSheet } from "react-native";

export default function Joao02(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>All Spider Man Movies</Text>
            <ScrollView style={styles.scroll}>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    scroll: {
        width: '100%',
        padding: 14,
      }
});