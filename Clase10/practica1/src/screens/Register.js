import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

export default function Register(props) {
  return (
    <View style = {styles.container}>
      <Text style= {styles.titulo}>Registro</Text>
      <Pressable style={styles.boton}
      onPress={()=> props.navigation.navigate("Login")} >
      <Text style={styles.botontexto}> ir al Login</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6', 
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start', 
  },
  boton: {
    backgroundColor: '#42A5F5', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '25%',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});