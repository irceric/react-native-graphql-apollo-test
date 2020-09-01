import React from 'react'
import { Text, View } from 'react-native'
import _ from 'lodash'

export default (UserListItem = ({ user }) => {
  
  const {
    id,
    name,
    email,
    todos
  } = user

  const totalCount = _.get(todos, 'meta.totalCount', 0)

  if (name && email && totalCount) {
    return (
      <View>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>Total TODOs: {totalCount}</Text>
      </View>
    )
  }
  return null
})
