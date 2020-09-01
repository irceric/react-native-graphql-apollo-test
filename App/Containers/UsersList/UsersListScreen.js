import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './UsersListScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { FlatList } from 'react-native-gesture-handler'
import UserListItem from '../../Components/Users/UserListItem'

/**
 *
 * This screen displays list of users
 */

const GET_USER = gql`
  query($options: PageQueryOptions, $todoOptions: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        username
        email
        name
        phone
        address {
          street
          city
          zipcode
        }
        company {
          name
        }
        todos(options: $todoOptions) {
          data {
            id
            title
            completed
            user {
              id
            }
          }
          meta {
            totalCount
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`

const GET_USERS = gql`
  query($options: PageQueryOptions, $todoOptions: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        email
        name
        todos(options: $todoOptions) {
          meta {
            totalCount
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`

const UsersListScreen = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 5
        }
      },
      "todoOptions": {
        "paginate": {
          "page": 1,
          "limit": 3
        }
      }
    }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (data.users.data) {
    return (
      <FlatList
        style={{ width: '100%' }}
        renderItem={ ({ item }) => { return <UserListItem user={item} />}}
        keyExtractor={(user, idex) => user.id + idex}
        data={data.users.data} />
    )
  }
}

export default UsersListScreen