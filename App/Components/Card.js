import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { Colors } from 'App/Theme'

export default (Card = ({ children, style, onClick }) => (
  <TouchableWithoutFeedback onPress={onClick ? onClick : () => {}}>
    <View style={[styles.container, style]}>{children}</View>
  </TouchableWithoutFeedback>
))

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    padding: 20,
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    shadowOpacity: 0,
    shadowColor: Colors.darkGray,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
})
