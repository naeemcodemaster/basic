import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
        <Text>Go to Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

export default About