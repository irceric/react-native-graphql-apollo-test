import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './UserDetailsScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import UserDetails from 'App/Components/Users/UserDetails'

/**
 *
 * This screen displays list of users
 */

const GET_USER = gql`
  query($id: ID!, $todoOptions: PageQueryOptions) {
    user(id: $id) {
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
  }
`

const UserDetailsScreen = ({ navigate, route }) => {
  const { id } = route.params
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: id,
      todoOptions: {
        paginate: {
          page: 1,
          limit: 3,
        },
      },
    },
  })

  if (loading) return null
  if (error) return <Text>Error! {error}</Text>

  if (data.user) {
    return <UserDetails user={data.user} />
  }
}

export default UserDetailsScreen
