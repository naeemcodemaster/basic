import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Contact = ({navigation}) => {
  return (
    <View>
      <Text>Contact</Text>
      <TouchableOpacity onPress={()=>navigation.replace('About')}>
        <Text>Go to About</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contact