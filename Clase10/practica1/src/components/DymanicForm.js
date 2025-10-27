import React, { Component } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ""
    };
  }

  onSubmit() {
    console.log(this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          keyboardType="default"
          placeholder="Comentarios"
          onChangeText={(text) => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <View style={styles.datos}>
          <Text>Datos ingresados:</Text>
          <Text>{this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#c9e6cbff",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    backgroundColor: "#c9e6cbff",
    borderColor: '#156110ff',
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    padding: 10,
    marginBottom: 15
  },
  boton: {
    backgroundColor: "#156110ff",
    padding: 12,
    borderRadius: 10,
    width: "70%",
    alignItems: "center"
  },
  text: {
    color: "#c9e6cbff",
    fontWeight: "bold"
  },
  datos: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default DynamicForm;