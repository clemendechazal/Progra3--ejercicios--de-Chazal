import React, { Component } from "react"
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"
import { auth , db} from "../FireBase/config";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      userName: "",
      password: ""
    }
  }

  onSubmit(email, pass) {
    auth.createUserWithEmailAndPassword(email, pass)
      .then(response => {
        this.setState({ registered: true });
        this.props.navigation.navigate("Login")

        db.collection('users').add({
          email: email,
          userName: this.state.userName,
          createdAt: Date.now(),
        })
          .then(response => console.log(response)
      )
          
          .catch(e => console.log(e))
      })
      .catch(error => {
        this.setState({ error: 'Fallo en el registro.' })
        console.log(error);

      })
  };


  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>Ya tengo cuenta</Text>
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
          placeholder='Username'
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          style={styles.texto}
          keyboardType='default'
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />

        <Pressable
          onPress={() => this.onSubmit(this.state.mail, this.state.password)}>
          <Text style={styles.boton2}>Registrate</Text>
        </Pressable>

        <Text>{this.state.mail}</Text>
        <Text>{this.state.username}</Text>
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
    backgroundColor: '#156110ff',
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

export default Register;