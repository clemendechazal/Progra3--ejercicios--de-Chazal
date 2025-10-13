import React from "react";
import { View, Text } from "react-native-web";
import BotonPressable from "../components/BotonPressable/BotonPressable";
import Contador from "../components/Contador/Contador";
import { StyleSheet } from "react-native";


function Home() {
    return (
        <View style={styles.container}>
            <Text>Hola mundo</Text>
            <BotonPressable />
            <Contador />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        padding: 10,
    }
})

export default Home;