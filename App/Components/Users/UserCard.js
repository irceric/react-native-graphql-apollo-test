import React from 'react'
import { Text, View } from 'react-native'

export default UserCard =  ({user}) => {
  const {id, username, email, todos } = user
  const { data, meta: {totalCount }} = todos
  return (
    <View>
      <Text>Card Content</Text>
      <Text>{username}</Text>
      <Text>{email}</Text>
      <Text>Total TODOs: {totalCount}</Text>
    </View>
  )
}