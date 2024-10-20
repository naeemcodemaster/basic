import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('');
  console.log(name);
  return (
    <View style={styles.container}>
      <Text>Welcome to New App</Text>
      <Text>hi {name}</Text>
      <View style={{backgroundColor:'orange',width:'100%'}}>
          <Text>This is me</Text>
      </View>
      <TouchableOpacity onPress={()=>console.log("h")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <TextInput placeholder='Enter name' value={name} onChange={(e)=>setName(e.nativeEvent.text)}/>
      <TouchableOpacity onPress={()=>Alert.alert('Congratulations','submitted',[
        {
          text:'Cancel',
          onPress:()=>Alert.alert('Cancel pressed'),
          style:'cancel'
        }
      ])}>
        <Text>Submit</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>Vibration.vibrate()} style={{backgroundColor:'green',padding:5}}>
        <Text>Vibrate</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor='orange' style='light' />
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
