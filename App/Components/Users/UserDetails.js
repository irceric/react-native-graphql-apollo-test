import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Helpers, Colors, Fonts } from 'App/Theme'

const Row = ({ title, content }) => (
  <View style={[Helpers.row, Helpers.scrollSpaceBetween, styles.container]}>
    <Text style={[Fonts.regular, styles.headerStyle]}>{title}:</Text>
    <Text style={Fonts.medium}>{content}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },
  headerStyle: {
    color: Colors.darkGray,
  },
  todoContainer: {
    padding: 20,
  },
  todoItemStyle: {
    padding: 10,
  },
})

export default (UserDetails = ({ user }) => {
  const {
    id,
    name,
    email,
    phone,
    todos: {
      data: firstTodos,
      meta: { totalCount: totalTodoCount },
    },
    address: { street, city, zipcode },
    company: { name: companyName },
  } = user

  return (
    <View style={[Helpers.fill, Helpers.col]}>
      <Row title="Full Name" content={name} />
      <Row title="Email" content={email} />
      <Row title="Phone" content={phone} />
      <Row title="Address" content={`${street}, ${city}, ${zipcode}`} />
      <Row title="Company Name" content={companyName} />
      <Row title="Total Amount of TODOs" content={totalTodoCount} />
      <View style={[Helpers.colCenter, styles.todoContainer]}>
        <Text style={[Fonts.medium, styles.headerStyle]}>Top 3 TODOs:</Text>
        {firstTodos.map((todo) => (
          <View key={todo.id} style={[Helpers.fullWidth, Helpers.rowCenter, styles.todoItemStyle]}>
            <Text style={Fonts.regular}>{todo.title}</Text>
          </View>
        ))}
      </View>
    </View>
  )
})
