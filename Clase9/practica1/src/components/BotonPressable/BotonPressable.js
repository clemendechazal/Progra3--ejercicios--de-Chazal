import React, { Component } from "react";
import { StyleSheet, Pressable, Text } from "react-native";


class BotonPressable extends Component {
    clickeame() {
        console.log("me clickearon");
    }

    render() {
        return (
            <Pressable style={styles.boton} onPress={() => this.clickeame()}>
                <Text style={styles.texto} >Clickeame</Text>
            </Pressable>
        )
    }
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#ccc",
        padding: 4,
        borderRadius: 4,
        marginBottom: 10,
         textAlign: "center",
    },

    texto: {
        color: "black",
        fontWeight: "bold",
         textAlign: "center",
    }
})

export default BotonPressable;