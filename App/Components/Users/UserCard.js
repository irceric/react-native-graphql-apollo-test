import React from 'react'
import _ from 'lodash'
import { Text, View } from 'react-native'
import { Helpers, Fonts } from 'App/Theme'
import Card from 'App/Components/Card'

export default (UserCard = ({ user, onPressItem }) => {
  const { id, name, email, todos } = user

  const totalCount = _.get(todos, 'meta.totalCount', 0)
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
