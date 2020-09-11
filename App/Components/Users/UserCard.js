import React from 'react'
import { Text, View } from 'react-native'
import { Helpers, Fonts } from 'App/Theme'
import Card from 'App/Components/Card'

export default (UserCard = ({ user, onPressItem }) => {
  const {
    name,
    email,
    todos: {
      meta: { totalCount },
    },
  } = user

  return (
    <Card onClick={onPressItem ? onPressItem : () => {}} style={Helpers.fullWdith}>
      <View style={[Helpers.fullWidth, Helpers.fillCol]}>
        <Text style={Fonts.h3}>{name}</Text>
        <Text style={Fonts.regular}>{email}</Text>
        <Text style={Fonts.regular}>Total TODOs: {totalCount}</Text>
      </View>
    </Card>
  )
})
