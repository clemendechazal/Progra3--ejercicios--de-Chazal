import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, StyleSheet} from 'react-native';

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tu perfil</Text>
            <Pressable style={styles.boton}
                onPress={() => props.navigation.navigate("Login")} >
                <Text style={styles.textoBoton}> Deslogearse</Text>
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
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  boton: {
    backgroundColor: '#FFA000', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
  },
  textoBoton: {
    color: '#000', 
    fontSize: 15,
    textAlign: 'center',
  },
});