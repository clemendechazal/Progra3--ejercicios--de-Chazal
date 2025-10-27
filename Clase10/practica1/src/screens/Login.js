import React, { Component } from "react"
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: ""
    }
  }

  onSubmit(email, password) {
      if (!email.includes("@")) {
        this.setState({ error: 'Email mal formateado' })
        return
      }

      if (password.length < 6) {
        this.setState({ error: 'Password debe tener minimo 6 caracteres' })
        return
      }
      
      auth.signInWithEmailAndPassword(email, password)
        .then((response) => {
          this.setState({ loggedIn: true });
          this.props.navigation.navigate('HomeMenu', { screen: 'Home' })
        })
        .catch(error => {
          this.setState({ error: 'Credenciales inválidas.' })
        })
    };
  

  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.text}>Registrate</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('HomeMenu', { screen: 'Home' })}>
          <Text style={styles.text}>Home</Text>
        </Pressable>

        <TextInput
          style={styles.texto}
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={text => this.setState({ mail: text })}
          value={this.state.mail}
        />
        <TextInput
          style={styles.texto}
          keyboardType='default'
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <Pressable onPress={() => this.onSubmit()}>
          <Text style={styles.boton2}>Inicia Sesión</Text>
        </Pressable>
        <Text>{this.state.mail}</Text>
        <Text>{this.state.password}</Text>
      </View>
    )
  }
}

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

export default Login;