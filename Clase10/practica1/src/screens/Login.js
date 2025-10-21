import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, StyleSheet} from 'react-native';


export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aca te podes logear</Text>
      <Pressable style={styles.botonCeleste}
            onPress={()=> props.navigation.navigate("Register")} >
            <Text style={styles.textoBoton}> ir al registro</Text>
            </Pressable>
            <Pressable style={styles.botonNaranja}
            onPress={()=> props.navigation.navigate("HomeMenu")} >
            <Text style={styles.textoBoton}> Entrar en la app</Text>
            </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  botonCeleste: {
    backgroundColor: '#42A5F5', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
  },
  botonNaranja: {
    backgroundColor: '#FFA000', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    marginTop: 5,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});