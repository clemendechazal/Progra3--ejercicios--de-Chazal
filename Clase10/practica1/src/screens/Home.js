import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.titulo}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },})