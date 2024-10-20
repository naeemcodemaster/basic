import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation,route}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <Text>Go to About</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate('Profile',{
        user:"bilal"
      })}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home