import React from "react";
import {View, StyleSheet} from "react-native";

export default function CardAna(){
    return (
        <View style={styles.card}>
           {icons.map((icon, index) => (
            <Text key={index}>
                {icon.emoji}
            </Text>
           ))}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "gray",
        width: 50,
        height: 50,
        borderRadius: 10,
    }
})