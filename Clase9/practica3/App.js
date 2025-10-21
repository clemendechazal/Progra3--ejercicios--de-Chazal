import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductLists from './screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <text style={styles.texto}>Probando FlatLists</text>
      <ProductLists/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 40,
  }
});
