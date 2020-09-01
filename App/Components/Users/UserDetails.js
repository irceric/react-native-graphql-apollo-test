import React from 'react'
import { Text, View } from 'react-native'

const Row = ({title, content}) => (
  <View>
    <Text>{ttile}</Text>
    <Text>{content}</Text>
  </View>
)

export default (UserDetails = ({ user }) => {
  const {
    id,
    name,
    email,
    todos: {
      data: firstTodos,
      meta: { totalCount: totalTodoCount }
    },
    address: { street, city, zipcode },
    company: { name: companyName },
  } = user

  return (
    <View>
      <Row title="Full Name" content={name} />
      <Row title="Email" content={email} />
      <Row title="Phone" content={phone} />
      <Row title="Address" content={`${street}, ${city}, ${zipcode}`} />
      <Row title="Company Name" content={companyName} />
      <Row title="Total Amount of TODOs" content={totalTodoCount} />
      <View>
        {firstTodos.map(todo => (
          <View>
            {todo.title}
          </View>
        ))}
      </View>
    </View>
  )
})
