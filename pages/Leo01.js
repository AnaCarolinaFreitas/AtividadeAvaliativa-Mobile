import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View} from "react-native";
import Button from "./components/Button"
import Button2 from "./components/Button2"
import Card from "./components/Card"
import Card2 from "./components/Card2"


export default function Home() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Button/>
        <View style={styles.div}>
          <Card2/>
        <Card2/>
        <Card2/>
          </View>
          <Card/>
       <Button2/>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    div: {
      display: "flex",
      flexDirection: "row"
    },

    scrollView:{
        padding: 20
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    }
})