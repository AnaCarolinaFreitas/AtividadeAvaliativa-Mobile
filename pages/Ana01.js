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
        <ScrollView style={{backgroundColor: 'blue', height: 5, }}
        horizontal={true}
        horizontalshowsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id }
        renderItem={({ item}) => (
            <View style={styles.cardContainer}>
                <CardAna emoji={item.emoji} />
            </View>
        )}
        />

        <View style={styles.content}>
            <Text>This is an exemple of a text</Text>
        </View> 

        <View style={styles.contentImage}>
            <Image source={require("../assets/image1Ana.jpg")} styles={{}}/>
        </View>

        <View style={styles.content}>
            <Text>This is an exemple of a text</Text>
        </View> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
        backgroundColor: 'white',
        width: 300,
        height: 80,
        borderRadius: 10,
        margin: 10,
        padding: 20
       },

       contentImage: {
        width: 100,
        height: 100,
        borderRadius: 10
       },
    imagem1: {
        width: 100,
        height: 100
    }
});