import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';

const Profile = ({route}) => {
    console.log(route);
    const user = route?.params?.user;
  return (
    <View>
        <Link to={{screen:'Home'}}>Go back to Home</Link>
      <Text>Username is {user}</Text>
    </View>
  )
}

export default Profile