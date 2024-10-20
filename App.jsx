import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Profile from './screens/Profile';
const Stack = createStackNavigator();
export default function App() {

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
              backgroundColor:'orange'
            },
            headerTitleStyle:{
              color:'#fff'
            }
        }}>
          <Stack.Screen options={{
            headerTitle: 'Dashboard',
            // headerStyle:{
            //   backgroundColor:'orange'
            // },
            // headerTitleStyle:{
            //   color:'#fff'
            // }
          }} name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen initialParams={{ user: "defaultname" }} name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>


      <StatusBar backgroundColor={'orange'} />
    </>
  );
}

const styles = StyleSheet.create({

});
