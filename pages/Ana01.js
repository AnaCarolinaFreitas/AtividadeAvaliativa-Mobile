import { View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import { Text } from "react-native";
import React from 'react';
import { Image } from 'react-native';
import CardAna from '../components/CardAna';
import CardText from '../components/CardText';

export default function Ana01() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center', margin:15, gap: 5}}>
        <Image source={require("../assets/usericon.png")} style={styles.imagem}/>
         <Text style={styles.text}>Ana Carolina Garcia Freitas 2TDS1</Text>
        </View>
        <ScrollView style={styles.scrollContainer}
        horizontalshowsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id }
        renderItem={({ item}) => (
            <View style={styles.cardContainer}>
                <CardAna emoji={item.emoji} />
            </View>
        )}
        />

        <View style={styles.content}>
            <CardText texto=" This is an example of a text that would fit in this card" />

            <Image source={require("../assets/image1Ana.jpg")} style={styles.imageContent}/>

            <CardText texto="This is the second card, we can insert any text that we want here" />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        fontSize: 20
    },

    imagem: {
        width: 50,
        height: 50
    },

    scrollContainer:{
        flexDirection: 'row',
        height: 10,
        padding: 15
    },

    cardContainer: {
        backgroundColor: 'blue'
    },

    content: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    imageContent: {
        width: 100,
        height: 100
    }
});