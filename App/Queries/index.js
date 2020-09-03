import { gql } from '@apollo/client'

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
export const queries = {
  GET_USER,
  GET_USERS,
}
