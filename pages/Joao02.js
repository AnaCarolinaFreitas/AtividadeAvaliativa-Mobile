import React from "react";

import { View, Text, Image } from "react-native";

export default function PerfilJoao() {
  return (
    <View style={styles.container}>
      <View style={styles.cardProfile} >
        <Image>
        </Image>
        <Text style={styles.title}>
          Descrição do meu perfil
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  }
})
