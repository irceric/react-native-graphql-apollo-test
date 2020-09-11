import React from 'react'
import { Text } from 'react-native'
import UserDetails from 'App/Components/Users/UserDetails'
import { userService } from 'App/Services/UserService'

/**
 *
 * This screen displays user details
 */

const UserDetailsScreen = ({ navigate, route }) => {
  const { id } = route.params
  const { loading, error, data } = userService.fetchSingleUser(id)

  if (loading) return null
  if (error) return <Text>Error! {error}</Text>

  if (data.user) {
    return <UserDetails user={data.user} />
  }
}

export default UserDetailsScreen
