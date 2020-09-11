import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Text, Button, View } from 'react-native'

import styles from './UsersListScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import { userService } from 'App/Services/UserService'
import UserListItem from 'App/Components/Users/UserListItem'
import UserCard from 'App/Components/Users/UserCard'
/**
 *
 * This screen displays list of users
 */

const UsersListScreen = ({ navigate }) => {
  const navigation = useNavigation()
  const PAGE_SIZE = 5

  const handlePressUserItem = (user) => {
    navigation.navigate('UserDetails', { id: user.id })
  }

  const [showBy, setShowBy] = useState('list')
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)

  const handleClickNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, Math.ceil(total / PAGE_SIZE)))
  }

  const handleClickPrevPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1))
  }

  const toggleTitle = showBy === 'list' ? 'By Card' : 'By List'

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setShowBy(showBy === 'list' ? 'card' : 'list')} title={toggleTitle} />
    ),
  })

  const { loading, error, data } = userService.fetchUsers(currentPage)

  useEffect(() => {
    if (data && data.users) {
      setTotal(data.users.meta.totalCount)
    }
  }, [data])

  if (loading) return null
  if (error) return <Text style={styles.error}>`Error! ${error}`</Text>

  if (data.users.data) {
    return (
      <View style={[Helpers.fillCenter, Helpers.fillCol, Helpers.fullSize]}>
        <View style={[Helpers.row]}>
          <Text style={Fonts.h2}>Total Users: {total}</Text>
        </View>
        <View style={[Helpers.fillColMain, Helpers.fullWidth]}>
          <FlatList
            style={{ width: '100%' }}
            renderItem={({ item }) =>
              showBy === 'list' ? (
                <UserListItem user={item} onPressItem={() => handlePressUserItem(item)} />
              ) : (
                <UserCard user={item} onPressItem={() => handlePressUserItem(item)} />
              )
            }
            keyExtractor={(user) => user.id}
            data={data.users.data}
          />
        </View>

        <View style={[Helpers.row, Helpers.center, styles.paginationContainer]}>
          {currentPage > 1 && <Button title="Prev" onPress={handleClickPrevPage} />}

          <Text style={Fonts.medium}>{currentPage}</Text>
          {currentPage < Math.ceil(total / PAGE_SIZE) && (
            <Button title="Next" onPress={handleClickNextPage} />
          )}
        </View>
      </View>
    )
  }
}

export default UsersListScreen
