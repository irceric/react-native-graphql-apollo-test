import React from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import { Helpers, Fonts, Colors } from 'App/Theme'

export default (UserListItem = ({ user, onPressItem }) => {
  const {
    name,
    email,
    todos: {
      meta: { totalCount },
    },
  } = user

  if (name && email && totalCount) {
    return (
      <TouchableWithoutFeedback onPress={onPressItem ? onPressItem : () => {}}>
        <View style={[Helpers.fullWidth, Helpers.fillCol, styles.container]}>
          <Text style={Fonts.h3}>{name}</Text>
          <Text style={Fonts.regular}>{email}</Text>
          <Text style={Fonts.regular}>Total TODOs: {totalCount}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  return null
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: Colors.lightGray,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },
})
