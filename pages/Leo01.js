import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView} from "react-native";

export default function Tela3() {
    return (
      <SafeAreaView style={Styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Text style={styles.mainTitle}>Teste01</Text>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black"
    },
    scrollView:{
        padding: 16
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: "bold"
    }
})