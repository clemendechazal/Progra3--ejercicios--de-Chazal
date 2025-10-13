import React, { Component } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

export default class Contador extends Component {
    constructor() {
        super()
        this.state = {
            contador: 0
        }
    }
    aumentador() {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <View style= {styles.contatiner}>
                <Text>Cantidad de Clicks: {this.state.contador}</Text>
                <Pressable style= {styles.boton} onPress={() => this.aumentador()}>
                    <Text style= {styles.texto}>Click aqui para contar</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: " rgba(0, 255, 0, 0.5)",
        padding: 7,
        borderRadius: 4,
        marginBottom: 10,
         textAlign: "center",
    },

    texto: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    contatiner: {
        marginVertical: 5,
    }
})