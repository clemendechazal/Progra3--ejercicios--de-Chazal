import React, { Component } from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native"
import { db, auth } from "../FireBase/config";

class NuevoPost extends Component {
    constructor() {
        super()
        this.state = {
            imagen: "",
            mensaje: ""
        }
    }

    componentDidMount() {
        db.collection('posts').add({
            email: auth.currentUser.email,
            mensaje: this.state.mensaje,
            createdAt: Date.now(),
        })
            .then()
            .catch(e => console.log(e))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Agrega un Post</Text>
                <TextInput
                    style={styles.texto}
                    keyboardType='default'
                    placeholder='Agregue una imagen'
                    onChangeText={text => this.setState({ imagen: text })}
                    value={this.state.imagen}
                />

                <TextInput
                    style={styles.texto}
                    keyboardType='default'
                    placeholder='Agregue un mensaje'
                    onChangeText={text => this.setState({ mensaje: text })}
                    value={this.state.mensaje}
                />
                <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.text}>Agregar</Text>
                </Pressable>
            </View>
        )
    }
}

export default NuevoPost;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c9e6cbff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        backgroundColor: '#156110ff',
        padding: 12,
        marginVertical: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center'
    },
    boton2: {
        backgroundColor: "#c9e6cbff",
        padding: 12,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        color: "#c9e6cbff",
        fontWeight: 'bold'
    },

    text: {
        color: "#c9e6cbff",
        fontWeight: 'bold'
    },
    texto: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#156110ff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        backgroundColor: "#c9e6cbff"
    }
})

