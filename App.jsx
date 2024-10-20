import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to New App</Text>
      <Text>hi</Text>
      <View style={{backgroundColor:'orange',width:'100%'}}>
          <Text>Thi si me</Text>
      </View>
      <TouchableOpacity onPress={()=>console.log("h")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
});
